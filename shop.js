/* ============================================================
   HOODBTC Shop — storefront logic
   Catalog rendering (from products.js), product detail page,
   and a client-side cart in localStorage. Ordering is manual:
   the cart page carries a Netlify Forms order form — no payment
   is taken on the site. Peter confirms availability and
   shipping, then sends payment details (crypto / Interac).
   ============================================================ */
(function () {
  "use strict";

  var CART_KEY = "hoodbtc-shop-cart-v1";
  var money = function (n) {
    return "$" + Number(n || 0).toFixed(2);
  };
  var products = (typeof HOODBTC_PRODUCTS !== "undefined") ? HOODBTC_PRODUCTS : [];
  var byId = Object.create(null);
  products.forEach(function (p) { byId[p.id] = p; });

  /* ---------- Cart state ---------- */
  function loadCart() {
    try {
      var raw = JSON.parse(localStorage.getItem(CART_KEY));
      if (!Array.isArray(raw)) return [];
      return raw.filter(function (i) {
        return i && typeof i.id === "string" && byId[i.id] &&
          typeof i.variant === "string" &&
          (byId[i.id].variants && byId[i.id].variants.length ? byId[i.id].variants : ["Standard"]).includes(i.variant) &&
          Number.isInteger(i.qty) &&
          i.qty >= 1 && i.qty <= 99;
      });
    } catch (e) { return []; }
  }
  function saveCart(cart) {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { return false; }
    renderCartCount(cart);
    return true;
  }
  function cartCount(cart) {
    return cart.reduce(function (s, i) { return s + i.qty; }, 0);
  }
  function renderCartCount(cart) {
    cart = cart || loadCart();
    document.querySelectorAll("[data-cart-count]").forEach(function (el) {
      el.textContent = cartCount(cart);
    });
  }
  function addToCart(id, variant, qty) {
    if (!byId[id] || !Number.isInteger(qty) || qty < 1 || qty > 99) return;
    var allowed = byId[id].variants && byId[id].variants.length ? byId[id].variants : ["Standard"];
    if (!allowed.includes(variant)) return;
    var cart = loadCart();
    var line = cart.find(function (i) { return i.id === id && i.variant === variant; });
    if (line) { line.qty = Math.min(99, line.qty + qty); } else { cart.push({ id: id, variant: variant, qty: qty }); }
    return saveCart(cart);
  }

  /* ---------- Mobile collection nav (phones only; CSS hides it on desktop) ---------- */
  function renderMobileNav() {
    var header = document.querySelector("header.topbar");
    if (!header || document.querySelector(".mobile-nav")) return;
    var links = [
      ["index.html", "Home"],
      ["latest-devices.html", "Latest Devices"],
      ["vehicle-auto.html", "Vehicle & Auto"],
      ["connectivity.html", "Connectivity & eSIM"],
      ["hotspots.html", "Hotspots"],
      ["weather.html", "Weather"],
      ["location.html", "Location"],
      ["wallets-security.html", "Wallets & Security"]
    ];
    var nav = document.createElement("nav");
    nav.className = "mobile-nav";
    nav.setAttribute("aria-label", "Collections");
    nav.innerHTML = links.map(function (l) {
      return '<a href="/' + l[0] + '">' + l[1] + "</a>";
    }).join("");
    header.insertAdjacentElement("afterend", nav);
  }

  /* ---------- Collection grids ---------- */
  function productsFor(slug) {
    if (slug === "latest-devices") return products.filter(function (p) { return p.drop; });
    return products.filter(function (p) { return p.collection === slug || (p.alsoIn && p.alsoIn.indexOf(slug) !== -1); });
  }
  function renderGrid() {
    var grid = document.getElementById("product-grid");
    if (!grid) return;
    var list = productsFor(grid.getAttribute("data-collection"));
    var empty = document.getElementById("empty-state");
    if (!list.length) { if (empty) empty.hidden = false; return; }
    grid.innerHTML = list.map(function (p) {
      return '<a class="product-card glass" href="/products/' + encodeURIComponent(p.id) + '/">' +
        '<span class="pc-media"><img src="/' + p.image + '" alt="' + p.name + '" loading="lazy" decoding="async" width="600" height="400"></span>' +
        '<span class="pc-body"><span class="pc-name">' + p.name + '</span>' +
        '<span class="pc-price">' + money(p.price) + '</span></span></a>';
    }).join("");
  }

  /* ---------- Product detail (?id=) ---------- */
  function renderProduct() {
    var wrap = document.getElementById("product-detail");
    if (!wrap) return;
    var id = document.documentElement.getAttribute("data-product-id") || new URLSearchParams(location.search).get("id");
    var p = id && byId[id];
    if (!p) {
      wrap.hidden = true;
      document.getElementById("product-missing").hidden = false;
      document.title = "Product not found — HOODBTC Shop";
      var robots = document.querySelector('meta[name="robots"]');
      if (robots) robots.setAttribute("content", "noindex,follow");
      return;
    }
    document.title = p.name + " — HOODBTC Shop";
    var desc = p.description || "";
    var BRANDS = { weatherxm: "WeatherXM", geodnet: "GEODNET", dimo: "DIMO", natix: "NATIX", sensecap: "SenseCAP", helium: "Helium", ledger: "Ledger", tangem: "Tangem", safepal: "SafePal", cryptosteel: "Cryptosteel", trezor: "Trezor", deeper: "Deeper Network", mntd: "MNTD" };
    var brand = BRANDS[String(p.id).split("-")[0]] || "HOODBTC Shop";
    var metaText = (function (t) { t = String(t).replace(/\s+/g, " ").trim(); if (t.length <= 160) return t; var cut = t.slice(0, 157); var sp = cut.lastIndexOf(" "); return (sp > 80 ? cut.slice(0, sp) : cut).trim() + "…"; })(desc);
    var pageUrl = "https://shop.hoodbtc.com/products/" + encodeURIComponent(p.id) + "/";
    var setMeta = function (selector, value) {
      var el = document.querySelector(selector);
      if (el) el.setAttribute("content", value);
    };
    setMeta('meta[name="description"]', metaText);
    setMeta('meta[property="og:title"]', p.name + " — HOODBTC Shop");
    setMeta('meta[property="og:description"]', metaText);
    setMeta('meta[name="twitter:title"]', p.name + " — HOODBTC Shop");
    setMeta('meta[name="twitter:description"]', metaText);
    setMeta('meta[property="og:url"]', pageUrl);
    var canon = document.querySelector('link[rel="canonical"]');
    if (canon) canon.setAttribute("href", pageUrl);
    // SEO: source all structured data from the same catalog used by the storefront.
    // Availability is declared InStock: every listed product is orderable; availability and
    // shipping are confirmed by email before any payment (manual-order model).
    var productImageUrl = new URL(p.image, "https://shop.hoodbtc.com/").href;
    setMeta('meta[property="og:image"]', productImageUrl);
    setMeta('meta[name="twitter:image"]', productImageUrl);
    setMeta('meta[property="og:type"]', "product");
    var productGraph = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Product",
          "@id": pageUrl + "#product",
          "name": p.name,
          "brand": { "@type": "Brand", "name": brand },
          "sku": p.id,
          "description": desc,
          "image": [productImageUrl],
          "url": pageUrl,
          "offers": {
            "@type": "Offer",
            "url": pageUrl,
            "priceCurrency": "USD",
            "price": Number(p.price).toFixed(2),
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "HOODBTC Shop", "url": "https://shop.hoodbtc.com/" }
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "HOODBTC Shop", "item": "https://shop.hoodbtc.com/" },
            { "@type": "ListItem", "position": 2, "name": p.name, "item": pageUrl }
          ]
        }
      ]
    };
    var jsonLd = document.getElementById("product-jsonld");
    if (!jsonLd) {
      jsonLd = document.createElement("script");
      jsonLd.id = "product-jsonld";
      jsonLd.type = "application/ld+json";
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(productGraph);
    document.getElementById("p-image").src = "/" + p.image;
    document.getElementById("p-image").alt = p.name;
    var col = (typeof HOODBTC_COLLECTIONS !== "undefined")
      ? HOODBTC_COLLECTIONS.find(function (c) { return c.slug === p.collection; }) : null;
    document.getElementById("p-collection").textContent = col ? col.name : "";
    document.getElementById("p-name").textContent = p.name;
    document.getElementById("p-price").textContent = money(p.price);
    var qtyField = document.getElementById("p-qty");
    if (qtyField) qtyField.setAttribute("inputmode", "numeric");
    var descEl = document.getElementById("p-desc");
    descEl.textContent = p.description || "";
    // Make the existing product-specific explanation easier to scan on mobile.
    // No added performance, availability or compatibility claims.
    if (p.description && descEl && !document.getElementById("product-explained")) {
      var info = document.createElement("section");
      info.id = "product-explained";
      info.className = "product-explained glass";
      var heading = document.createElement("h3");
      heading.textContent = "What exactly is this?";
      var explanation = document.createElement("p");
      explanation.textContent = p.description;
      var reminder = document.createElement("p");
      reminder.className = "product-disclaimer";
      reminder.textContent = "Check device compatibility, network and regional requirements before ordering. Availability and final shipping costs are confirmed before payment.";
      info.appendChild(heading);
      info.appendChild(explanation);
      info.appendChild(reminder);
      descEl.insertAdjacentElement("afterend", info);
      descEl.hidden = true;
    }
    var sel = document.getElementById("p-variant");
    var variants = (p.variants && p.variants.length ? p.variants : ["Standard"]);
    sel.replaceChildren();
    variants.forEach(function (v) { var option = document.createElement("option"); option.value = String(v); option.textContent = String(v); sel.appendChild(option); });
    if (variants.length === 1 && variants[0] === "Standard") {
      sel.closest("label").hidden = true;
    }
    function addSelectedProduct() {
      var field = document.getElementById("p-qty");
      if (!field.reportValidity()) return false;
      var saved = addToCart(p.id, sel.value, Number(field.value));
      var note = document.getElementById("p-added");
      note.hidden = false;
      note.setAttribute("role", "status");
      note.textContent = saved ? "Added to your cart." : "Your browser could not save the cart. Allow site storage and try again.";
      return saved;
    }
    document.getElementById("p-add").addEventListener("click", addSelectedProduct);
    var buyNow = document.getElementById("p-buy");
    if (buyNow) buyNow.addEventListener("click", function () {
      if (addSelectedProduct()) window.location.assign("/cart.html");
    });
  }

  /* ---------- Cart page ---------- */
  function renderCartPage() {
    var box = document.getElementById("cart-items");
    if (!box) return;
    var cart = loadCart().filter(function (i) { return byId[i.id]; });
    var empty = document.getElementById("cart-empty");
    var summary = document.getElementById("cart-summary");
    if (!cart.length) {
      box.innerHTML = ""; empty.hidden = false; summary.hidden = true; return;
    }
    empty.hidden = true; summary.hidden = false;
    box.innerHTML = cart.map(function (i, idx) {
      var p = byId[i.id];
      return '<div class="cart-item glass">' +
        '<img src="' + p.image + '" alt="' + p.name + '">' +
        '<div><p class="ci-name">' + p.name + '</p>' +
        '<p class="ci-variant">' + (i.variant === "Standard" ? "" : i.variant + " · ") + money(p.price) + '</p>' +
        '<div class="ci-controls">' +
        '<button class="qty-btn" data-act="dec" data-idx="' + idx + '" aria-label="Decrease">−</button>' +
        '<span>' + i.qty + '</span>' +
        '<button class="qty-btn" data-act="inc" data-idx="' + idx + '" aria-label="Increase">+</button>' +
        '<button class="remove-btn" data-act="rm" data-idx="' + idx + '">Remove</button>' +
        '</div></div>' +
        '<span class="ci-line">' + money(p.price * i.qty) + '</span></div>';
    }).join("");
    var subtotal = cart.reduce(function (s, i) { return s + byId[i.id].price * i.qty; }, 0);
    document.getElementById("sum-subtotal").textContent = money(subtotal);
    document.getElementById("sum-total").textContent = money(subtotal);
    box.querySelectorAll("button[data-act]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var c = loadCart(); var idx = +btn.getAttribute("data-idx"); var act = btn.getAttribute("data-act");
        if (!c[idx]) return;
        if (act === "inc") c[idx].qty = Math.min(99, c[idx].qty + 1);
        if (act === "dec") c[idx].qty = Math.max(1, c[idx].qty - 1);
        if (act === "rm") c.splice(idx, 1);
        saveCart(c); renderCartPage();
      });
    });
  }

  /* ---------- Order form (Netlify Forms) ---------- */
  function showOrderSuccess(ref, summary) {
    var refOut = document.getElementById("order-ref-out");
    if (refOut) refOut.textContent = ref;
    var sumOut = document.getElementById("order-summary-out");
    if (sumOut) sumOut.textContent = summary;
    saveCart([]);
    var box = document.getElementById("cart-items");
    if (box) box.innerHTML = "";
    document.getElementById("cart-empty").hidden = true;
    document.getElementById("cart-summary").hidden = true;
    var success = document.getElementById("order-success");
    success.hidden = false;
    success.setAttribute("tabindex", "-1");
    success.focus();
  }
  function wireOrderForm() {
    var form = document.getElementById("order-form");
    if (!form) return;
    var submitting = false;
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      if (submitting || !form.reportValidity()) return;
      var cart = loadCart();
      if (!cart.length) return;
      var lines = cart.map(function (i) {
        var p = byId[i.id];
        return i.qty + " x " + p.name + (i.variant === "Standard" ? "" : " (" + i.variant + ")") + " — " + money(p.price * i.qty);
      });
      var subtotal = cart.reduce(function (s, i) { return s + byId[i.id].price * i.qty; }, 0);
      lines.push("Subtotal: " + money(subtotal) + " (shipping confirmed before payment)");
      document.getElementById("order-lines").value = lines.join("\n");
      var fd = new FormData(form);
      var ref = "HB-" + new Date().toISOString().slice(0, 10).replace(/-/g, "") + "-" + Math.random().toString(36).slice(2, 6).toUpperCase();
      var payer = document.getElementById("payer-address");
      var summaryLines = [
        "HOODBTC SHOP — ORDER " + ref,
        "Date: " + new Date().toISOString(),
        "Items:"
      ].concat(lines.slice(0, -1)).concat([
        "Items subtotal (USD): " + money(subtotal),
        "Shipping: confirmed by email before payment",
        "Buyer: " + (fd.get("name") || ""),
        "Email: " + (fd.get("email") || ""),
        "Phone: " + (fd.get("phone") || "—"),
        "Ship to: " + [fd.get("address"), fd.get("city"), fd.get("region"), fd.get("postal"), fd.get("country")].filter(Boolean).join(", "),
        "Payment choice: " + (fd.get("payment") || ""),
        "Payer wallet: " + (payer && payer.value ? payer.value : "Not connected"),
        "Notes: " + (fd.get("notes") || "—")
      ]);
      var summary = summaryLines.join("\n");
      document.getElementById("order-ref").value = ref;
      document.getElementById("order-summary").value = summary;
      var message = document.getElementById("order-status");
      var button = form.querySelector('button[type="submit"]');
      var controls = document.querySelectorAll('#cart-items button');
      submitting = true;
      button.disabled = true;
      controls.forEach(function (el) { el.disabled = true; });
      message.textContent = "Sending your order…";
      try {
        var response = await fetch("/", {
          method: "POST",
          headers: {"Content-Type": "application/x-www-form-urlencoded"},
          body: new URLSearchParams(new FormData(form)).toString()
        });
        if (!response.ok) throw new Error("Order request rejected");
        // Never accept a URL flag or a marker set before the server responds.
        showOrderSuccess(ref, summary);
      } catch (error) {
        message.textContent = "We could not confirm your request. Your cart is saved. Please try again, or contact contact@hoodbtc.com before resubmitting if your connection was interrupted.";
      } finally {
        submitting = false;
        button.disabled = false;
        controls.forEach(function (el) { el.disabled = false; });
      }
    });
  }

  renderCartCount();
  renderMobileNav();
  renderGrid();
  renderProduct();
  renderCartPage();
  wireOrderForm();
})();
