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

   Descriptions (rewritten 2026-11-14, Peter's order): each one
   explains exactly what the device is and what it does, in the
   maker's own words, retold in HOODBTC's voice — clean, direct,
   no hype. Sourced from each maker's official product page.

   Product shape:
   {
     id: "dimo-macaron",               // unique, used in ?id=
     name: "DIMO Macaron",
     collection: "vehicle-auto",       // one of COLLECTIONS slugs
     price: 99.00,                     // USD
     image: "assets/products/dimo-macaron.webp",
     description: "Short honest description of what the device does. No hype.",
     variants: ["Standard"]            // optional; defaults to ["Standard"]
     returnsNote: "Non-returnable — …" // optional; shown on the product page
                                       // when the maker restricts returns
   }
   Latest Devices is automatic: just add  drop: true  to any
   product to also surface it on the Latest Devices page
   (drop = a latest device drop).
   A product can also be listed in one extra collection: add
   alsoIn: ["<collection-slug>"]  and it appears there too.
   collection stays the product's home collection — it names
   the product page's collection label and breadcrumb.
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
  { id: "weatherxm-d1-network", name: "WeatherXM D1 — Network Edition", collection: "weather", price: 238.8, image: "assets/products/weatherxm-d1.webp", description: "A solar-powered outdoor weather station that measures temperature, humidity, pressure, wind, rain, and light at your home or site. Its readings travel by LoRa to an indoor touchscreen gateway, which connects over Wi-Fi. The Network Edition joins the WeatherXM network and shares its observations there.", drop: true },
  { id: "weatherxm-d1-open", name: "WeatherXM D1 — Open Edition", collection: "weather", price: 358.8, image: "assets/products/weatherxm-d1-open.webp", description: "A solar-powered outdoor weather station that measures temperature, humidity, pressure, wind, rain, and light at your home or site. Its readings travel by LoRa to a touchscreen gateway, which connects over Wi-Fi. The Open Edition runs independently on your own network, not the WeatherXM network." },
  { id: "geodnet-mobilecm", name: "GEODNET MobileCM", collection: "location", price: 834, image: "assets/products/geodnet-mobilecm.webp", description: "The GEODNET MobileCM is a ready-to-use, geodetic-grade GNSS base station. It receives triple-band signals (L1, L2, L5) from all major satellite constellations to provide high-accuracy positioning and RTK correction data. It is made for surveying, mapping, robotics, precision agriculture, and drone work." },
  { id: "dimo-macaron", name: "DIMO Macaron", collection: "vehicle-auto", price: 118.8, image: "assets/products/dimo-macaron.webp", description: "The DIMO Macaron plugs into your car's OBD port. It connects cars from 2008 and newer, except Tesla, to the DIMO app over Bluetooth and the Helium IoT network. It gives basic access to vehicle analytics, with 3 years of connectivity included.", drop: true },
  { id: "natix-vx360", name: "NATIX VX360", collection: "vehicle-auto", alsoIn: ["mapping-cameras"], price: 454.8, image: "assets/products/natix-vx360.webp", description: "The NATIX VX360 is a 256 GB device that plugs into your Tesla's glovebox USB port. It stores Dashcam and Sentry footage and backs it up to your personal cloud, viewed in the companion app. It works with Teslas built in 2021 and newer." },
  { id: "sensecap-m1", name: "SenseCAP M1", collection: "hotspots", price: 622.8, image: "assets/products/sensecap-m1.webp", description: "The SenseCAP M1 is a ready-to-use indoor LoRaWAN gateway, compatible with the Helium network. It connects nearby LoRa sensors and devices over long range, so you can build low-cost wireless applications. Setup takes a few simple steps and only a few minutes. US915 version — for North America.", variants: ["US915"], returnsNote: "Non-returnable — manufacturer policy: Seeed sells the SenseCAP M1 as non-returnable. If it arrives faulty or damaged, we will arrange a repair or a replacement where the maker allows it." },
  { id: "helium-hotspot-indoor", name: "Helium Mobile Hotspot — Indoor", collection: "hotspots", price: 298.8, image: "assets/products/helium-hotspot-indoor.webp", description: "An indoor hotspot that gives Helium Mobile subscribers local Wi-Fi connectivity where they gather, such as cafes, shops, and gyms. It mounts on a wall or ceiling, runs on Power over Ethernet, and needs an existing internet connection to work. Made for commercial venues, not homes; US only.", returnsNote: "Non-returnable — manufacturer policy: Helium Mobile Hotspots are not eligible for returns or refunds from their maker. If it arrives faulty or damaged, we will arrange a repair or a replacement where the maker allows it." },
  { id: "helium-hotspot-outdoor", name: "Helium Mobile Hotspot — Outdoor", collection: "hotspots", price: 599.99, image: "assets/products/helium-hotspot-outdoor.webp", description: "A weather-resistant outdoor hotspot that gives Helium Mobile subscribers local connectivity in parks, venues, and cafes. It mounts outside on a pole, runs on Power over Ethernet, and needs an existing internet connection to work. Made for commercial venues, not homes; US only.", drop: true },
  { id: "ledger-nano-s-plus", name: "Ledger Nano S Plus", collection: "wallets-security", price: 82.8, image: "assets/products/ledger-nano-s-plus.webp", description: "A small hardware wallet that keeps your private keys offline and signs transactions on the device. It plugs into a computer or Android phone with USB-C and works with the Ledger Live app. The simple, stay-at-home choice — no Bluetooth, just a wired connection." },
  { id: "ledger-nano-x", name: "Ledger Nano X", collection: "wallets-security", price: 118.8, image: "assets/products/ledger-nano-x.webp", description: "A pocket-size hardware wallet that keeps your private keys offline and signs transactions on the device. It connects by USB-C or Bluetooth, so it works with your phone as well as a computer. Same small screen as the S Plus, with wireless use added." },
  { id: "ledger-nano-gen5", name: "Ledger Nano Gen5", collection: "wallets-security", price: 214.8, image: "assets/products/ledger-nano-gen5.webp", description: "Ledger's touchscreen hardware wallet: a larger E Ink screen you tap to check each transaction before you sign it. It keeps your private keys offline, connects by USB-C, Bluetooth or NFC, and includes a Ledger Recovery Key. The clearest, easiest Ledger for daily use.", drop: true },
  { id: "tangem-2-card", name: "Tangem Wallet — 2-Card Set", collection: "wallets-security", price: 65.88, image: "assets/products/tangem-2-card.webp", description: "Two cards that hold the same key: one to use, one as backup. Tap a card to your phone to sign transactions — no cable, no battery, no seed phrase to write down. If one card is lost, the other still opens your wallet." },
  { id: "tangem-3-card", name: "Tangem Wallet — 3-Card Set", collection: "wallets-security", price: 83.88, image: "assets/products/tangem-3-card.webp", description: "Three cards that all hold the same key: one to use, two as backups. Tap a card to your phone to sign transactions — no cable, no battery, no seed phrase to write down. The third card resets your access code if you forget it." },
  { id: "safepal-s1", name: "SafePal S1", collection: "wallets-security", price: 59.99, image: "assets/products/safepal-s1.webp", description: "The SafePal S1 is a hardware wallet that keeps your keys offline and signs transactions only by scanning QR codes. It has no Bluetooth, Wi-Fi, NFC, or USB data connection, and works with the SafePal App. Its 1.3-inch screen and camera handle the QR-code step." },
  { id: "safepal-s1-pro", name: "SafePal S1 Pro", collection: "wallets-security", price: 107.99, image: "assets/products/safepal-s1-pro.webp", description: "The SafePal S1 Pro is a hardware wallet that keeps your keys offline and signs transactions only by scanning QR codes. It keeps the S1's QR-only design in an aluminum alloy body with tempered glass and a 500mAh battery. It works with the SafePal App." },
  { id: "cryptosteel-seed24", name: "Cryptosteel Seed24 Solo", collection: "wallets-security", price: 96, image: "assets/products/cryptosteel-seed24.webp", description: "A stainless-steel capsule that stores a 24-word seed phrase on letter tiles instead of paper. Slide the tiles onto the core to spell out your words, then seal the capsule shut with a tamper-evident seal. Fire, water and corrosion resistant — tougher than paper." },
  { id: "trezor-safe-3", name: "Trezor Safe 3", collection: "wallets-security", price: 70.8, image: "assets/products/trezor-safe-3.webp", description: "The Trezor Safe 3 is a small hardware wallet that keeps your crypto keys offline and asks you to confirm each transaction. It has a black-and-white screen and two buttons, and works with the Trezor Suite app. The price excludes tax and customs." },
  { id: "trezor-safe-5", name: "Trezor Safe 5", collection: "wallets-security", price: 154.8, image: "assets/products/trezor-safe-5.webp", description: "The Trezor Safe 5 is a hardware wallet that keeps your crypto keys offline and confirms each transaction on its touchscreen. It has a 1.54-inch colour screen with haptics and Gorilla Glass, and works with the Trezor Suite app. The price excludes tax and customs." },
  { id: "trezor-safe-7", name: "Trezor Safe 7", collection: "wallets-security", price: 298.8, image: "assets/products/trezor-safe-7.webp", description: "The Trezor Safe 7 is a hardware wallet with a large 2.5-inch colour touchscreen and three security chips protecting your keys. It connects by encrypted Bluetooth or USB-C, has a built-in battery, and works with the Trezor Suite app. The price excludes tax and customs." },
  { id: "deeper-connect-air", name: "Deeper Connect Air", collection: "connectivity", price: 448.8, image: "assets/products/deeper-connect-air.webp", description: "The Deeper Connect Air is a travel router that gives your devices a private, encrypted connection on public Wi-Fi. It runs on USB-C power, weighs 26 grams, and routes traffic through Deeper's decentralized network with no monthly subscription. It needs an internet connection to work." },
  { id: "mntd-fi-pro", name: "MNTD. Fi Pro", collection: "hotspots", price: 682.8, image: "assets/products/mntd-fi-pro.webp", description: "The MNTD. Fi Pro is a weather-resistant outdoor Wi-Fi hotspot for the Helium Mobile network in the US. Install it outside, on a roof or near a window, to extend mobile coverage for nearby phones. You manage it in the Helium Mobile Builder app.", returnsNote: "Non-returnable — manufacturer policy: the MNTD. Fi Pro is not eligible for returns or refunds from its maker. If it arrives faulty or damaged, we will arrange a repair or a replacement where the maker allows it." },
  { id: "weatherxm-h2-network", name: "WeatherXM H2 — Network Edition", collection: "weather", price: 226.8, image: "assets/products/weatherxm-h2-network.webp", description: "A solar-powered, 8-in-1 outdoor weather station that measures temperature, humidity, pressure, wind, rain, light, and UV, and sends readings over LoRaWAN to a gateway up to kilometres away. The Network Edition joins the WeatherXM network via Helium. Batteries and a mounting pole are not included." },
  { id: "weatherxm-h2-open", name: "WeatherXM H2 — Open Edition", collection: "weather", price: 286.8, image: "assets/products/weatherxm-h2-open.webp", description: "A solar-powered, 8-in-1 outdoor weather station that measures temperature, humidity, pressure, wind, rain, light, and UV, and sends readings over LoRaWAN to a nearby gateway. The Open Edition runs independently on your own LoRaWAN connection, such as TTN or ChirpStack, and receives no WeatherXM rewards." },
  { id: "dimo-lte-r1", name: "DIMO LTE R1", collection: "vehicle-auto", price: 119.99, image: "assets/products/dimo-lte-r1.webp", description: "The DIMO LTE R1 plugs into the port under your steering wheel, with built-in LTE for cars from 2008 and newer. It gives AI-powered diagnostics and smart alerts in plain English. Includes a free one-month subscription to DIMO Pro, then renewal is $8.99/mo. Compatibility varies by make — for example, Chevrolet 2014 and newer, GMC 2015 and newer, Honda 2014 and newer, Toyota and Lexus 2017 and newer, Hyundai and Kia 2019 and newer, Subaru 2020 and newer. Not for electric BMWs or Fords." }
];
