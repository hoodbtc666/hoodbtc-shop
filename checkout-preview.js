/* Preview only: read public wallet address. No payment transaction, no order submission. */
(function () {
  "use strict";
  var button = document.getElementById("connect-wallet");
  var status = document.getElementById("wallet-status");
  var field = document.getElementById("payer-address");
  if (!button || !status || !field) return;
  button.addEventListener("click", async function () {
    if (!window.ethereum || typeof window.ethereum.request !== "function") {
      status.textContent = "No compatible browser wallet detected. Open in a wallet browser or install a supported wallet.";
      return;
    }
    button.disabled = true;
    try {
      var accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      if (!Array.isArray(accounts) || !accounts[0] || !/^0x[a-fA-F0-9]{40}$/.test(accounts[0])) throw new Error("No valid address returned");
      field.value = accounts[0];
      var chainId = await window.ethereum.request({ method: "eth_chainId" });
      status.textContent = chainId === "0x2105"
        ? "Connected on Base Mainnet. Payment remains disabled in preview."
        : "Wallet connected, but network is not Base Mainnet. Payment remains disabled.";
    } catch (e) {
      status.textContent = "Wallet connection was cancelled or failed.";
    } finally {
      button.disabled = false;
    }
  });
  var form = document.getElementById("preview-form");
  if (form) form.addEventListener("submit", function (event) { event.preventDefault(); });
})();
