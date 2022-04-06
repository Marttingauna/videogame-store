import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';

const SignIn = () => {
	// Función para iniciar sesión con google
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user); // Crear un documento en Firestore
	};

	return (
		<div>
			<h1>Pagina inicio de sesión</h1>
			<button onClick={logGoogleUser}>
				Iniciar sesión con Google Ventana
			</button>
		</div>
	);
};

export default SignIn;
