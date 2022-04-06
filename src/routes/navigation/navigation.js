import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as VideoGameLogo } from '../../assets/videogame-icon.svg';
const Navigation = () => {
	return (
		<>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<VideoGameLogo className='logo' />
				</Link>

				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						Comprar
					</Link>
					<Link className='nav-link' to='/sign-in'>
						Iniciar sesión
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};
export default Navigation;
