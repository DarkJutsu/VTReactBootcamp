import PropTypes from 'prop-types';
import { useRef } from 'react';
import { LEVELS } from '../../../models/levels.enum';
import { TaskClass } from '../../../models/task.class';

export const TaskForm = ({ add, length }) => {
	const nameRef = useRef('');
	const descripRef = useRef('');
	const levelRef = useRef(LEVELS.NORMAL);

	function addTask(e) {
		e.preventDefault();
		const newTask = new TaskClass(
			nameRef.current.value,
			descripRef.current.value,
			false,
			levelRef.current.value
		);
		add(newTask);
	}

	return (
		<div>
			<form onSubmit={addTask} className='mt-3 p-3'>
				<div className='grid grid-cols-2'>
					<div>
						<label className='text-zinc-700'>Name Task</label>
						<input
							ref={nameRef}
							id='inpName'
							type='text'
							required
							autoFocus
							className='mt-0 block w-96 px-2 bg-zinc-200 border-b-2 border-t-0 border-x-0 border-zinc-400 focus:ring-0 focus:border-zinc-800'
						/>
					</div>

					<div>
						<label className='text-zinc-700' htmlFor='selectLvl'>
							Priority
						</label>
						<select
							ref={levelRef}
							id='selectLvl'
							defaultValue={LEVELS.NORMAL}
							className='capitalize mt-0 block w-96 px-2 bg-zinc-200 border-b-2 border-t-0 border-x-0 border-zinc-400 focus:ring-0 focus:border-zinc-800'
						>
							<option value={LEVELS.NORMAL}>{LEVELS.NORMAL}</option>
							<option value={LEVELS.URGENT}>{LEVELS.URGENT}</option>
							<option value={LEVELS.BLOCKING}>{LEVELS.BLOCKING}</option>
						</select>
					</div>

					<div>
						<label className='text-zinc-700 mt-3 xl:mt-0'>
							Description Task
						</label>
						<textarea
							ref={descripRef}
							id='inpName'
							type='text'
							required
							className='mt-0 block w-96 px-2 bg-zinc-200 border-b-2 border-t-0 border-x-0 border-zinc-400 focus:ring-0 focus:border-zinc-800'
						/>
					</div>
				</div>
				<button
					type='submit'
					className='bg-zinc-500 text-lime-100 mt-5 py-2 px-3 rounded-md hover:shadow-xl hover:bg-zinc-600'
				>
					{length > 0 ? 'Add New Task' : 'Create your First Task'}
				</button>
			</form>
		</div>
	);
};
TaskForm.propType = {
	add: PropTypes.func.isRequired,
	length: PropTypes.number.isRequired,
};
