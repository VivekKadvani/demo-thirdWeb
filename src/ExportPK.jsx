import React from 'react';

const ExportPK = () => {
  return (
    <div>
      {/* eslint-disable-next-line */}
      <iframe
        src={`https://embedded-wallet.thirdweb.com/sdk/2022-08-12/embedded-wallet/export?clientId=${process.env.REACT_APP_CLIENT_ID}`}
        style={{ width: '100%', height: 'auto', overflow: 'hidden' }}
      />
    </div>
  );
};

export default ExportPK;
