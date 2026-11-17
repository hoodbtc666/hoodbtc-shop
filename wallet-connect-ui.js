/* Read-only wallet connection on the HOODBTC Shop cart. No transfers or signatures. */
(function(){
 const button=document.getElementById("connect-wallet");
 const status=document.getElementById("wallet-status");
 const field=document.getElementById("payer-address");
 if(!button||!status||!field)return;
 window.addEventListener("hoodbtc:reown-ready",()=>{button.disabled=false;button.textContent="Connect wallet";status.textContent="Choose your wallet. No payment or signature required."});
 window.addEventListener("hoodbtc:reown-error",()=>{button.disabled=true;button.textContent="Wallet unavailable";status.textContent="Unable to load wallet connection. Please refresh."});
 window.addEventListener("hoodbtc:reown-account",event=>{
  const account=event.detail||{};
  field.value=/^0x[a-fA-F0-9]{40}$/.test(account.address||"")?account.address:"";
  button.textContent=field.value?"Manage wallet":"Connect wallet";
  status.textContent=field.value?"Wallet connected — no payment requested.":"Not connected.";
 });
 button.addEventListener("click",()=>window.dispatchEvent(new Event("hoodbtc:reown-open")));
})();
