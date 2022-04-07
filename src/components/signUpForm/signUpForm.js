import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
	createAuthUserWhithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';
import FormInput from '../formInput/formInput';

const SignUpForm = () => {
	const defaultFormFields = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	};

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Las contraseñas no coinciden');
			return;
		}
		try {
			const { user } = await createAuthUserWhithEmailAndPassword(
				email,
				password
			);
			await createUserDocumentFromAuth(user, { displayName });
			setFormFields(defaultFormFields);
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert(
					'No se pudo registrar el usuario, el correo ya esta en uso.'
				);
			} else {
				alert('Error en la creacion de usuario.');
			}
		}
	};

	return (
		<div>
			<h1>Registrate con tu correo y contraseña</h1>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Nombre'
					type='text'
					onChange={handleChange}
					name='displayName'
					value={displayName}
				/>

				<FormInput
					label='Email'
					type='email'
					onChange={handleChange}
					name='email'
					value={email}
				/>

				<FormInput
					label='Contraseña'
					type='password'
					onChange={handleChange}
					name='password'
					value={password}
				/>

				<FormInput
					label={'Confirmar contraseña'}
					type='password'
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
				/>

				<button type='submit'>Registrarse</button>
			</form>
		</div>
	);
};

export default SignUpForm;
