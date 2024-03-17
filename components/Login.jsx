import { useState } from 'react';

import Button from './Button';
import MetamaskBtn from './MetamaskBtn';

const Login = ({
	authSecret,
	authRequest,
	setAuthSecret,
	setAccountData
}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

  return (
    <>
			<div className="form">
				<p className="modal_title">Login</p>
				<input
					className="input"
					placeholder="Email"
          onChange={e => setEmail(e.target.value)}
				/>
				<input
					type="password"
					className="input"
					placeholder="Password"
          onChange={e => setPassword(e.target.value)}
				/>
				<Button
					text="Login"
					color="green"
					onClick={() => authRequest({data: {email, password}})}
				/>
				{authSecret && (
					<>
						<p>Account:</p>
						<p>{authSecret}</p>
						<Button
							color="teal"
							onClick={() => authRequest({})}
							text="Login with this account?"
						/>
					</>
				)}
				<MetamaskBtn setAccountData={setAccountData} setAuthSecret={setAuthSecret}/>
			</div>
    </>
  )
}

export default Login;