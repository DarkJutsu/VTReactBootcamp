import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email format')
		.required('Email is required'),
	passwd: Yup.string().required('Password is required'),
});

export const LoginFormik = () => {
	const initialCredentials = {
		email: '',
		passwd: '',
	};

	return (
		<div className='w-1/2 p-3'>
			<h2>Login Formik</h2>
			<Formik
				initialValues={initialCredentials}
				validationSchema={loginSchema}
				onSubmit={async values => {
					await new Promise(r => setTimeout(r, 1000));
					alert(JSON.stringify(values, null, 2));
					localStorage.setItem('credentials', values);
				}}
			>
				{({
					values,
					touched,
					errors,
					isSubmitting,
					handleChange,
					handleBlur,
				}) => (
					<Form className='grid grid-rows-1 gap-1'>
						<label htmlFor='email'>Email</label>
						<Field id='email' name='email' type='email' placeholder='Email' />
						{errors.email && touched.email && (
							<ErrorMessage className='text-red-500' component='span' name='email' />
						)}

						<label htmlFor='passwd'>Password</label>
						<Field id='passwd' name='passwd' type='password' placeholder='Password' />
						{errors.passwd && touched.passwd && (
							<ErrorMessage className='text-red-500' component='span' name='passwd' />
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
