import test from 'node:test';
import assert from 'node:assert/strict';
import {handler} from '../netlify/functions/verify-usdc.mjs';
test('malformed request bodies return 400 without invoking RPC',async()=>{
  const previous=globalThis.fetch;
  globalThis.fetch=()=>{throw Error('RPC must not be called');};
  try {
    for(const body of ['null','[]','"text"','true','{}','{','{"txHash":1,"amountUSDC":1}']) {
      const response=await handler({httpMethod:'POST',body});
      assert.equal(response.statusCode,400,body);
    }
  } finally {globalThis.fetch=previous;}
});
test('method and payload bounds are enforced',async()=>{
  assert.equal((await handler({httpMethod:'GET'})).statusCode,405);
  assert.equal((await handler({httpMethod:'POST',body:'x'.repeat(2001)})).statusCode,413);
});
