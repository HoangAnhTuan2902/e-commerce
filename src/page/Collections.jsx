import classNames from 'classnames/bind';
import styles from '~/assets/scss/styles.module.scss';
import CollectionChild from '~/components/Collections/CollectionChild';
import { Outlet, useLocation } from 'react-router-dom';

import CollectionImg1 from '~/assets/images/collection-img-1.webp';
import CollectionImg2 from '~/assets/images/collection-img-2.webp';
import CollectionImg3 from '~/assets/images/collection-img-3.webp';
import CollectionImg4 from '~/assets/images/collection-img-4.webp';
import CollectionImg5 from '~/assets/images/collection-img-5.webp';
import CollectionImg6 from '~/assets/images/collection-img-6.webp';
import CollectionImg7 from '~/assets/images/collection-img-7.webp';
import CollectionImg8 from '~/assets/images/collection-img-8.webp';
import CollectionImg9 from '~/assets/images/collection-img-9.webp';
import CollectionImg10 from '~/assets/images/collection-img-10.webp';
import CollectionImg11 from '~/assets/images/collection-img-11.webp';
import CollectionImg12 from '~/assets/images/collection-img-12.webp';
import CollectionImg13 from '~/assets/images/collection-img-13.webp';
import CollectionImg14 from '~/assets/images/collection-img-14.webp';

const DUMMY_DATA_COLLECTIONS = [
	{
		id: 1,
		image: CollectionImg1,
		name: 'Acrylic Sheets',
		total: 18,
		to: 'acrylic-sheets',
	},
	{
		id: 2,
		image: CollectionImg2,
		name: 'Boat Docks & Accessories',
		total: 25,
		to: 'boat-docks-&-accessories',
	},
	{
		id: 3,
		image: CollectionImg3,
		name: 'Builders Hardware',
		total: 30,
		to: 'builders-hardware',
	},
	{
		id: 4,
		image: CollectionImg4,
		name: 'Ceilings',
		total: 12,
		to: 'ceilings',
	},
	{
		id: 5,
		image: CollectionImg5,
		name: 'Cement & Masonry',
		total: 20,
		to: 'cement-&-masonry',
	},
	{
		id: 6,
		image: CollectionImg6,
		name: 'Drywall',
		total: 15,
		to: 'drywall',
	},
	{
		id: 7,
		image: CollectionImg7,
		name: 'Fireplace & Hearth',
		total: 10,
		to: 'fireplace-&-hearth',
	},
	{
		id: 8,
		image: CollectionImg8,
		name: 'Insulation',
		total: 22,
		to: 'insulation',
	},
	{
		id: 9,
		image: CollectionImg9,
		name: 'Interior Stair Parts',
		total: 18,
		to: 'interior-stair-parts',
	},
	{
		id: 10,
		image: CollectionImg10,
		name: 'Interior Stair Parts',
		total: 27,
		to: 'interior-stair-parts',
	},
	{
		id: 11,
		image: CollectionImg11,
		name: 'Moulding & Millwork',
		total: 14,
		to: 'moulding-&-millwork',
	},
	{
		id: 12,
		image: CollectionImg12,
		name: 'Roofing & Gutters',
		total: 19,
		to: 'roofing-&-gutters',
	},
	{
		id: 13,
		image: CollectionImg13,
		name: 'Safety Equipment',
		total: 16,
		to: 'safety-equipment',
	},
	{
		id: 14,
		image: CollectionImg14,
		name: 'Siding',
		total: 21,
		to: 'siding',
	},
];

const cx = classNames.bind(styles);
function Collections() {
	const location = useLocation();
	const currentCollection = DUMMY_DATA_COLLECTIONS.find(
		(collection) => `/collections/${collection.to}` === location.pathname,
	);

	if (currentCollection) {
		return <Outlet context={currentCollection.name} />;
	}
	return (
		<div className={cx('collections-container')}>
			<p className={cx('collections-title')}>Collections</p>
			<div className={cx('collection-items-container')}>
				{DUMMY_DATA_COLLECTIONS &&
					DUMMY_DATA_COLLECTIONS.map((collection) => (
						<CollectionChild
							key={collection.id}
							collection={collection}
						/>
					))}
			</div>
		</div>
	);
}

export default Collections;
