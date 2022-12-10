import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const registerSchema = Yup.object().shape({
	user: Yup.string()
		.min(6, 'User too short')
		.max(12, 'User too long')
		.required('User is required'),
	email: Yup.string()
		.email('Invalid email format')
		.required('Email is required'),
	password: Yup.string()
		.required('Password is required')
		.min(8, 'Password too short'),
	confirm: Yup.string()
		.when('password', {
			is: value => (value && value.length > 0 ? true : false),
			then: Yup.string().oneOf([Yup.ref('password')], '¡Passwords must match!'),
		})
		.required('You must confirm the password'),
	role: Yup.string()
		.oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User/Admin')
		.required('Role is required'),
});

export const RegisterFormik = () => {
	const initialValues = {
		user: '',
		email: '',
		password: '',
		confirm: '',
		role: ROLES.USER,
	};

	return (
		<div>
			<h2>Registrate</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={registerSchema}
				onSubmit={async values => {
					await new Promise(r => setTimeout(r, 5000));
					alert(JSON.stringify(values, null, 2));
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
						<label htmlFor='user'>Usuario</label>
						<Field id='user' name='user' type='text' placeholder='Usuario' />
						{errors.user && touched.user && (
							<ErrorMessage
								className='text-red-500'
								component='span'
								name='user'
							/>
						)}

						<label htmlFor='email'>Email</label>
						<Field id='email' name='email' type='email' placeholder='Email' />
						{errors.email && touched.email && (
							<ErrorMessage
								className='text-red-500'
								component='span'
								name='email'
							/>
						)}

						<label htmlFor='password'>Password</label>
						<Field
							id='password'
							name='password'
							type='password'
							placeholder='Password'
						/>
						{errors.password && touched.password && (
							<ErrorMessage
								className='text-red-500'
								component='span'
								name='password'
							/>
						)}
						<label htmlFor='confirm'>Password Confirm</label>
						<Field
							id='confirm'
							name='confirm'
							type='password'
							placeholder='Password Confirm'
						/>
						{errors.confirm && touched.confirm && (
							<ErrorMessage
								className='text-red-500'
								component='span'
								name='confirm'
							/>
						)}

						<button className='bg-green-500 mt-3 p-2 rounded-md' type='submit'>
							Login
						</button>
						{isSubmitting ? <span>Login your credentials...</span> : null}
					</Form>
				)}
			</Formik>
		</div>
	);
};
