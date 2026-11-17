/* HOODBTC Shop preview: Reown wallet connection ONLY. Never sends transactions. */
import { createAppKit } from "https://esm.sh/@reown/appkit?bundle";
import { EthersAdapter } from "https://esm.sh/@reown/appkit-adapter-ethers?bundle";
import { base } from "https://esm.sh/@reown/appkit/networks?bundle";

try {
  const modal = createAppKit({
    adapters: [new EthersAdapter()],
    networks: [base],
    defaultNetwork: base,
    projectId: "726d351a73f97041b5428f7e8f6a7920",
    metadata: {
      name: "HOODBTC Shop",
      description: "HOODBTC Shop wallet connection preview",
      url: window.location.origin,
      icons: [window.location.origin + "/assets/hoodbtc-h.webp"]
    },
    features: { analytics: false, email: false, socials: [], swaps: false, onramp: false }
  });
  modal.subscribeAccount((account) => {
    window.dispatchEvent(new CustomEvent("hoodbtc:reown-account", {
      detail: { address: account.address || "", chainId: Number(account.chainId || 0) }
    }));
  });
  window.addEventListener("hoodbtc:reown-open", () => {
    modal.open({ view: "Connect" });
  });
  window.dispatchEvent(new Event("hoodbtc:reown-ready"));
} catch (error) {
  console.error("Reown wallet preview initialization failed", error);
  window.dispatchEvent(new Event("hoodbtc:reown-error"));
}
