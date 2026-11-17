import test from "node:test";
import assert from "node:assert/strict";
import {parseUSDC,verifyTransfer,BASE_NATIVE_USDC,SHOP_RECEIVER,TRANSFER_TOPIC} from "./verify-base-usdc.mjs";
const pad = address => "0x" + address.slice(2).toLowerCase().padStart(64,"0");
const txHash = "0x" + "ab".repeat(32);
const log = {address:BASE_NATIVE_USDC,topics:[TRANSFER_TOPIC,pad("0x"+"11".repeat(20)),pad(SHOP_RECEIVER)],data:"0x"+(12500000n).toString(16).padStart(64,"0")};
const order = {recipient:SHOP_RECEIVER,amountUSDC:"12.5",txHash};
const receipt = {status:"0x1",transactionHash:txHash,logs:[log]};
const check = (changes={}) => verifyTransfer({order,receipt,chainId:8453,confirmations:3,...changes});
test("matches verified Base USDC transfer",()=>assert.deepEqual(check(),{ok:true,reason:"transfer-matched"}));
test("rejects wrong chain",()=>assert.equal(check({chainId:1}).ok,false));
test("rejects failed receipt",()=>assert.equal(check({receipt:{...receipt,status:"0x0"}}).ok,false));
test("rejects insufficient confirmations",()=>assert.equal(check({confirmations:1}).ok,false));
test("rejects wrong recipient",()=>assert.equal(check({order:{...order,recipient:"0x"+"22".repeat(20)}}).ok,false));
test("rejects wrong hash",()=>assert.equal(check({order:{...order,txHash:"0x"+"cd".repeat(32)}}).ok,false));
test("rejects wrong token",()=>assert.equal(check({receipt:{...receipt,logs:[{...log,address:"0x"+"22".repeat(20)}]}}).ok,false));
test("rejects wrong amount",()=>assert.equal(check({order:{...order,amountUSDC:"12.500001"}}).ok,false));
test("rejects incorrect transfer recipient",()=>assert.equal(check({receipt:{...receipt,logs:[{...log,topics:[TRANSFER_TOPIC,log.topics[1],pad("0x"+"33".repeat(20))]}]}}).ok,false));
test("rejects duplicate matching events",()=>assert.equal(check({receipt:{...receipt,logs:[log,log]}}).ok,false));
test("parses exact six decimals",()=>assert.equal(parseUSDC("0.000001"),1n));
test("rejects overprecision",()=>assert.throws(()=>parseUSDC("1.0000001")));
test("rejects invalid confirmation policy",()=>{
  for(const minConfirmations of [0,-1,2,NaN,Infinity,'3']) assert.equal(check({minConfirmations}).ok,false);
});
test("malformed receipt logs fail closed without throwing",()=>{
  for(const logs of [null,{},'bad',[null],[{}],[{...log,topics:[null,log.topics[1],log.topics[2]]}]]) assert.equal(check({receipt:{...receipt,logs}}).ok,false);
});
test("rejects removed events and malformed ABI address padding",()=>{
  assert.equal(check({receipt:{...receipt,logs:[{...log,removed:true}]}}).ok,false);
  for(const index of [1,2]) {
    const topics=[...log.topics];topics[index]='0x'+'ff'.repeat(12)+topics[index].slice(-40);
    assert.equal(check({receipt:{...receipt,logs:[{...log,topics}]}}).ok,false);
  }
});
