import React from 'react';
import { useContractWrite, useContract, Web3Button } from '@thirdweb-dev/react';
import { contractABI } from './ABI';
const contractAddress = '0x783adA73A6202083C03A90970e9d4C58cC275e6a';

const ContractWrite = () => {
  const { contract } = useContract(contractAddress, contractABI);
  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    'transfer',
  );
  return (
    <div style={{ margin: '1rem', padding: '0.5rem' }}>
      ContractWrite
      <br></br>
      <Web3Button
        style={{
          margin: '1rem',
          padding: '0.5rem',
          backgroundColor: '#BED754',
        }}
        contractAddress={contractAddress}
        // Calls the "setName" function on your smart contract with "My Name" as the first argument
        action={() =>
          mutateAsync({
            args: ['0xC9399199f40686cfacF7Ae7555Ef0DEfa0487Ebe', 10],
          })
        }
      >
        Send Transaction
      </Web3Button>
    </div>
  );
};

export default ContractWrite;
