import { useState } from 'react';

export const ExampleHook = () => {
  
  const persona = {
    name: 'Josep',
		email: 'josep@gmail.com',
	};
  const [person, setPerson] = useState(persona);

	/**
	 * Function for the state update
	 */
	const updatePersona = () => {
		setPerson({
			name: 'Pedro',
			email: 'pedro@gmail.com',
		});
	};

	return (
		<div>
			<h1>Nombre: {person.name}</h1>
			<h1>Email: {person.email}</h1>
      <button onClick={updatePersona}>Actualizar persona</button>
		</div>
	);
};
