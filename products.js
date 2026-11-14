/* ============================================================
   HOODBTC Shop — product data (single source of truth)
   ------------------------------------------------------------
   The HOODBTC Shop is a DePIN hardware store: devices that
   power decentralized networks, plus the hardware wallets and
   backups that keep the keys to those networks offline.

   Catalog: the Top-10 starter shortlist (DEPIN-50 research,
   2026-11-09), one entry per purchasable SKU — same device,
   different model/price = separate entry. All photos are real
   official or authorized-distributor product photos; no
   generated images, no placeholders. No earnings or rewards
   promises anywhere in copy: the shop sells hardware.

   Prices are HOODBTC selling prices: the official list price
   plus 20% (Peter's margin, set 2026-11-14). Peter sources
   each item from the official store after the order and ships it.

   Product shape:
   {
     id: "dimo-macaron",               // unique, used in ?id=
     name: "DIMO Macaron",
     collection: "vehicle-auto",       // one of COLLECTIONS slugs
     price: 99.00,                     // USD
     image: "assets/products/dimo-macaron.webp",
     description: "Short honest description of what the device does. No hype.",
     variants: ["Standard"]            // optional; defaults to ["Standard"]
   }
   Latest Devices is automatic: just add  drop: true  to any
   product to also surface it on the Latest Devices page
   (drop = a latest device drop).
   ============================================================ */

const HOODBTC_COLLECTIONS = [
  { slug: "vehicle-auto",    name: "Vehicle & Auto" },
  { slug: "connectivity",    name: "Connectivity & eSIM" },
  { slug: "mapping-cameras", name: "Mapping & Cameras" },
  { slug: "hotspots",        name: "Hotspots & Networking" },
  { slug: "weather",         name: "Weather & Environment" },
  { slug: "location",        name: "Location & Positioning" },
  { slug: "wallets-security", name: "Wallets & Security" },
  { slug: "latest-devices",  name: "Latest Devices" }
];

const HOODBTC_PRODUCTS = [
  { id: "weatherxm-d1-network", name: "WeatherXM D1 — Network Edition", collection: "weather", price: 238.8, image: "assets/products/weatherxm-d1.webp", description: "WeatherXM D1 weather station, Network edition, for the WeatherXM network.", drop: true },
  { id: "weatherxm-d1-open", name: "WeatherXM D1 — Open Edition", collection: "weather", price: 358.8, image: "assets/products/weatherxm-d1-open.webp", description: "WeatherXM D1 weather station, Open edition." },
  { id: "geodnet-mobilecm", name: "GEODNET MobileCM", collection: "location", price: 834, image: "assets/products/geodnet-mobilecm.webp", description: "Triple-band GNSS base station (RTK reference station) for the GEODNET network." },
  { id: "dimo-macaron", name: "DIMO Macaron", collection: "vehicle-auto", price: 118.8, image: "assets/products/dimo-macaron.webp", description: "Plug-in OBD device that connects your car to the DIMO vehicle network.", drop: true },
  { id: "natix-vx360", name: "NATIX VX360", collection: "vehicle-auto", price: 454.8, image: "assets/products/natix-vx360.webp", description: "Dashcam device for the NATIX mapping network, in the Ultimate Bundle." },
  { id: "sensecap-m1", name: "SenseCAP M1", collection: "hotspots", price: 598.8, image: "assets/products/sensecap-m1.webp", description: "Ready-to-use LoRaWAN indoor gateway compatible with the Helium network." },
  { id: "helium-hotspot-indoor", name: "Helium Mobile Hotspot — Indoor", collection: "hotspots", price: 298.8, image: "assets/products/helium-hotspot-indoor.webp", description: "Indoor 5G and Wi-Fi offload hotspot for the Helium Mobile network." },
  { id: "helium-hotspot-outdoor", name: "Helium Mobile Hotspot — Outdoor", collection: "hotspots", price: 598.8, image: "assets/products/helium-hotspot-outdoor.webp", description: "Weather-resistant outdoor 5G and Wi-Fi offload hotspot for the Helium Mobile network.", drop: true },
  { id: "ledger-nano-s-plus", name: "Ledger Nano S Plus", collection: "wallets-security", price: 82.8, image: "assets/products/ledger-nano-s-plus.webp", description: "Hardware wallet that keeps your crypto keys offline." },
  { id: "ledger-nano-x", name: "Ledger Nano X", collection: "wallets-security", price: 118.8, image: "assets/products/ledger-nano-x.webp", description: "Bluetooth hardware wallet that keeps your crypto keys offline." },
  { id: "ledger-nano-gen5", name: "Ledger Nano Gen5", collection: "wallets-security", price: 214.8, image: "assets/products/ledger-nano-gen5.webp", description: "Hardware wallet with a touchscreen that keeps your crypto keys offline.", drop: true },
  { id: "tangem-2-card", name: "Tangem Wallet — 2-Card Set", collection: "wallets-security", price: 65.88, image: "assets/products/tangem-2-card.webp", description: "Card-form hardware wallet, set of two cards, with keys stored in the chip." },
  { id: "tangem-3-card", name: "Tangem Wallet — 3-Card Set", collection: "wallets-security", price: 83.88, image: "assets/products/tangem-3-card.webp", description: "Card-form hardware wallet, set of three cards, with keys stored in the chip." },
  { id: "safepal-s1", name: "SafePal S1", collection: "wallets-security", price: 59.99, image: "assets/products/safepal-s1.webp", description: "Air-gapped hardware wallet that signs transactions by QR code only." },
  { id: "safepal-s1-pro", name: "SafePal S1 Pro", collection: "wallets-security", price: 107.99, image: "assets/products/safepal-s1-pro.webp", description: "Air-gapped hardware wallet in an aluminum alloy body that signs transactions by QR code only." },
  { id: "cryptosteel-capsule", name: "Cryptosteel Capsule", collection: "wallets-security", price: 118.8, image: "assets/products/cryptosteel-capsule.webp", description: "Stainless-steel capsule for backing up a seed phrase offline, fireproof and waterproof." }
];
