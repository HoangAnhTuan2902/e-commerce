import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './page/Home';
import Login from './page/Login';
import Faq from './page/Faq';
import RootLayout from './Rootlayout/RootLayout';
import Collections from './page/Collections';
import CollectionItem from './page/CollectionItem';
import ProductItemDesc from './page/ProductItemDesc';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<RootLayout />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='login'
						element={<Login />}
					/>
					<Route
						path='faq'
						element={<Faq />}
					/>
					<Route
						path='collections'
						element={<Collections />}>
						<Route
							path=':collectionName'
							element={<CollectionItem />}
						/>
					</Route>
					<Route
						path=':collectionName/:productId'
						element={<ProductItemDesc />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
