import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { LEVELS } from '../../../models/levels.enum';
import { TaskClass } from '../../../models/task.class';

const taskSchema = Yup.object().shape({
	name: Yup.string()
		.min(6, 'Name too short')
		.max(35, 'Name too long')
		.required('Name is required'),
	description: Yup.string()
		.max(150, 'Description too long')
		.required('Description is required'),
	level: Yup.string()
		.oneOf(
			[LEVELS.NORMAL, LEVELS.BLOCKING, LEVELS.URGENT],
			'You must select a Priority: Normal/Blocking/Urgent'
		)
		.required('Priority is required'),
});

export const TaskFormik = ({ add, length }) => {
	const initialValues = {
		name: '',
		description: '',
		completed: false,
		level: '',
	};

	return (
		<div className='w-1/2'>
			<Formik
				initialValues={initialValues}
				validationSchema={taskSchema}
				onSubmit={async values => {
					await new Promise(r => setTimeout(r, 500));
					const newTask = new TaskClass(
						values.name,
						values.description,
						values.completed,
						values.level
					);
					add(newTask);
				}}
			>
				{({
					values,
					touched,
					errors,
					isSubmitting,
					handleBlur,
					handleChange,
				}) => (
					<Form className='grid grid-rows-1 gap-1'>
						<label htmlFor='name'>Task Name</label>
						<Field
							id='name'
							name='name'
							type='text'
							placeholder='Task Name'
							className='mt-0 block px-2 bg-zinc-200 border-b-2 border-t-0 border-x-0 border-zinc-400 focus:ring-0 focus:border-zinc-800'
						/>
						{errors.name && touched.name && (
							<ErrorMessage
								className='text-red-500 pl-3 text-sm'
								component='span'
								name='name'
							/>
						)}

						<label htmlFor='description'>Task Description</label>
						<Field
							id='description'
							name='description'
							component='textarea'
							placeholder='Task Description'
							className='mt-0 block px-2 bg-zinc-200 border-b-2 border-t-0 border-x-0 border-zinc-400 focus:ring-0 focus:border-zinc-800'
						/>
						{errors.description && touched.description && (
							<ErrorMessage
								className='text-red-500 pl-3 text-sm'
								component='span'
								name='description'
							/>
						)}

						<label htmlFor='level'>Task Priority</label>
						<Field
							id='level'
							name='level'
							component='select'
							className='capitalize mt-0 block px-2 bg-zinc-200 border-b-2 border-t-0 border-x-0 border-zinc-400 focus:ring-0 focus:border-zinc-800'
						>
							<option>[-- Selected Priority --]</option>
							<option value={LEVELS.NORMAL}>{LEVELS.NORMAL}</option>
							<option value={LEVELS.URGENT}>{LEVELS.URGENT}</option>
							<option value={LEVELS.BLOCKING}>{LEVELS.BLOCKING}</option>
						</Field>
						{errors.level && touched.level && (
							<ErrorMessage
								className='text-red-500 pl-3 text-sm'
								component='span'
								name='level'
							/>
						)}

						<button
							className='bg-sky-600 text-gray-100 mt-5 p-2 rounded-md'
							type='submit'
						>
							{length > 0 ? 'Add New Task' : 'Create your First Task'}
						</button>
						{isSubmitting ? <span>Login your credentials...</span> : null}
					</Form>
				)}
			</Formik>
		</div>
	);
};
TaskFormik.propType = {
	add: PropTypes.func.isRequired,
	length: PropTypes.number.isRequired,
};
