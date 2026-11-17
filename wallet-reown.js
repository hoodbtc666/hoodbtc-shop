/* HOODBTC Shop — wallet connection only. No signatures, transfers or payments. */
const projectId = "726d351a73f97041b5428f7e8f6a7920";
const emit = (name, detail) => window.dispatchEvent(detail === undefined
  ? new Event("hoodbtc:reown-" + name)
  : new CustomEvent("hoodbtc:reown-" + name, { detail }));
let modal = null;
let connected = false;
let loading = false;
const imports = [
  ["https://cdn.jsdelivr.net/npm/@reown/appkit@1.8.24/+esm", "https://cdn.jsdelivr.net/npm/@reown/appkit-adapter-ethers@1.8.24/+esm", "https://cdn.jsdelivr.net/npm/@reown/appkit@1.8.24/networks/+esm"],
  ["https://esm.sh/@reown/appkit@1.8.24?bundle", "https://esm.sh/@reown/appkit-adapter-ethers@1.8.24?bundle", "https://esm.sh/@reown/appkit@1.8.24/networks?bundle"]
];
function withTimeout(promise, ms) {
  let timer;
  return Promise.race([promise, new Promise((_, reject) => { timer = setTimeout(() => reject(new Error("Wallet module timeout")), ms); })]).finally(() => clearTimeout(timer));
}
async function init() {
  if (loading || modal) return;
  loading = true;
  for (const urls of imports) {
    try {
      const [appkit, adapter, networks] = await withTimeout(Promise.all(urls.map(url => import(/* @vite-ignore */ url))), 11000);
      if (!appkit.createAppKit || !adapter.EthersAdapter || !networks.base) throw new Error("Incomplete wallet modules");
      modal = appkit.createAppKit({
        adapters: [new adapter.EthersAdapter()],
        networks: [networks.base],
        defaultNetwork: networks.base,
        projectId,
        metadata: {
          name: "HOODBTC Shop",
          description: "Connect your wallet to HOODBTC Shop",
          url: window.location.origin,
          icons: [window.location.origin + "/assets/hoodbtc-h.webp"]
        },
        features: { analytics: false, email: false, socials: [], swaps: false, onramp: false }
      });
      modal.subscribeAccount(account => {
        connected = !!account.address;
        emit("account", { address: account.address || "", chainId: Number(account.chainId || 0) });
      });
      emit("ready");
      loading = false;
      return;
    } catch (error) {
      console.warn("HOODBTC wallet provider failed, trying alternate source:", error);
    }
  }
  loading = false;
  emit("error");
}
window.addEventListener("hoodbtc:reown-open", async () => {
  if (loading) return;
  emit("loading");
  if (!modal) {
    await init();
    if (!modal) return;
  }
  try { await modal.open({ view: connected ? "Account" : "Connect" }); emit("ready"); }
  catch (error) { console.error("Unable to open wallet selector", error); emit("error"); }
});
// No wallet provider requests during ordinary catalog browsing.
emit("ready");
