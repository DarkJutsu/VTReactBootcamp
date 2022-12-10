import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import DefaultTask from './components/container/TaskList';
import { ExampleHook } from './hooks/exampleHook';
import { Example2Hook } from './hooks/example2Hook';
import { ComponentContext } from './hooks/example3Hook';
import { PropsChildren } from './hooks/examplePropsChildren';
import { AllCycles } from './hooks/LifeCycle/AllCycle';
import { Father } from './components/container/Father';
import { TaskForm } from './components/pure/forms/TaskForm';
import { OptionalRender } from './components/pure/OptionalRender';
import { LoginFormik } from './components/pure/forms/LoginFormik';
import { RegisterFormik } from './components/pure/forms/RegisterFormik';

function App() {
	return (
		<div className="p-3">
			<div className='container font-mono text-xl'>
				<DefaultTask /> 
				{/*<LoginFormik /> 
				<RegisterFormik />*/}
			</div>
		</div>
	);
}

export default App;
