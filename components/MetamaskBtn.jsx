import { useSDK } from "@metamask/sdk-react";

import Button from './Button';

const MetamaskBtn = ({setAccountData, setAuthSecret}) => {
    const { sdk, connected } = useSDK();
  
    const connect = () => {
        if (!window.ethereum) {
          throw new Error(`invalid ethereum provider`);
        }
    
         sdk?.connectAndSign({
          msg: "Connect + Sign message",
      })
          .then((accounts) => {
            if (accounts) {
							setAccountData(accounts)
            }
          })
          .catch((e) => console.log('request accounts ERR', e));
      };

    const disconnect = () => {
      if (sdk) {
        sdk.terminate();
				setAuthSecret('');
				setAccountData('');
      }
    };
  
    return (
      <div className="relative">
        {connected ? (
          <Button
            color="fuchsia"
            onClick={disconnect}
            text="Disconnect Wallet"
          />
        ) : (
          <Button
            color="green"
            text="Metamask"
            onClick={connect}
          />
        )}
      </div>
    );
  };

  export default MetamaskBtn;