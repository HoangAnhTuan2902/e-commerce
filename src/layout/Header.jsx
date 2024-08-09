import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/logo.png';
import SearchIcon from '../assets/images/search-icon.png';
import styles from '../assets/scss/styles.module.scss';
import User from '../assets/images/user.png';
import Heart from '../assets/images/heart.png';
import Cart from '../assets/images/cart.png';

const cx = classNames.bind(styles);
function Header() {
	return (
		<div className={cx('header-container')}>
			<div className={cx('logo-side')}>
				<img
					src={Logo}
					alt=''
				/>
			</div>
			<div className={cx('input-side')}>
				<div className={cx('input-form')}>
					<div className={cx('search-icon')}>
						<img
							src={SearchIcon}
							alt=''
						/>
					</div>
					<input
						type='text'
						placeholder='Search'
					/>
				</div>
				<div>
					<Link to='/login'>
						<img
							src={User}
							alt=''
						/>
					</Link>
				</div>
				<div>
					<img
						src={Heart}
						alt=''
					/>
				</div>
				<div>
					<img
						src={Cart}
						alt=''
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
