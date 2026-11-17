# HOODBTC Shop — USDC Checkout Launch Gate

Status: NOT LIVE. No payments enabled by this document.

## Confirmed configuration
- Chain: Base mainnet, chain ID 8453.
- Currency: native USDC (not bridged USDbC).
- Merchant receiving address: `0x4aa9ddbfec99cfae272acc0d07230f925d4540de` (confirmed by shop owner).
- Business model: manual dropshipping. Customer pays first; merchant purchases from supplier and ships.
- Existing `checkout-preview.html` is a read-only wallet connection demonstration; it must remain payment-disabled until the launch gate is passed.

## Blocking requirements before accepting customer funds

1. **Final price and stock**: obtain an actual shipping/tax quote for the customer's address, confirm supplier availability, display total and currency, and require buyer confirmation. Reject stale prices. Do not advertise guaranteed delivery or availability without evidence.
2. **Server-side order record**: create a unique, unguessable order ID with immutable line items, USD/USDC amount, chain ID, token contract, recipient, expiry, shipping quote and fulfillment state. Keep customer address/email server-side, not in URL or blockchain memo.
3. **USDC payment verification**: verify on Base RPC server-side, using the canonical native USDC contract address independently confirmed from Circle's official documentation. Verify transaction receipt status, correct ERC-20 Transfer event, exact recipient, token contract, amount in 6 decimals, chain ID, and adequate confirmations. Check transaction hash has never been credited to another order. A wallet popup or user-supplied hash is NOT proof of payment.
4. **Payment-to-order matching**: avoid crediting unrelated transfers. Prefer an order-specific payment address or contract with unique order ID, or another unambiguous mechanism audited for collisions, partial payments, overpayments, and simultaneous orders. A shared receiving wallet + identical totals + user-submitted hashes alone is not sufficient.
5. **Persistence and alerts**: durable database with atomic order/payment transitions, idempotent webhooks/polling, access controls, encrypted private customer details, and a notification to the merchant after confirmed payment. Never store private keys or seed phrases.
6. **Operations**: define cancellation/refund handling, supplier unavailability, dispute process, tracking updates, sales taxes, shipping regions, privacy/consumer disclosures, and customer support response flow.
7. **Testing**: verify mobile wallet connection, wrong network, wrong token, wrong recipient, underpayment, overpayment, replayed hash, double checkout, RPC failure, stale quote, payment timeout, refund, order fulfillment and notification. Test with simulated transfers/testnet before real money. Independent review of money-moving code required before launch.

## Safe rollout
- Phase A: finish code on a feature branch and preview it with payment disabled.
- Phase B: run automated and manual tests; review real supplier/shipping and order operations.
- Phase C: obtain explicit owner approval, then enable real payment only after all gates pass.
- Rollback: a server-side kill switch must disable new payment requests without losing existing paid orders.

**Do not mark a purchase Paid merely because a wallet was connected or a customer clicked Complete.**
