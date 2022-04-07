// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
/* Importacion para crear el inicio de sesión de Google */
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
/*  signInWithRedirect: Autentifica a un usuario mediante una redireccion de google.
    signInWithPopup: Inicio sesion con una ventana emergente.
    GoogleAuthProvider: Provedor de Google Auth.
*/
import {
	getFirestore, // Obtiene el objeto de Firestore
	doc, // Crea un documento en Firestore
	getDoc, // Obtiene un documento de Firestore
	setDoc, // Actualiza un documento de Firestore
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDxWYEdSYAmFghNKwTRJTwjARXcUyc_tZM',
	authDomain: 'videogame-store-d8954.firebaseapp.com',
	projectId: 'videogame-store-d8954',
	storageBucket: 'videogame-store-d8954.appspot.com',
	messagingSenderId: '136142312319',
	appId: '1:136142312319:web:5691059e0f3d55ba07804a',
};

const firebaseApp = initializeApp(firebaseConfig); // Inicializar la aplicación de Firebase

/* Inicializando provedor usando la clase proveedor, devuelve una instancia del proveedor */
const googleProvider = new GoogleAuthProvider();

/* Estableciendo parametros personalizados, de que forma queremos que se comporte */
googleProvider.setCustomParameters({
	prompt: 'select_account', // Cuando se inicia sesion con google, seleccionar una cuenta.
});

export const auth = getAuth(); // Obtener el inicio de sesión

export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider); // Iniciar sesion con google
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider); // Iniciar sesion con google

export const db = getFirestore(); // Obtener el objeto de Firestore

export const createUserDocumentFromAuth = async (
	userAuth,
	aditionalInformation = {}
) => {
	if (!userAuth) return;
	// Crear un documento en Firestore
	const userDocRef = doc(db, 'users', userAuth.uid); // Crear un documento en Firestore

	const userSnapshot = await getDoc(userDocRef); // Obtener un documento de Firestore

	if (!userSnapshot.exists()) {
		// Si no existe el documento
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			// Intentar crear el documento
			await setDoc(userDocRef, {
				displayName, // Nombre del usuario
				email, // Correo del usuario
				createdAt, // Fecha de creación del usuario
				...aditionalInformation, // Información adicional
			});
		} catch (error) {
			// Si hay un error
			console.log('error en la creacion de usuario', error);
		}
	}
	return userDocRef;
};

export const createAuthUserWhithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;
	// Crear un usuario con correo y contraseña
	return await createUserWithEmailAndPassword(auth, email, password);
};
