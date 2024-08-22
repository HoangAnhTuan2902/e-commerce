/* eslint-disable react/prop-types */
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { FaAngleRight } from 'react-icons/fa';
import styles from '~/assets/scss/component/GoToHome.module.scss';
import DynamicLink from './DynamicLink';

const cx = classNames.bind(styles);
function GoToHome({ secondPath, thirdPath = '' }) {
	return (
		<div className={cx('wrapper')}>
			<Link
				to='/'
				className={cx('go-to-home')}>
				Home
			</Link>
			<FaAngleRight />
			{thirdPath ? (
				<DynamicLink
					className={cx('go-to-home')}
					to={`/collections/${encodeURIComponent(secondPath)}`}>
					{secondPath}
				</DynamicLink>
			) : (
				<DynamicLink>{secondPath}</DynamicLink>
			)}
			{thirdPath && (
				<>
					<FaAngleRight />
					<p>{thirdPath}</p>
				</>
			)}
		</div>
	);
}

export default GoToHome;
