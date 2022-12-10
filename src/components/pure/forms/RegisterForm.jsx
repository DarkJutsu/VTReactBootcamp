import { useState } from 'react';

const RegisterForm = () => {
	const initialData = [
		{
			user: '',
      name:'',
      email:'',
			passw: '',
		},
	];

	const [data, setData] = useState(initialData);

	return (
		<div>
			<h1></h1>
		</div>
	);
};
