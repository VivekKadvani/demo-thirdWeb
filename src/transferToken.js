import { ThirdwebSDK } from '@thirdweb-dev/react';
const sdk = new ThirdwebSDK('mumbai');

export async function sendTransaction() {
  const txResult = await sdk.wallet.transfer(
    '0xC9399199f40686cfacF7Ae7555Ef0DEfa0487Ebe',
    0.01,
  );
  console.log(txResult);
}
