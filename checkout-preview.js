/* Preview only: read public wallet address. No payment transaction, no order submission. */
(function () {
  "use strict";
  var button = document.getElementById("connect-wallet");
  var status = document.getElementById("wallet-status");
  var field = document.getElementById("payer-address");
  if (!button || !status || !field) return;
  var discovered = [];
  window.addEventListener("eip6963:announceProvider", function (event) {
    var d = event.detail;
    if (d && d.provider && d.info && !discovered.some(function (e) { return e.info.uuid === d.info.uuid; })) discovered.push(d);
  });
  window.dispatchEvent(new Event("eip6963:requestProvider"));
  function getProvider() { return (discovered[0] && discovered[0].provider) || window.ethereum; }
  button.addEventListener("click", async function () {
    var provider = getProvider();
    if (!provider || typeof provider.request !== "function") {
      status.textContent = "No compatible browser wallet detected. Open in a wallet browser or install a supported wallet.";
      return;
    }
    button.disabled = true;
    try {
      var accounts = await provider.request({ method: "eth_requestAccounts" });
      if (!Array.isArray(accounts) || !accounts[0] || !/^0x[a-fA-F0-9]{40}$/.test(accounts[0])) throw new Error("No valid address returned");
      field.value = accounts[0];
      var chainId = await provider.request({ method: "eth_chainId" });
      status.textContent = chainId === "0x2105"
        ? "Connected on Base Mainnet. Payment remains disabled in preview."
        : "Wallet connected, but network is not Base Mainnet. Payment remains disabled.";
    } catch (e) {
      status.textContent = "Wallet connection was cancelled or failed.";
    } finally {
      button.disabled = false;
    }
  });
  var cartItems = document.getElementById("cart-items");
  var cartActions = document.querySelector(".checkout-actions");
  var summary = document.getElementById("cart-summary");
  var delivery = document.getElementById("delivery-step");
  var wallet = document.getElementById("wallet-step");
  var complete = document.getElementById("demo-complete");
  var step = 1;
  function goTo(next) {
    step = next;
    if (cartItems) cartItems.hidden = next !== 1;
    if (cartActions) cartActions.hidden = next !== 1;
    var done = document.getElementById("demo-complete");
    if (done) done.hidden = true;
    if (summary) summary.hidden = next === 1 || next === 4;
    if (complete) complete.hidden = next !== 4;
    if (delivery) delivery.hidden = next !== 2;
    if (wallet) wallet.hidden = next !== 3;
    document.querySelectorAll("[data-step-label]").forEach(function (el) {
      el.classList.toggle("active", Number(el.getAttribute("data-step-label")) === next || (next === 4 && el.getAttribute("data-step-label") === "3"));
    });
    var head = document.querySelector(".page-head");
    if (head) head.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  var bind = function (id, callback) {
    var el = document.getElementById(id);
    if (el) el.addEventListener("click", callback);
  };
  bind("next-cart", function () {
    if (!cartItems || !cartItems.querySelector(".cart-item")) return;
    goTo(2);
  });
  bind("back-cart", function () { goTo(1); });
  bind("next-delivery", function () {
    var form = document.getElementById("preview-form");
    if (!form) return;
    var required = Array.from(delivery.querySelectorAll("[required]"));
    var invalid = required.find(function (field) { return !field.checkValidity(); });
    if (invalid) { invalid.reportValidity(); return; }
    goTo(3);
  });
  bind("back-delivery", function () { goTo(2); });
  bind("complete-demo", function () {
    var required = Array.from(delivery.querySelectorAll("[required]"));
    var invalid = required.find(function (input) { return !input.checkValidity(); });
    if (invalid) { goTo(2); invalid.reportValidity(); return; }
    var total = document.getElementById("sum-total");
    var output = document.getElementById("demo-items-summary");
    if (output) output.textContent = "Items subtotal: " + (total ? total.textContent : "not available") + " USD. Shipping and taxes not included.";
    goTo(4);
  });
  bind("restart-demo", function () { goTo(3); });
  function syncCartAvailability() {
    var hasItems = !!(cartItems && cartItems.querySelector(".cart-item"));
    if (cartActions) cartActions.hidden = !hasItems;
    var next = document.getElementById("next-cart");
    if (next) next.disabled = !hasItems;
    if (!hasItems && step !== 1) goTo(1);
  }
  goTo(1);
  syncCartAvailability();
  if (cartItems && window.MutationObserver) {
    new MutationObserver(syncCartAvailability).observe(cartItems, { childList: true, subtree: true });
  }
  var form = document.getElementById("preview-form");
  if (form) form.addEventListener("submit", function (event) { event.preventDefault(); });
})();
