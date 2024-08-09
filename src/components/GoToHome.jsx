/* eslint-disable react/prop-types */
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { FaAngleRight } from 'react-icons/fa';
import styles from '~/assets/scss/component/GoToHome.module.scss';

const cx = classNames.bind(styles);
function GoToHome({ currentPage }) {
	return (
		<div className={cx('wrapper')}>
			<Link
				to='/'
				className={cx('go-to-home')}>
				Home
			</Link>
			<FaAngleRight />
			<p>{currentPage}</p>
		</div>
	);
}

export default GoToHome;
