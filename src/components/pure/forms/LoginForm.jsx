import { useState } from 'react';

const LoginForm = () => {
	const initialCredentials = [
		{
			user: '',
			passw: '',
		},
	];

	const [credentials, setCredentials] = useState(initialCredentials);

	return (
		<div>
			<h1></h1>
		</div>
	);
};
