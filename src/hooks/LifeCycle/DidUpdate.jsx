import { Component, useEffect } from 'react';

export class DidUpdate extends Component {
	
  componentDidUpdate(){
    console.log('Comportamineto cuando el componente recibe nuevos props')
  }
  
  render() {
		return (
			<div>
				<h1>DidUpdate</h1>
			</div>
		);
	}
}

const DidUpdateHook = () => {
	
  useEffect(()=>{
    console.log('Comportamineto cuando el componente recibe nuevos props')
  })
  
  return (
		<div>
			<h1>DidUpdate</h1>
		</div>
	);
};
