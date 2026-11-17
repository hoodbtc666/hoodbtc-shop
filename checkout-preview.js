/* Preview only: read public wallet address. No payment transaction, no order submission. */
(function () {
  "use strict";
  var button = document.getElementById("connect-wallet");
  var status = document.getElementById("wallet-status");
  var field = document.getElementById("payer-address");
  if (!button || !status || !field) return;
  // EIP-6963 wallet discovery: let customers choose instead of silently selecting the first wallet.
  var discovered = [];
  var activeProvider = null;
  var picker = document.createElement("div");
  picker.id = "wallet-picker";
  picker.className = "wallet-picker";
  picker.hidden = true;
  picker.innerHTML = '<div class="wallet-picker-panel" role="dialog" aria-modal="true" aria-labelledby="wallet-picker-title"><div class="wallet-picker-heading"><h3 id="wallet-picker-title">Choose your wallet</h3><button type="button" class="checkout-secondary" id="close-wallet-picker" aria-label="Close wallet selector">✕</button></div><p class="sum-note">Connect only. No payment or signature will be requested.</p><div id="wallet-options" class="wallet-options"></div></div>';
  document.body.appendChild(picker);
  var options = picker.querySelector("#wallet-options");
  var closePicker = picker.querySelector("#close-wallet-picker");
  function hidePicker() { picker.hidden = true; button.focus(); }
  closePicker.addEventListener("click", hidePicker);
  picker.addEventListener("click", function (e) { if (e.target === picker) hidePicker(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !picker.hidden) hidePicker(); });
  function addProvider(detail) {
    if (!detail || !detail.provider || typeof detail.provider.request !== "function" || !detail.info) return;
    if (!discovered.some(function (entry) { return entry.info.uuid === detail.info.uuid; })) discovered.push(detail);
  }
  window.addEventListener("eip6963:announceProvider", function (event) { addProvider(event.detail); });
  window.dispatchEvent(new Event("eip6963:requestProvider"));
  function updateStatus() {
    if (!activeProvider) return;
    Promise.all([
      activeProvider.request({ method: "eth_accounts" }),
      activeProvider.request({ method: "eth_chainId" })
    ]).then(function (values) {
      var address = values[0] && values[0][0];
      field.value = address && /^0x[a-fA-F0-9]{40}$/.test(address) ? address : "";
      if (!field.value) {
        status.textContent = "Wallet disconnected.";
        button.textContent = "Connect wallet";
      } else {
        status.textContent = values[1] === "0x2105"
          ? "Connected on Base Mainnet — preview only, payments disabled."
          : "Connected on another network — preview only, payments disabled.";
        button.textContent = "Change wallet";
      }
    }).catch(function () { status.textContent = "Could not read wallet status."; });
  }
  async function connect(provider) {
    hidePicker();
    button.disabled = true;
    status.textContent = "Waiting for wallet approval…";
    try {
      var accounts = await provider.request({ method: "eth_requestAccounts" });
      if (!Array.isArray(accounts) || !accounts[0] || !/^0x[a-fA-F0-9]{40}$/.test(accounts[0])) throw new Error("No valid wallet account");
      if (activeProvider && activeProvider !== provider && typeof activeProvider.removeListener === "function") {
        activeProvider.removeListener("accountsChanged", updateStatus);
        activeProvider.removeListener("chainChanged", updateStatus);
      }
      activeProvider = provider;
      if (typeof provider.on === "function") {
        provider.on("accountsChanged", updateStatus);
        provider.on("chainChanged", updateStatus);
      }
      updateStatus();
    } catch (error) {
      status.textContent = "Connection cancelled or failed. You can try again.";
    } finally {
      button.disabled = false;
    }
  }
  function showPicker() {
    options.replaceChildren();
    window.dispatchEvent(new Event("eip6963:requestProvider"));
    var wallets = discovered.slice();
    if (!wallets.length && window.ethereum && typeof window.ethereum.request === "function") {
      wallets.push({ info: { name: "Browser wallet", uuid: "legacy" }, provider: window.ethereum });
    }
    if (!wallets.length) {
      var notice = document.createElement("p");
      notice.className = "sum-note";
      notice.textContent = "No browser wallet found. On mobile, open this checkout preview in your wallet app browser. WalletConnect QR support is not enabled yet.";
      options.appendChild(notice);
    }
    wallets.forEach(function (wallet) {
      var choice = document.createElement("button");
      choice.type = "button";
      choice.className = "wallet-choice";
      var name = document.createElement("span");
      name.textContent = wallet.info.name || "Wallet";
      choice.appendChild(name);
      if (wallet.info.icon && /^data:image\/(png|svg\+xml|jpeg|webp);base64,/i.test(wallet.info.icon)) {
        var img = document.createElement("img");
        img.src = wallet.info.icon;
        img.alt = "";
        choice.prepend(img);
      }
      choice.addEventListener("click", function () { connect(wallet.provider); });
      options.appendChild(choice);
    });
    picker.hidden = false;
    closePicker.focus();
  }
  button.addEventListener("click", showPicker);
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
