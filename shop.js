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
  var byId = {};
  products.forEach(function (p) { byId[p.id] = p; });

  /* ---------- Cart state ---------- */
  function loadCart() {
    try {
      var raw = JSON.parse(localStorage.getItem(CART_KEY));
      if (!Array.isArray(raw)) return [];
      return raw.filter(function (i) {
        return i && typeof i.id === "string" && byId[i.id] &&
          typeof i.variant === "string" && Number.isInteger(i.qty) &&
          i.qty >= 1 && i.qty <= 99;
      });
    } catch (e) { return []; }
  }
  function saveCart(cart) {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
    renderCartCount(cart);
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
    var cart = loadCart();
    var line = cart.find(function (i) { return i.id === id && i.variant === variant; });
    if (line) { line.qty = Math.min(99, line.qty + qty); } else { cart.push({ id: id, variant: variant, qty: qty }); }
    saveCart(cart);
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
      return '<a href="' + l[0] + '">' + l[1] + "</a>";
    }).join("");
    header.insertAdjacentElement("afterend", nav);
  }

  /* ---------- Collection grids ---------- */
  function productsFor(slug) {
    if (slug === "latest-devices") return products.filter(function (p) { return p.drop; });
    return products.filter(function (p) { return p.collection === slug; });
  }
  function renderGrid() {
    var grid = document.getElementById("product-grid");
    if (!grid) return;
    var list = productsFor(grid.getAttribute("data-collection"));
    var empty = document.getElementById("empty-state");
    if (!list.length) { if (empty) empty.hidden = false; return; }
    grid.innerHTML = list.map(function (p) {
      return '<a class="product-card glass" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
        '<span class="pc-media"><img src="' + p.image + '" alt="' + p.name + '" loading="lazy"></span>' +
        '<span class="pc-body"><span class="pc-name">' + p.name + '</span>' +
        '<span class="pc-price">' + money(p.price) + '</span></span></a>';
    }).join("");
  }

  /* ---------- Product detail (?id=) ---------- */
  function renderProduct() {
    var wrap = document.getElementById("product-detail");
    if (!wrap) return;
    var id = new URLSearchParams(location.search).get("id");
    var p = id && byId[id];
    if (!p) {
      wrap.hidden = true;
      document.getElementById("product-missing").hidden = false;
      return;
    }
    document.title = p.name + " — HOODBTC Shop";
    var desc = p.description || "";
    var pageUrl = "https://shop-hoodbtc.netlify.app/product.html?id=" + encodeURIComponent(p.id);
    var setMeta = function (selector, value) {
      var el = document.querySelector(selector);
      if (el) el.setAttribute("content", value);
    };
    setMeta('meta[name="description"]', desc);
    setMeta('meta[property="og:title"]', p.name + " — HOODBTC Shop");
    setMeta('meta[property="og:description"]', desc);
    setMeta('meta[name="twitter:title"]', p.name + " — HOODBTC Shop");
    setMeta('meta[name="twitter:description"]', desc);
    setMeta('meta[property="og:url"]', pageUrl);
    var canon = document.querySelector('link[rel="canonical"]');
    if (canon) canon.setAttribute("href", pageUrl);
    document.getElementById("p-image").src = p.image;
    document.getElementById("p-image").alt = p.name;
    var col = (typeof HOODBTC_COLLECTIONS !== "undefined")
      ? HOODBTC_COLLECTIONS.find(function (c) { return c.slug === p.collection; }) : null;
    document.getElementById("p-collection").textContent = col ? col.name : "";
    document.getElementById("p-name").textContent = p.name;
    document.getElementById("p-price").textContent = money(p.price);
    document.getElementById("p-desc").textContent = p.description || "";
    var sel = document.getElementById("p-variant");
    var variants = (p.variants && p.variants.length ? p.variants : ["Standard"]);
    sel.innerHTML = variants.map(function (v) { return "<option>" + v + "</option>"; }).join("");
    if (variants.length === 1 && variants[0] === "Standard") {
      sel.closest("label").hidden = true;
    }
    document.getElementById("p-add").addEventListener("click", function () {
      var qty = Math.max(1, Math.min(99, parseInt(document.getElementById("p-qty").value, 10) || 1));
      addToCart(p.id, sel.value, qty);
      document.getElementById("p-added").hidden = false;
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
        if (act === "inc") c[idx].qty = Math.min(99, c[idx].qty + 1);
        if (act === "dec") c[idx].qty = Math.max(1, c[idx].qty - 1);
        if (act === "rm") c.splice(idx, 1);
        saveCart(c); renderCartPage();
      });
    });
  }

  /* ---------- Order form (Netlify Forms) ---------- */
  function handleOrderSuccess() {
    var params = new URLSearchParams(location.search);
    if (params.get("ordered") !== "1") return;
    try {
      if (sessionStorage.getItem("hoodbtc-order-submitted") !== "1") return;
      sessionStorage.removeItem("hoodbtc-order-submitted");
    } catch (e) { return; }
    try { localStorage.removeItem(CART_KEY); } catch (e) {}
    var box = document.getElementById("cart-items");
    if (box) box.innerHTML = "";
    var empty = document.getElementById("cart-empty");
    if (empty) empty.hidden = true;
    var summary = document.getElementById("cart-summary");
    if (summary) summary.hidden = true;
    var ok = document.getElementById("order-success");
    if (ok) ok.hidden = false;
    renderCartCount([]);
  }
  function wireOrderForm() {
    var form = document.getElementById("order-form");
    if (!form) return;
    form.addEventListener("submit", function (event) {
      if (!loadCart().length) { event.preventDefault(); return; }
      try { sessionStorage.setItem("hoodbtc-order-submitted", "1"); } catch (e) {}
      var cart = loadCart().filter(function (i) { return byId[i.id]; });
      var lines = cart.map(function (i) {
        var p = byId[i.id];
        return i.qty + " x " + p.name + (i.variant === "Standard" ? "" : " (" + i.variant + ")") + " — " + money(p.price * i.qty);
      });
      var subtotal = cart.reduce(function (s, i) { return s + byId[i.id].price * i.qty; }, 0);
      lines.push("Subtotal: " + money(subtotal) + " (shipping confirmed before payment)");
      var field = document.getElementById("order-lines");
      if (field) field.value = lines.join("\n");
    });
  }

  renderCartCount();
  renderMobileNav();
  renderGrid();
  renderProduct();
  renderCartPage();
  wireOrderForm();
  handleOrderSuccess();
})();
