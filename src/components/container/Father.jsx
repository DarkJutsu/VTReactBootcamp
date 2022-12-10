import { useState } from 'react';
import { Child } from '../pure/Child';

export const Father = () => {
	
  const [name, setName]=useState('Juan')
  
  function showMessage(txt) {
		alert(`Message received: ${txt}`);
	}
  function updateName(newN){
    setName(newN)
  }

	return (
		<div>
			<Child name={name} send={showMessage} update={updateName} />
		</div>
	);
};
