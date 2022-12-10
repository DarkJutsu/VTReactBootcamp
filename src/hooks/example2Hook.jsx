/**
 * Ejemplo de uso de:
 * -useState()
 * -useEffect()
 * -useRef()
 */

import { useEffect, useRef, useState } from 'react';

export const Example2Hook = () => {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);

	/**
	 * Crear referencia con useRef() para asociar variable
	 * con un elemento del DOM del componente
	 */
	const myRef = useRef();

	const increment1 = () => setCount1(count1 + 1);
	const increment2 = () => setCount2(count2 + 1);

	/**
	 * Uso de useEffect()
	 * - Siempre que hay un cambio en el estado del componente
	 * se ejecuta lo que hay dentro del useEffect()
	 */
	/* useEffect(()=>{
    console.log('Hola...')
    console.log(myRef)
  }) */

	/* useEffect(() => {
		console.log('count 1');
		console.log(myRef);
	}, [count1]); */

  useEffect(() => {
		console.log('count 1');
		console.log(myRef);
	}, [count1, count2]);

	return (
		<div>
			<h2>Uso de useState(), useEffect(), useRef()</h2>
			<h3 ref={myRef}>Mi elemento referenciado</h3>
			<h2>Count 1: {count1}</h2>
			<h2>Count 2: {count2}</h2>

			<button onClick={increment1} style={{ marginRight: 25 }}>
				Incrementar Count 1
			</button>
			<button onClick={increment2}>Incrementar Count 2</button>
		</div>
	);
};
