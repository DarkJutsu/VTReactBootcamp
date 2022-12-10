export const PropsChildren = (props) => {
	return (
		<idv>
			<h2>Nombre: {props.nombre}</h2>
      {props.children}
		</idv>
	);
};