import { createContext, useContext, useState } from 'react';

const mycontext = createContext();

const Componente1 = () => {
	const state = useContext(mycontext);
	return (
		<div>
			<h1>El token es: {state.token}</h1>
			<Componente2 />
		</div>
	);
};

function Componente2() {
	const state = useContext(mycontext);

	return (
		<div>
			<h1>La sesión es: {state.sesion}</h1>
		</div>
	);
}

export const ComponentContext = () => {
	const estado = {
		token: '123456',
		sesion: 1,
	};

	const [sesionData, setSesionData] = useState(estado);

	const updateSesion = () => {
		setSesionData({
			token: 'q1w2e3r4t5y6',
			sesion: sesionData.sesion + 1,
		});
	};

	return (
		<mycontext.Provider value={sesionData}>
			<Componente1 />
			<button onClick={updateSesion}>Actualizar Sesión</button>
		</mycontext.Provider>
	);
};
