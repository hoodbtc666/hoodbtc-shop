/* HOODBTC Shop: read-only Reown connection, no signatures or payments. */
(function(){
 "use strict";
 const button=document.getElementById("connect-wallet");
 const status=document.getElementById("wallet-status");
 const field=document.getElementById("payer-address");
 if(!button||!status||!field)return;
 let ready=false,connected=false;
 const label=button.querySelector(".wallet-pill-label")||button;
 function setLabel(value){label.textContent=value}
 function setReady(){ready=true;button.disabled=false;setLabel(connected?"Manage Wallet":"Connect Wallet");if(!connected)status.textContent="Choose a wallet to connect. No payment requested."}
 window.addEventListener("hoodbtc:reown-ready",setReady);
 window.addEventListener("hoodbtc:reown-loading",()=>{ready=false;button.disabled=true;setLabel("Loading Wallet");status.textContent="Opening wallet connection…"});
 window.addEventListener("hoodbtc:reown-error",()=>{ready=true;button.disabled=false;setLabel("Retry Wallet");status.textContent="Wallet service unavailable. Try again, or continue with your order request without a wallet."});
 window.addEventListener("hoodbtc:reown-account",event=>{
  const account=event.detail||{};
  const address=/^0x[a-fA-F0-9]{40}$/.test(account.address||"")?account.address:"";
  field.value=address;connected=!!address;
  button.classList.toggle("is-connected",connected);
  button.setAttribute("aria-label",connected?"Manage connected wallet":"Connect crypto wallet");
  setLabel(connected?address.slice(0,6)+"…"+address.slice(-4):"Connect Wallet");
  status.textContent=connected?"Wallet connected · no payment requested":"Wallet disconnected · connect to continue";
  if(ready)button.disabled=false;
 });
 button.addEventListener("click",()=>{if(!ready)return;window.dispatchEvent(new Event("hoodbtc:reown-open"))});
})();
