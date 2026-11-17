// Circle-issued native USDC only. Merchant must confirm receiving wallet support on each chain.
// No payment enabled by this registry.
export const MERCHANT = "0x4aa9ddbfec99cfae272acc0d07230f925d4540de";
export const USDC_CHAINS = Object.freeze([
  {id:1,name:"Ethereum",token:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",explorer:"https://etherscan.io/tx/"},
  {id:8453,name:"Base",token:"0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",explorer:"https://basescan.org/tx/"},
  {id:42161,name:"Arbitrum",token:"0xaf88d065e77c8cC2239327C5EDb3A432268e5831",explorer:"https://arbiscan.io/tx/"},
  {id:10,name:"Optimism",token:"0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",explorer:"https://optimistic.etherscan.io/tx/"},
  {id:137,name:"Polygon",token:"0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",explorer:"https://polygonscan.com/tx/"},
  {id:43114,name:"Avalanche",token:"0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",explorer:"https://snowtrace.io/tx/"}
]);
export function getUSDCChain(id){return USDC_CHAINS.find(c=>c.id===Number(id)) || null}
