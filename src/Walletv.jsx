import React, { useState } from 'react';
import { useWallet, useAddress } from '@thirdweb-dev/react'; // or /react-native

const Walletv = () => {
  const embeddedWallet = useWallet('embeddedWallet');
  const [walletAddress, setWalletAddress] = useState('');
  const address = useAddress();
  const getWalletAddress = async () => {
    console.log(address);
    setWalletAddress(address);
  };

  const sendTn = async () => {
    await embeddedWallet.transfer(
      '0xC9399199f40686cfacF7Ae7555Ef0DEfa0487Ebe',
      0.001,
    );
  };
  return (
    <div>
      <div>Wallet :{walletAddress}</div>
      <div style={{ margin: '1rem', padding: '0.5rem' }}>
        <button
          onClick={() => {
            getWalletAddress();
          }}
          style={{
            backgroundColor: '#527853',
            color: '#fff',
            padding: '10px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Get address
        </button>
      </div>

      <div style={{ margin: '1rem', padding: '0.5rem' }}>
        <button
          onClick={() => {
            sendTn();
          }}
          style={{
            backgroundColor: '#EE7214',
            color: '#fff',
            padding: '10px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          send Tn
        </button>
      </div>
    </div>
  );
};

export default Walletv;
