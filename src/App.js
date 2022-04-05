import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation';

import Home from './routes/home/home';

const Shop = () => {
	return <h1>Pagina de compra</h1>;
};
const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
			</Route>
		</Routes>
	);
};

export default App;
