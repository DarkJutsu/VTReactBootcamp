import { useEffect } from 'react';

export const AllCycles = () => {
	useEffect(() => {
		console.log('Componente creado');
		const intervalId = setInterval(() => {
			document.title = `${new Date()}`;
			console.log('Actualizacion del componente');
		}, 1000);
		return () => {
			console.log('Componente a desaparecer');
			document.title = `Tiempo detenido`;
			clearInterval(intervalId);
		};
	}, []);

	return (
		<div>
			<h1></h1>
		</div>
	);
};
