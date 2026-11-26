import {readFile, writeFile, mkdir, readdir, cp, rm} from 'node:fs/promises';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';
import {execSync} from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const out = resolve(root, 'dist');
const catalog = vm.runInNewContext(await readFile(resolve(root, 'products.js'), 'utf8') + '\n({products:HOODBTC_PRODUCTS,collections:HOODBTC_COLLECTIONS})');
const guides = vm.runInNewContext(await readFile(resolve(root, 'guides.js'), 'utf8') + '\nHOODBTC_GUIDES');
const origin = 'https://shop.hoodbtc.com';
const escape = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const productPath = p => '/products/' + encodeURIComponent(p.id) + '/';
const BRANDS = {weatherxm:'WeatherXM',geodnet:'GEODNET',dimo:'DIMO',natix:'NATIX',sensecap:'SenseCAP',helium:'Helium',ledger:'Ledger',tangem:'Tangem',safepal:'SafePal',cryptosteel:'Cryptosteel',trezor:'Trezor',deeper:'Deeper Network',mntd:'MNTD'};
const brandOf = id => BRANDS[String(id).split('-')[0]] || 'HOODBTC Shop';
const metaDesc = text => { const t = String(text).replace(/\s+/g, ' ').trim(); if (t.length <= 160) return t; const cut = t.slice(0, 157); const sp = cut.lastIndexOf(' '); return (sp > 80 ? cut.slice(0, sp) : cut).trim() + '…'; };
let lastmod = new Date().toISOString().slice(0, 10);
try { lastmod = execSync('git log -1 --format=%cs', {cwd: root, stdio: ['ignore', 'pipe', 'ignore']}).toString().trim() || lastmod; } catch {}
const absolute = html => html.replace(/\b(href|src|action)="(?![a-z]+:|\/|#)([^" ]+)"/gi, '$1="/$2"');
const card = p => `<a class="product-card glass" href="${productPath(p)}"><span class="pc-media"><img src="/${p.image}" alt="${escape(p.name)}" loading="lazy" decoding="async" width="600" height="400"></span><span class="pc-body"><span class="pc-name">${escape(p.name)}</span><span class="pc-price">$${p.price.toFixed(2)}</span></span></a>`;
const guideBlocks = items => items.map(it => it.type === 'ul'
  ? `<ul>${it.items.map(t => `<li>${escape(t)}</li>`).join('')}</ul>`
  : `<p>${escape(it.text)}</p>`).join('\n');
const guideHtml = g => `<section class="product-guide glass" aria-label="Product guide">
<h2>What it does</h2>
${guideBlocks(g.what)}
<h2>How it&#39;s used</h2>
<ol>${g.steps.map(s => `<li>${escape(s)}</li>`).join('')}</ol>
${g.howParas.map(t => `<p>${escape(t)}</p>`).join('\n')}
<h2>Key specs</h2>
<ul class="spec-list">${g.specs.map(s => s.label ? `<li><strong>${escape(s.label)}:</strong> ${escape(s.value)}</li>` : `<li>${escape(s.value)}</li>`).join('')}</ul>
<h2>Good to know</h2>
${guideBlocks(g.good)}
</section>`;
await rm(out, {recursive:true,force:true});
await mkdir(out,{recursive:true});
for (const f of await readdir(root)) {
  if ((/\.(html|js|css|png|txt|ico)$/.test(f) || f === '_headers') && f !== 'guides.js') await cp(resolve(root,f),resolve(out,f));
}
await cp(resolve(root,'assets'),resolve(out,'assets'),{recursive:true});
await cp(resolve(root,'payment'),resolve(out,'payment'),{recursive:true,filter: p => !p.endsWith('.test.mjs')});
const template = await readFile(resolve(root,'product.html'),'utf8');
for (const p of catalog.products) {
  const title = p.name + ' — HOODBTC Shop';
  const url = origin + productPath(p);
  let html = absolute(template).replace('<html lang="en">',`<html lang="en" data-product-id="${escape(p.id)}">`);
  html = html.replace(/<title>.*?<\/title>/,`<title>${escape(title)}</title>`)
    .replace(/<link rel="canonical"[^>]+>/,`<link rel="canonical" href="${url}">`);
  for (const [key,value] of Object.entries({'description':metaDesc(p.description),'og:title':title,'og:description':metaDesc(p.description),'og:url':url,'og:image':origin+'/'+p.image,'og:type':'product','twitter:title':title,'twitter:description':metaDesc(p.description),'twitter:image':origin+'/'+p.image})) {
    html = html.replace(new RegExp(`<meta (name|property)="${key}" content="[^"]*">`),`<meta ${key.startsWith('og:')?'property':'name'}="${key}" content="${escape(value)}">`);
  }
  const col = catalog.collections.find(c=>c.slug===p.collection);
  html = html.replace(/<img id="p-image"[^>]*>/,`<img id="p-image" src="/${p.image}" alt="${escape(p.name)}" fetchpriority="high" decoding="async" width="600" height="600">`)
    .replace(/(<h1 id="p-name">).*?(<\/h1>)/,`$1${escape(p.name)}$2`)
    .replace(/(<p class="price" id="p-price">).*?(<\/p>)/,(_match,open,close)=>open+'$'+p.price.toFixed(2)+close)
    .replace(/(<p class="kicker" id="p-collection">).*?(<\/p>)/,`$1${escape(col?.name||'')}$2`)
    .replace(/(<p class="product-desc" id="p-desc">).*?(<\/p>)/,`$1${escape(p.description)}$2`)
    .replace(/<select id="p-variant">.*?<\/select>/,`<select id="p-variant">${(p.variants||['Standard']).map(v=>`<option>${escape(v)}</option>`).join('')}</select>`);
  const graph = {'@context':'https://schema.org','@graph':[
    {'@type':'Product','@id':url+'#product',name:p.name,brand:{'@type':'Brand',name:brandOf(p.id)},description:p.description,image:[origin+'/'+p.image],url,sku:p.id,offers:{'@type':'Offer',url,priceCurrency:'USD',price:p.price.toFixed(2),availability:'https://schema.org/InStock',seller:{'@type':'Organization',name:'HOODBTC Shop',url:origin+'/'}}},
    {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'HOODBTC Shop',item:origin+'/'},{'@type':'ListItem',position:2,name:col?.name||'Products',item:origin+'/'+p.collection+'.html'},{'@type':'ListItem',position:3,name:p.name,item:url}]}
  ]};
  html = html.replace('</head>',`<script id="product-jsonld" type="application/ld+json">${JSON.stringify(graph).replace(/</g,'\\u003c')}</script>\n</head>`);
  const guide = guides[p.id];
  if (guide) html = html.replace('<div id="product-missing"', guideHtml(guide) + '\n      <div id="product-missing"');
  // Maker return restrictions are stated on the product page itself, under the
  // buy actions — the same note shop.js renders on the dynamic product page
  // (same id there, so the client script never duplicates it).
  if (p.returnsNote) html = html.replace(/(<p class="added-note" id="p-added"[^>]*>[\s\S]*?<\/p>)/, `$1\n          <p class="returns-note" id="p-returns-note" role="note">${escape(p.returnsNote)} <a href="/returns.html">Returns &amp; Refunds</a>.</p>`);
  await mkdir(resolve(out,'products',p.id),{recursive:true});
  await writeFile(resolve(out,'products',p.id,'index.html'),html);
}
for (const c of catalog.collections) {
  const file=resolve(out,c.slug+'.html');
  try {
    const products=c.slug==='latest-devices'?catalog.products.filter(p=>p.drop):catalog.products.filter(p=>p.collection===c.slug||(p.alsoIn&&p.alsoIn.includes(c.slug)));
    let html=await readFile(file,'utf8');
    html=html.replace(/(<div[^>]+id="product-grid"[^>]*>)[\s\S]*?(<\/div>)/,`$1${products.map(card).join('\n')}$2`);
    await writeFile(file,html);
  } catch(e) { if(e.code!=='ENOENT') throw e; }
}
// Known legacy links remain crawlable; unknown IDs retain the noindex fallback.
const redirects=catalog.products.flatMap(p=>['/product.html','/product'].map(path=>`${path} id=${p.id} ${productPath(p)} 301!`)).join('\n');
await writeFile(resolve(out,'_redirects'),redirects+'\n'+await readFile(resolve(root,'_redirects'),'utf8'));
const pages=['/',...catalog.collections.map(c=>'/'+c.slug+'.html'),...['terms','privacy','shipping','returns'].map(p=>'/'+p+'.html'),...catalog.products.map(productPath)];
await writeFile(resolve(out,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+pages.map(p=>`<url><loc>${origin}${escape(p)}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n')+'\n</urlset>\n');
console.log(`Built ${catalog.products.length} product pages with static metadata, product data, collection links and sitemap.`);
