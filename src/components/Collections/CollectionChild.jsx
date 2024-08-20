/* eslint-disable react/prop-types */
import classNames from 'classnames/bind';
import styles from '~/assets/scss/styles.module.scss';
import { Link, useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);
function CollectionChild({ collection }) {
	const location = useLocation();

	return (
		<div className={cx('collection-items-container')}>
			<Link
				className={cx('collection-item')}
				to={encodeURIComponent(collection.name.toLowerCase())}>
				<div className={cx('collection-collection-img')}>
					<img
						className={cx('collection-item-img')}
						src={collection.bannerImage}
					/>
				</div>
				<div className={cx('collection-item-content')}>
					<p className={cx('collection-item-title')}>{collection.name}</p>
					<p className={cx('collection-item-total')}>{collection.total} products</p>
				</div>
			</Link>
		</div>
	);
}

export default CollectionChild;
