import { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { TaskClass } from '../../models/task.class';
import { TaskForm } from '../pure/forms/TaskForm';
import { TaskFormik } from '../pure/forms/TaskFormik';
import Task from '../pure/Task';

const TaskList = () => {
	const defaultTask = new TaskClass(
		'Example',
		'Default description asdasd Default description Default description Default description',
		true,
		LEVELS.NORMAL
	);
	const defaultTask2 = new TaskClass(
		'Example 2',
		'Default description',
		false,
		LEVELS.URGENT
	);
	const defaultTask3 = new TaskClass(
		'Example 3',
		'Default description',
		true,
		LEVELS.BLOCKING
	);

	const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);

	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => {
			console.log('Task list component is going to unmount');
		};
	}, [tasks]);

	function completeTask(task) {
		const i = tasks.indexOf(task);
		const tempTask = [...tasks];

		tempTask[i].completed = !tempTask[i].completed;
		setTasks(tempTask);
	}

	function deleteTask(task) {
		const i = tasks.indexOf(task);
		const tempTask = [...tasks];

		tempTask.splice(i, 1);
		setTasks(tempTask);
	}

	function addTask(task) {
		const i = tasks.indexOf(task);
		const tempTask = [...tasks];

		tempTask.push(task);
		setTasks(tempTask);
	}

	const NewTaskList = () => {
		return (
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 pt-4'>
				{tasks.map((task, i) => {
					return (
						<Task
							key={i}
							task={task}
							complete={completeTask}
							remove={deleteTask}
						/>
					);
				})}
			</div>
		);
	};

	const Spinner = () => {
		return (
			<div className='text-center mt-44'>
				<div role='status'>
					<svg
						className='inline mr-2 w-12 h-12 text-gray-300 animate-spin fill-zinc-600'
						viewBox='0 0 100 101'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
							fill='currentColor'
						/>
						<path
							d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
							fill='currentFill'
						/>
					</svg>
					<span className='sr-only'>Loading...</span>
				</div>
			</div>
		);
	};

	return (
		<>
			<h1 className='text-zinc-800 text-5xl pb-4'>
				Your Task
				<div className='w-96 h-0.5 bg-black'></div>
			</h1>
			{/* <TaskForm add={addTask} length={tasks.length} /> */}
			<div className='flex justify-center'>
				<TaskFormik add={addTask} length={tasks.length} />
			</div>
			{loading ? <Spinner /> : <NewTaskList />}
			{!tasks.length > 0 ? (
				<h3 className='text-red-400 text-center'>
					No hay tareas disponibles...
				</h3>
			) : (
				''
			)}
		</>
	);
};

export default TaskList;
