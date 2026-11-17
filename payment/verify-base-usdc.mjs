// Base USDC payment verification primitives. Pure functions; NO network access or funds movement.
// Inputs must come from trusted server-side RPC receipt and immutable server-side order records.
export const BASE_CHAIN_ID = 8453;
export const BASE_NATIVE_USDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
export const SHOP_RECEIVER = "0x4aa9ddbfec99cfae272acc0d07230f925d4540de";
export const TRANSFER_TOPIC = "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
const addr = x => typeof x === "string" && /^0x[0-9a-fA-F]{40}$/.test(x);
const eq = (a,b) => a.toLowerCase() === b.toLowerCase();
const topicAddress = t => /^0x[0-9a-fA-F]{64}$/.test(t || "") ? "0x" + t.slice(-40) : null;
export function parseUSDC(amount) {
  if (typeof amount !== "string" || !/^(0|[1-9]\d*)(\.\d{1,6})?$/.test(amount)) throw new Error("Invalid USDC amount");
  const [whole, fraction = ""] = amount.split(".");
  const units = BigInt(whole) * 1000000n + BigInt((fraction + "000000").slice(0,6));
  if (units <= 0n) throw new Error("Amount must be positive");
  return units;
}
export function verifyTransfer({order, receipt, chainId, confirmations, minConfirmations = 3}) {
  if (chainId !== BASE_CHAIN_ID) return {ok:false,reason:"wrong-chain"};
  if (!receipt || receipt.status !== "0x1") return {ok:false,reason:"failed-or-missing-receipt"};
  if (!Number.isInteger(confirmations) || confirmations < minConfirmations) return {ok:false,reason:"unconfirmed"};
  if (!order || !addr(order.recipient) || !eq(order.recipient,SHOP_RECEIVER)) return {ok:false,reason:"wrong-recipient"};
  if (!order.txHash || !/^0x[0-9a-fA-F]{64}$/.test(order.txHash) || !eq(order.txHash,receipt.transactionHash || "")) return {ok:false,reason:"wrong-transaction"};
  if (!order.amountUSDC || typeof order.amountUSDC !== "string") return {ok:false,reason:"invalid-amount"};
  let expected;
  try {expected = parseUSDC(order.amountUSDC)} catch {return {ok:false,reason:"invalid-amount"}}
  const matches = (receipt.logs || []).filter(log => {
    if (!addr(log.address) || !eq(log.address,BASE_NATIVE_USDC)) return false;
    if (!Array.isArray(log.topics) || log.topics.length !== 3 || !eq(log.topics[0],TRANSFER_TOPIC)) return false;
    const to = topicAddress(log.topics[2]);
    if (!to || !eq(to,order.recipient)) return false;
    if (!/^0x[0-9a-fA-F]{64}$/.test(log.data || "")) return false;
    return BigInt(log.data) === expected;
  });
  return matches.length === 1 ? {ok:true,reason:"transfer-matched"} : {ok:false,reason:"no-exact-transfer"};
}
// IMPORTANT: This check is NOT sufficient to credit an order.
// The server must atomically claim (chainId, txHash, logIndex) exactly once,
// validate an order-specific payment identity, and persist a paid state.
// Never trust order/receipt/chainId supplied by a browser as authoritative.
