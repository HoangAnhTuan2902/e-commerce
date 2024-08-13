import debounce from 'lodash/debounce';
import _ from 'lodash';
import classNames from 'classnames/bind';
import Sider from 'antd/es/layout/Sider';
import { useDispatch, useSelector } from 'react-redux';
import { setMaxPrice } from '~/components/Product/productSlice';

import { useOutletContext } from 'react-router-dom';
import Layout, { Content } from 'antd/es/layout/layout';
import { useState, Suspense, lazy, useEffect, useCallback } from 'react';

import GoToHome from '~/components/GoToHome';
import styles from '~/assets/scss/styles.module.scss';
import ProductSlideShow from '~/components/Product/ProductSlideShow';
import GetRandomDateWithinYears from '~/components/GetRandomDateWithinYears';
import { ProductFilter, SortProduct } from '~/components/Product/ProductFilter';
import images from '~/assets/images';

const ProductItem = lazy(() => import('~/components/Product/ProductItem'));
const cx = classNames.bind(styles);

const DUMMY_PRODUCT_LIST = [
	{
		id: 1,
		name: 'Adams Manufacturing Quik-Fold Step Stool',
		price: 245,
		salePrice: 0,
		date: GetRandomDateWithinYears(3),
		image_1: images.ProdImg1_1,
		image_2: images.ProdImg1_2,
		inStock: true,
	},
	{
		id: 2,
		name: 'Adjustable - Zinc Plated',
		price: 354,
		salePrice: 0,
		date: GetRandomDateWithinYears(3),
		image_1: images.ProdImg2_1,
		image_2: images.ProdImg2_2,
		inStock: true,
	},
	{
		id: 3,
		name: 'Acrylic Sheet, Standard Tolerance, ASTM D788',
		price: 643,
		salePrice: 0,
		date: GetRandomDateWithinYears(3),
		image_1: images.ProdImg3_1,
		image_2: images.ProdImg3_2,
		inStock: true,
	},
	{
		id: 4,
		name: '1278 Acrylic Felt Sheet - 1 Pc',
		price: 500,
		salePrice: 456,
		date: GetRandomDateWithinYears(3),
		image_1: images.ProdImg4_1,
		image_2: images.ProdImg4_2,
		inStock: true,
	},
	{
		id: 5,
		name: 'Earthwool Rafter Roll Insulation',
		price: 356,
		salePrice: 0,
		date: GetRandomDateWithinYears(3),
		image_1: images.ProdImg5_1,
		image_2: images.ProdImg5_2,
		inStock: true,
	},
	{
		id: 6,
		name: 'Hand Painted Ornate Crown Molding',
		price: 180,
		salePrice: 164,
		date: GetRandomDateWithinYears(3),
		image_1: images.ProdImg6_1,
		image_2: images.ProdImg6_2,
		inStock: true,
	},
];

DUMMY_PRODUCT_LIST.forEach((item) => {
	let discountPercent = (item.salePrice / item.price) * 100;
	item.discountPercent = Math.round(100 - discountPercent);
});

function CollectionItem() {
	const nameCollection = useOutletContext();
	const [colView, setColView] = useState('three-col');
	const [totalProduct, setTotalProduct] = useState(DUMMY_PRODUCT_LIST.length);
	const [sortedProducts, setSortedProducts] = useState(DUMMY_PRODUCT_LIST);

	const optionSort = useSelector((state) => state.product.selectedOption);
	const isStockFilterChecked = useSelector((state) => state.product.isStockFilter);
	const inputValueMinFilter = useSelector((state) => state.product.inputValueMinFilter);
	const inputValueMaxFilter = useSelector((state) => state.product.inputValueMaxFilter);
	const dispatch = useDispatch();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleFilterPriceChange = useCallback(
		debounce((inputValueMinFilter, inputValueMaxFilter) => {
			const filtered = _.filter(DUMMY_PRODUCT_LIST, (product) => {
				return product.price >= inputValueMinFilter && product.price <= inputValueMaxFilter;
			});
			setTotalProduct(filtered.length);
			setSortedProducts(filtered);
		}, 500),
		[],
	);

	useEffect(() => {
		const calculatedsetMaxPrice = Math.max(...DUMMY_PRODUCT_LIST.map((product) => product.price));
		dispatch(setMaxPrice(calculatedsetMaxPrice));
	}, [dispatch]);

	useEffect(() => {
		handleFilterPriceChange(inputValueMinFilter, inputValueMaxFilter);
	}, [inputValueMinFilter, inputValueMaxFilter, handleFilterPriceChange]);

	useEffect(() => {
		if (isStockFilterChecked) {
			const filtered = DUMMY_PRODUCT_LIST.filter((product) => product.inStock);
			setTotalProduct(filtered.length);
			setSortedProducts(filtered);
		} else {
			setTotalProduct(DUMMY_PRODUCT_LIST.length);
			setSortedProducts(DUMMY_PRODUCT_LIST);
		}
	}, [isStockFilterChecked]);
	useEffect(() => {
		let sorted = _.cloneDeep(DUMMY_PRODUCT_LIST);
		if (optionSort === 'Price, low to high') {
			sorted = _.sortBy(sorted, ['price']);
		} else if (optionSort === 'Price, high to low') {
			sorted = _.sortBy(sorted, ['price']).reverse();
		} else if (optionSort === 'Date, old to new') {
			sorted = _.sortBy(sorted, ['date']);
		} else if (optionSort === 'Date, new to old') {
			sorted = _.sortBy(sorted, ['date']).reverse();
		} else if (optionSort === 'Alphabetically, A-Z') {
			sorted = _.sortBy(sorted, ['name']);
		} else if (optionSort === 'Alphabetically, Z-A') {
			sorted = _.sortBy(sorted, ['name']).reverse();
		}
		setSortedProducts(sorted);
	}, [optionSort]);

	return (
		<div className={cx('collection-item-container')}>
			<GoToHome currentPage={nameCollection} />
			<div className={cx('promotion')}>
				<p className={cx('promotion-title')}>
					15% off $60, 20% off $80 hoặc 25% off $100 +<br /> free shipping
				</p>
				<p className={cx('promotion-sub-title')}>Chỉ một ngày</p>
			</div>
			<div className={cx('featured-collection-list')}>
				<ProductSlideShow />
			</div>
			<p className={cx('collection-title')}>{nameCollection}</p>
			<div className={cx('products-list')}>
				<div className={cx('product-title')}>
					<SortProduct
						totalProduct={totalProduct}
						setColView={setColView}
						colView={colView}
					/>
				</div>
				<div className={cx('product-wrapper')}>
					<Layout className={cx('product-layout')}>
						<Sider
							width={260}
							className={cx('left-side')}>
							<ProductFilter totalProduct={totalProduct} />
						</Sider>
						<Content className={cx('main-side', colView)}>
							{sortedProducts.map((product) => (
								<Suspense
									fallback={<div>Đang tải...</div>}
									key={product.id}>
									<ProductItem
										product={product}
										colView={colView}
									/>
								</Suspense>
							))}
						</Content>
					</Layout>
				</div>
			</div>
		</div>
	);
}

export default CollectionItem;
