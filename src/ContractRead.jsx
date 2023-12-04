import React, { useState } from 'react';
import { contractABI } from './ABI';
import { ThirdwebSDK } from '@thirdweb-dev/react';

const sdk = new ThirdwebSDK('mumbai');

const ContractRead = () => {
  const [data, setData] = useState();
  async function getdata() {
    const contract = await sdk.getContract(
      '0x783adA73A6202083C03A90970e9d4C58cC275e6a',
      contractABI,
    );
    const data = await contract.call('name');
    setData(data);
  }
  return (
    <div>
      <div>token Name :{data}</div>
      <div>
        <button
          onClick={getdata}
          style={{
            backgroundColor: '#F7B787',
            color: '#fff',
            padding: '10px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Read Contract
        </button>
      </div>
    </div>
  );
};

export default ContractRead;
