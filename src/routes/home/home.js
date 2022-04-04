import Directory from '../../components/directory/directory';

const Home = () => {
	const categories = [
		{
			_id: 1,
			title: 'Deportes',
			imageUrl:
				'https://assets.spartangeek.com/cc/juegos-de-tenis-para-pc.jpg',
		},
		{
			_id: 2,
			title: 'Acción y aventura',
			imageUrl:
				'https://internetpasoapaso.com/wp-content/uploads/The-Legend-Of-Zelda.jpg',
		},
		{
			_id: 3,
			title: 'Lucha',
			imageUrl:
				'https://pcahora.com/wp-content/uploads/2019/01/mejores-juegos-de-lucha-para-PS4-1.jpg',
		},
		{
			_id: 4,
			title: 'Arcade',
			imageUrl:
				'https://iat.es/wp-content/uploads/2020/12/mejores-juegos-arcade.jpg',
		},
		{
			_id: 5,
			title: 'Plataforma',
			imageUrl:
				'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/10/Indie-Platform-Games.jpg',
		},
	];
	return <Directory categories={categories} />;
};

export default Home;
