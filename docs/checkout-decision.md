# Checkout decision — awaiting Peter

Recommendation: Option A, manual orders only. It matches the settled selling model and removes the payment preview and wallet prompts from the customer journey. No payment is requested until availability, shipping and taxes are confirmed by Peter. Prices remain unchanged.

Neither patch is applied by this PR. Apply exactly one after reviewing it; run the build and checks afterward.

- `checkout-options/01-manual-only.patch`: product button becomes Request this item; routes to the manual order form; removes public wallet prompts and preview link; redirects old checkout-preview URLs to cart.
- `checkout-options/02-usdc-development-gate.patch`: same clean customer journey, but preserves a direct checkout-preview route on Netlify deploy-preview builds for continued USDC work. Production and other contexts redirect it to cart. Payments remain disabled in every context.

Option B is NOT a completed or launch-ready payment system. Finishing it requires server-owned quotes/orders including shipping and taxes, an order-bound payer identity, atomic transaction/log replay prevention, expiration and finality/reorg handling, authenticated fulfillment/refund operations, data retention rules and an independent review. The current verifier is a read-only diagnostic and never marks an order paid. There is no safe enable-payments switch in these patches. Independent review and Peter's explicit approval are mandatory before any real payment feature.

The alternative diff is concrete for isolating development; the future money-moving backend is intentionally not represented as complete.
