// Netlify server-side payment verification. Read-only: never marks an order paid.
// This endpoint accepts a transaction hash for diagnostics, not customer checkout.
// No buyer-supplied amount or order data is trusted as proof of a purchase.
import {verifyTransfer,SHOP_RECEIVER} from "../../payment/verify-base-usdc.mjs";
const RPC = process.env.BASE_RPC_URL || "https://mainnet.base.org";
const reply = (statusCode,body)=>({statusCode,headers:{"content-type":"application/json","cache-control":"no-store"},body:JSON.stringify(body)});
async function rpc(method,params){
  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),8000);
  try {
    const res=await fetch(RPC,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:1,method,params}),signal:controller.signal});
    if(!res.ok)throw Error("RPC HTTP failure");
    const data=await res.json();
    if(data.error || !("result" in data))throw Error("RPC unavailable");
    return data.result;
  }finally{clearTimeout(timeout)}
}
export async function handler(event){
  if(event.httpMethod!=="POST")return reply(405,{ok:false,error:"POST required"});
  if((event.body||"").length>2000)return reply(413,{ok:false,error:"Request too large"});
  let input;try{input=JSON.parse(event.body||"{}")}catch{return reply(400,{ok:false,error:"Invalid JSON"})}
  if(!/^0x[0-9a-fA-F]{64}$/.test(input.txHash||"") || !/^(0|[1-9]\d*)(\.\d{1,6})?$/.test(input.amountUSDC||""))return reply(400,{ok:false,error:"Invalid transaction or amount"});
  try{
    const chainHex=await rpc("eth_chainId",[]);
    if(Number.parseInt(chainHex,16)!==8453)return reply(503,{ok:false,error:"RPC chain mismatch"});
    const [receipt,head]=await Promise.all([rpc("eth_getTransactionReceipt",[input.txHash]),rpc("eth_blockNumber",[])]);
    if(!receipt || !receipt.blockNumber)return reply(200,{ok:false,reason:"not-mined",paid:false});
    const confirmations=Number(BigInt(head)-BigInt(receipt.blockNumber)+1n);
    const result=verifyTransfer({order:{recipient:SHOP_RECEIVER,amountUSDC:input.amountUSDC,txHash:input.txHash},receipt,chainId:8453,confirmations,minConfirmations:3});
    return reply(200,{...result,confirmations,paid:false,notice:"Diagnostic transfer check only; never a paid order"});
  }catch{return reply(503,{ok:false,error:"Verification temporarily unavailable"})}
}
