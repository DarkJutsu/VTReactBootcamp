import { useRef } from 'react';

export const Child = ({ name, send, update }) => {
	function pressBtn() {
		const text = messageRef.current.value;
		alert(`Text input: ${text}`);
	}
	function pressBtnParams(txt) {
		alert(`Text: ${txt}`);
	}

	const messageRef = useRef('');
	const updateNRef = useRef('');

	function updateName(e){
		e.preventDefault()
		update(updateNRef.current.value)
	}

	return (
		<div>
			<p onMouseOver={() => console.log('Event mouse over')}>Hello, {name}</p>
			<button
				className='mr-3 mt-4 bg-slate-400 px-2 py-0.5 rounded-sm'
				onClick={() => console.log('Press btn1')}
			>
				Boton 1
			</button>
			<button
				className='mr-3 mt-4 bg-slate-400 px-2 py-0.5 rounded-sm'
				onClick={pressBtn}
			>
				Boton 2
			</button>
			<button
				className='mr-3 mt-4 bg-slate-400 px-2 py-0.5 rounded-sm'
				onClick={() => pressBtnParams('hola')}
			>
				Boton 3
			</button>
			<input
				className='mr-3 mt-4'
				type='text'
				placeholder='Insert text...'
				onFocus={() => console.log('input focused')}
				onChange={e => console.log('input changed: ', e.target.value)}
				onCopy={() => console.log('copied text from input')}
				ref={messageRef}
			/>

			<button
				className='mt-4 mr-3 bg-slate-400 px-2 py-0.5 rounded-sm'
				onClick={() => send(messageRef.current.value)}
			>
				Send Message
			</button>

			<div className='mt-5'>
				<form onSubmit={updateName}>
					<input ref={updateNRef} placeholder='New Name...' />
					<button type='submit' className='ml-3 mt-4 bg-slate-400 px-2 py-0.5 rounded-sm'>Update Name</button>
				</form>
			</div>

		</div>
	);
};
