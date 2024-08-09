import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from '../../../assets/scss/styles.module.scss';
import Collection1 from '../../../assets/images/collection-1.webp';
import Collection2 from '../../../assets/images/collection-2.webp';
const CATALOG_MENU = [
	{
		title: 'Acrylic Sheets',
		to: '/acrylic-sheets',
	},
	{
		title: 'Boat Docks & Accessories',
		to: '/boat-docks',
	},
	{
		title: 'Builder hardware',
		to: '/builder-hardware',
	},
	{
		title: 'Ceilings',
		to: '/Ceilings',
	},
	{
		title: 'Cement & Masonry',
		to: '/cement-masonry',
	},
	{
		title: 'Drywall',
		to: '/drywall',
	},
	{
		title: 'Fireplaces & Hearth',
		to: '/fireplaces-hearth',
	},

	{
		title: 'Insulation',
		to: '/insulation',
	},
	{
		title: 'Interior Stair Parts',
		to: '/interior-stair-parts',
	},
	{
		title: 'Ladders',
		to: '/laddders',
	},
];

const cx = classNames.bind(styles);
function CatalogNavigation() {
	return (
		<div className={cx('catalog-dropdown')}>
			<ul className={cx('catalog-dropdown-menu')}>
				{CATALOG_MENU.map((item, index) => (
					<Link
						key={`catalog-menu-item-${index}`}
						className={cx('catalog-dropdown-item')}>
						<span className={cx('catalog-dropdown-item-title', 'catalog-dropdown-item-hover')}>
							<p className={cx('catalog-dropdown-item-title', 'catalog-dropdown-item-hover')}>
								{item.title}
							</p>
						</span>
					</Link>
				))}
			</ul>
			<div className={cx('collections')}>
				<div className={cx('collection-item')}>
					<img
						className={cx('collection-item-img')}
						src={Collection1}
						alt=''
					/>
					<button className={cx('collection-item-btn')}>new!</button>
				</div>
				<div className={cx('collection-item')}>
					<img
						className={cx('collection-item-img')}
						src={Collection2}
						alt=''
					/>
					<button className={cx('collection-item-btn')}>sale 20% off</button>
				</div>
			</div>
		</div>
	);
}

export default CatalogNavigation;
