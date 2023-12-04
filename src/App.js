import './App.css';
import {
  ThirdwebProvider,
  ConnectWallet,
  embeddedWallet,
} from '@thirdweb-dev/react';
import React, { useState } from 'react';

import Home from './Home';
import ExportPK from './ExportPK';
import Walletv from './Walletv';
import ContractRead from './ContractRead';
import ContractWrite from './ContractWrite';

function App() {
  const [iframeStatus, setIframeStatus] = useState(false);
  return (
    <div className="App">
      <ThirdwebProvider
        activeChain="mumbai"
        clientId={process.env.REACT_APP_CLIENT_ID}
        supportedWallets={[
          embeddedWallet({
            auth: {
              options: ['email', 'google'],
            },
          }),
        ]}
      >
        {/* wallet button */}
        <div style={{ margin: '1rem', padding: '0.5rem' }}>
          <ConnectWallet />
        </div>

        <div style={{ margin: '1rem', padding: '0.5rem' }}>
          <Home />
        </div>

        <div style={{ margin: '1rem', padding: '0.5rem' }}>
          {/* export private key */}
          <button
            onClick={() => {
              setIframeStatus(!iframeStatus);
            }}
            style={{
              backgroundColor: '#FF0000',
              color: '#fff',
              padding: '10px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Export PK
          </button>
          {iframeStatus && <ExportPK />}
        </div>

        <div style={{ margin: '1rem', padding: '0.5rem' }}>
          <Walletv />
        </div>

        <div>
          <ContractRead />
        </div>

        <div>
          <ContractWrite />
        </div>
      </ThirdwebProvider>
    </div>
  );
}

export default App;
