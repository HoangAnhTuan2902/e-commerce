import { Outlet } from 'react-router-dom';
import Header from '../layout/Header';
import Navigation from '../layout/Navigation';
import Footer from '~/layout/Footer';

function RootLayout() {
	return (
		<div style={{ overflow: 'hidden' }}>
			<Header />
			<Navigation />
			<Outlet />
			<Footer />
		</div>
	);
}

export default RootLayout;
