# Product verification register — HOODBTC Shop

Status: **in progress**. This file records manufacturer-backed facts and outstanding checks. It does not certify inventory, seller authorization, authenticity, shipping, or product availability.

## Ledger Nano S Plus — `ledger-nano-s-plus`

Official product page: https://shop.ledger.com/products/ledger-nano-s-plus

Confirmed from manufacturer:
- USB-C connection for desktop computers and compatible Android phones.
- 128 × 64 monochrome OLED display.
- No Bluetooth connectivity.
- Uses a Secure Element and signs transactions on-device.

HOODBTC catalog description: broadly consistent with manufacturer connectivity and device purpose.

Still unverified: exact color/variant to be fulfilled, authorized supply chain, stock, delivery regions, final landed cost, warranty arrangements, image usage rights.

## Trezor Safe 3 — `trezor-safe-3`

Official product page: https://trezor.io/trezor-safe-3
Manufacturer security documentation: https://trezor.io/learn/security-privacy/how-trezor-keeps-you-safe/trezor-hardware-built-in-security

Confirmed from manufacturer:
- USB-C connectivity.
- 0.96-inch monochrome OLED screen (128 × 64).
- Two physical confirmation buttons.
- Secure Element, PIN and passphrase support.
- Trezor Suite compatibility.
- iOS does not support direct USB-C device management.

HOODBTC catalog description: broadly consistent with manufacturer information.

Still unverified: exact edition (Universal vs Bitcoin-only), color, authorized sourcing, stock, warranty, shipping, customs and image usage rights.

## Structured data rules

- Product and Offer fields derive from the same HOODBTC product catalog as the visible page.
- Do not fabricate `availability`, `aggregateRating`, `review`, shipping costs or return policy.
- JavaScript-generated JSON-LD still needs rendering/crawl tests; server-rendered product metadata remains a separate task.
- Prices are catalog asking prices, not independently verified manufacturer prices or final landed checkout totals.
- Before live checkout, verify supplier provenance, shipping/tax calculation and order fulfillment.
