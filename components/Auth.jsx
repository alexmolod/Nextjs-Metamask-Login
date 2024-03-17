"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';

import Modal from './Modal';
import Login from './Login';
import SignUp from './SignUp';

import { MetaMaskProvider } from "@metamask/sdk-react";

const RANDOM_STRING = 'random_string';

const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask",
      url: 'https://localhost:3000',
    },
  };

const Auth = () => {
	const [accountData, setAccountData] = useState('');
	const [authSecret, setAuthSecret] = useState('');

	const getRandomString = (accountData) => {
    axios
      .post(`test.api/eth/nonce?walletAddress=${accountData}`)
      .then((response) => {
        console.log('response', response);
				setAuthSecret(response)
      })
      .catch((error) => {
				console.log(error);
      })
      .finally(() => {
        // use setAuthSecret here, because test.api/eth/nonce?walletAddress - return error
				setAuthSecret(RANDOM_STRING)
      });
      ;
  };

	const authRequest = ({data, username}) => {
    const userData = {
			signature: authSecret,
			walletAddress: accountData,
    };

		if (username) {
			userData.username = username;
		}

    const requestData = data ? data : userData;

    axios
      .post('test.api/auth/metamask/sign-in', requestData)
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
				console.log(error);
      });
  };

	useEffect(() => {
		if (accountData) {
			getRandomString(accountData)
		}
	}, [accountData])
	
  return (
    <div className="h-full flex items-center justify-center">
      <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
        <Modal buttonText="Login">
          <Login
            authSecret={authSecret}
            authRequest={authRequest}
            setAuthSecret={setAuthSecret}
            setAccountData={setAccountData}
          />
        </Modal>
        <Modal buttonText="SignUp">
          <SignUp
            authSecret={authSecret}
            authRequest={authRequest}
            setAuthSecret={setAuthSecret}
            setAccountData={setAccountData}
          />
        </Modal>
      </MetaMaskProvider>
    </div>
  );
}

export default Auth;