import { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from '~/assets/scss/styles.module.scss';
import CollectionChild from '~/components/Collections/CollectionChild';
import { Outlet, useLocation } from 'react-router-dom';
import { getCategoriesList } from '~/services/apiServices';
import { setCategories } from './collectionSlice';
import { useSelector, useDispatch } from 'react-redux';

const cx = classNames.bind(styles);
function Collections() {
	const categories = useSelector((state) => state.collection.categories);

	const dispatch = useDispatch();
	const fetchCategoriesList = async () => {
		try {
			const response = await getCategoriesList();
			return response;
		} catch (error) {
			console.error('Failed to fetch categories:', error);
			return [];
		}
	};

	useEffect(() => {
		const loadCategories = async () => {
			const loadCategories = await fetchCategoriesList();
			dispatch(setCategories(loadCategories));
		};
		loadCategories();
	}, []);

	const location = useLocation();

	const currentCollection = categories.find(
		(collection) =>
			`/collections/${encodeURIComponent(collection.name.toLowerCase())}` === location.pathname,
	);

	if (currentCollection) {
		return <Outlet context={currentCollection.name} />;
	}
	return (
		<div className={cx('collections-container')}>
			<p className={cx('collections-title')}>Collections</p>
			<div className={cx('collection-items-container')}>
				{categories &&
					categories.map((collection) => (
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
