import {readFileSync,existsSync} from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
const root=fileURLToPath(new URL('../',import.meta.url));
const products=vm.runInNewContext(readFileSync(resolve(root,'products.js'),'utf8')+'\nHOODBTC_PRODUCTS');
const site='https://shop.hoodbtc.com';
const sitemap=readFileSync(resolve(root,'dist/sitemap.xml'),'utf8');
for(const p of products){
 const html=readFileSync(resolve(root,'dist/products',p.id,'index.html'),'utf8');
 const canonical=site+'/products/'+p.id+'/';
 assert.ok(html.includes('<link rel="canonical" href="'+canonical+'">'),p.id+' canonical');
 assert.equal((html.match(/id="p-price"/g)||[]).length,1,p.id+' duplicate price');
 assert.ok(html.includes('id="p-price">$'+p.price.toFixed(2)+'</p>'),p.id+' price');
 const graph=JSON.parse(html.match(/id="product-jsonld"[^>]*>(.*?)<\/script>/s)[1])['@graph'];
 assert.equal(graph[0].name,p.name);assert.equal(graph[0].offers.price,p.price.toFixed(2));
 assert.equal(graph[0].url,canonical);assert.ok(!('availability' in graph[0].offers));
 assert.ok(sitemap.includes('<loc>'+canonical+'</loc>'));assert.ok(existsSync(resolve(root,p.image)));
 assert.ok(html.includes('autoplay muted loop playsinline'));assert.ok(!html.includes('href="cart.html"'));
}
assert.equal(products.length,24);assert.equal(new Set(products.map(p=>p.id)).size,24);
assert.ok(existsSync(resolve(root,'dist/assets/hoodbtc-h-icon.png')));
console.log('PASS: all 24 static product pages, exact catalog prices, unique canonicals, JSON-LD, sitemap, images and water attributes.');
