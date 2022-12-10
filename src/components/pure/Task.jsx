import PropType from 'prop-types';
import { useEffect } from 'react';
import { TaskClass } from '../../models/task.class';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
import { LEVELS } from '../../models/levels.enum';

const Task = ({ task, complete, remove }) => {
	useEffect(() => {
		console.log('Create task');

		return () => {
			console.log(`Task: ${task.name} is going to`);
		};
	}, [task]);

	function taskLevelBadge() {
		switch (task.level) {
			case LEVELS.NORMAL:
				return (
					<dd className='ring-1 rounded px-2 ring-emerald-700 bg-emerald-500 text-yellow-50 capitalize'>
						{task.level}
					</dd>
				);
			case LEVELS.URGENT:
				return (
					<dd className='ring-1 rounded px-2 ring-red-700 bg-red-500 text-yellow-50 capitalize'>
						{task.level}
					</dd>
				);
			case LEVELS.BLOCKING:
				return (
					<dd className='ring-1 rounded px-2 ring-gray-700 bg-gray-500 text-yellow-50 capitalize'>
						{task.level}
					</dd>
				);
		}
	}

	return (
		<div
			className={
				!task.completed
					? 'font-semibold bg-red-100 p-2'
					: 'line-through bg-green-200 rounded-md p-2'
			}
		>
			<h1 className='text-slate-800 py-2'>{task.name}</h1>
			<h3 className='text-slate-600 pl-2 my-3 h-24 overflow-auto'>{task.description}</h3>
			<h5 className='text-slate-600 pl-2 flex gap-2'>
				State: {taskLevelBadge()}
			</h5>
			<h5 className='text-slate-600 pl-2 flex gap-2 mt-0.5 select-none'>
				This task is:
				{task.completed ? (
					<BsToggleOn
						onClick={() => complete(task)}
						className='text-slate-600 text-2xl cursor-pointer'
					/>
				) : (
					<BsToggleOff
						onClick={() => complete(task)}
						className='text-slate-600 text-2xl cursor-pointer'
					/>
				)}
			</h5>
			<div className='pl-2 mt-3'>
				<MdDeleteForever
					onClick={() => remove(task)}
					className='text-red-400 text-3xl cursor-pointer'
				/>
			</div>
		</div>
	);
};
Task.propType = {
	task: PropType.instanceOf(TaskClass).isRequired,
	complete: PropType.func.isRequired,
	remove: PropType.func.isRequired,
};

export default Task;
