import { useState } from 'react';

import Button from './Button';
import MetamaskBtn from './MetamaskBtn';

const SignUp = ({
  authSecret,
  authRequest,
  setAuthSecret,
  setAccountData
}) => {
	const [username, setUsername] = useState('');

  const signUp = () => {
    if (username?.length === 0) {
      alert('Please enter Username!');
      return;
    }
    authRequest({username});
  };
  
  return (
    <>
      <div className="form">
        <p className="modal_title">SignUp</p>
        <input
          className="input"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />
        {authSecret && (
					<>
            <p>{authSecret}</p>
            <Button
              color="teal"
              onClick={signUp}
              text="SignUp with this account?"
            />
					</>
				)}
			  <MetamaskBtn setAccountData={setAccountData} setAuthSecret={setAuthSecret}/>
      </div>
    </>
  )
}

export default SignUp;