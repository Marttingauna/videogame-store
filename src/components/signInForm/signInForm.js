import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
	createAuthUserWhithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';

const SignInForm = () => {
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
				<label> Nombre: </label>
				<input
					type='text'
					placeholder='Nombre'
					onChange={handleChange}
					name='displayName'
					value={displayName}
				/>

				<label> Email </label>
				<input
					type='email'
					placeholder='Email'
					onChange={handleChange}
					name='email'
					value={email}
				/>

				<label> Contraseña </label>
				<input
					type='password'
					placeholder='Contraseña'
					onChange={handleChange}
					name='password'
					value={password}
				/>

				<label> Confirmar contraseña </label>
				<input
					type='password'
					placeholder='Confirmar contraseña'
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
				/>

				<button type='submit'>Registrarse</button>

				<p>
					¿Ya tienes una cuenta?
					<Link to='/sign-in'>Inicia sesión</Link>
				</p>
			</form>
		</div>
	);
};

export default SignInForm;
