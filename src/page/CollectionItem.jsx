import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, Suspense, lazy, useCallback } from 'react';
import _ from 'lodash';
import Sider from 'antd/es/layout/Sider';
import Layout, { Content } from 'antd/es/layout/layout';
import classNames from 'classnames/bind';
import {
	setMaxPrice,
	setInputValueMinFilter,
	setInputValueMaxFilter,
	setIsStockFilter,
} from '~/components/Product/productSlice';
import { Link, useOutletContext } from 'react-router-dom';

import GoToHome from '~/components/GoToHome';
import styles from '~/assets/scss/styles.module.scss';
import ProductSlideShow from '~/components/Product/ProductSlideShow';
import { ProductFilter, SortProduct } from '~/components/Product/ProductFilter';
import FilterState from '~/components/CollectionItem/FilterState';
const ProductItem = lazy(() => import('~/components/Product/ProductItem'));
import { getProductList } from '~/services/apiServices';

const cx = classNames.bind(styles);

function CollectionItem() {
	const [originalProducts, setOriginalProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [totalProductAfterFilter, setTotalProductAfterFilter] = useState(0);
	const [totalProductIsStock, setTotalProductIsStock] = useState(0);
	const [filterStateMounted, setFilterStateMounted] = useState(false);
	const [colView, setColView] = useState('three-col');

	const nameCollection = useOutletContext();

	const isStockFilterChecked = useSelector((state) => state.product.isStockFilter);
	const inputValueMinFilter = useSelector((state) => state.product.inputValueMinFilter);
	const inputValueMaxFilter = useSelector((state) => state.product.inputValueMaxFilter);
	const optionSort = useSelector((state) => state.product.selectedOption);
	const maxPrice = useSelector((state) => state.product.maxPrice);
	const categoryId = useSelector((state) => state.product.categoryId);

	const dispatch = useDispatch();

	// Fetch product list from API
	const fetchProductsList = useCallback(async () => {
		try {
			const response = await getProductList();
			response.forEach((product) => {
				if (product.discountPercent && product.price) {
					product.salePrice = Math.round(
						product.price - (product.price * product.discountPercent) / 100,
					);
				}
			});
			return response;
		} catch (error) {
			console.error('Failed to fetch products:', error);
			return [];
		}
	});

	useEffect(() => {
		if (!categoryId) {
			return;
		} else {
			const filtered = originalProducts.filter((product) =>
				product.categoryId.length === 1
					? product.categoryId === categoryId
					: product.categoryId.includes(categoryId),
			);
			setFilteredProducts(filtered);
			setTotalProductAfterFilter(filtered.length);
			setTotalProductIsStock(filtered.filter((product) => product.isStock).length);
		}
	}, [categoryId]);

	useEffect(() => {
		const loadProducts = async () => {
			const products = await fetchProductsList();

			setOriginalProducts(products);
			setFilteredProducts(products);
			setTotalProductAfterFilter(products.length);
			setTotalProductIsStock(products.filter((product) => product.isStock).length);

			if (products.length > 0) {
				const calculatedMaxPrice = Math.max(...products.map((product) => product.price));
				dispatch(setMaxPrice(calculatedMaxPrice));
			}
		};
		loadProducts();
	}, [dispatch]);

	// Apply filters and sorting
	useEffect(() => {
		if (originalProducts.length > 0) {
			let filtered = [...originalProducts];

			// Filter products by price
			filtered = filtered.filter(
				(product) => product.price >= inputValueMinFilter && product.price <= inputValueMaxFilter,
			);
			setTotalProductIsStock(filtered.filter((product) => product.isStock).length);

			// Filter by stock status
			if (isStockFilterChecked) {
				filtered = filtered.filter((product) => product.isStock);
			}

			// Apply sorting
			let sorted = _.cloneDeep(filtered);
			if (optionSort === 'Price, low to high') {
				sorted = _.sortBy(sorted, ['price']);
			} else if (optionSort === 'Price, high to low') {
				sorted = _.sortBy(sorted, ['price']).reverse();
			} else if (optionSort === 'Date, old to new') {
				sorted = _.sortBy(sorted, ['productionDate']);
			} else if (optionSort === 'Date, new to old') {
				sorted = _.sortBy(sorted, ['productionDate']).reverse();
			} else if (optionSort === 'Alphabetically, A-Z') {
				sorted = _.sortBy(sorted, ['name']);
			} else if (optionSort === 'Alphabetically, Z-A') {
				sorted = _.sortBy(sorted, ['name']).reverse();
			}

			if (categoryId) {
				sorted = sorted.filter((product) => product.categoryId === categoryId);
				setFilteredProducts(sorted);
				setTotalProductAfterFilter(sorted.length);
				setTotalProductIsStock(sorted.filter((product) => product.isStock).length);
			} else {
				setFilteredProducts(sorted);
				setTotalProductAfterFilter(sorted.length);
			}
		}
	}, [originalProducts, isStockFilterChecked, inputValueMinFilter, inputValueMaxFilter, optionSort]);

	useEffect(() => {
		if (inputValueMinFilter === 0 && inputValueMaxFilter === maxPrice) {
			setFilterStateMounted(false);
		} else {
			setFilterStateMounted(true);
		}
	}, [inputValueMinFilter, inputValueMaxFilter]);

	const handleClosePriceFilterState = () => {
		dispatch(setInputValueMinFilter(0));
		dispatch(setInputValueMaxFilter(maxPrice));
		setFilterStateMounted(false);
		// Reset filteredProducts to originalProducts
		setFilteredProducts(originalProducts);
		setTotalProductAfterFilter(originalProducts.length);
		setTotalProductIsStock(originalProducts.filter((product) => product.isStock).length);
	};

	const handleCloseIsStockFilterState = () => {
		dispatch(setIsStockFilter(false));
		// Reset filteredProducts to originalProducts
		setFilteredProducts(originalProducts);
		setTotalProductAfterFilter(originalProducts.length);
		setTotalProductIsStock(originalProducts.filter((product) => product.isStock).length);
	};

	return (
		<div className={cx('collection-item-container')}>
			<GoToHome secondPath={nameCollection} />
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
						totalProduct={originalProducts.length}
						totalProductAfterFilter={totalProductAfterFilter}
						setColView={setColView}
						colView={colView}
					/>
				</div>
				<div className={cx('product-wrapper')}>
					<Layout className={cx('product-layout')}>
						<Sider
							width={260}
							className={cx('left-side')}>
							{filterStateMounted || isStockFilterChecked ? (
								<div>
									<p
										className={cx('remove-filter-state')}
										onClick={() => {
											handleClosePriceFilterState();
											handleCloseIsStockFilterState();
										}}>
										Remove All
									</p>
								</div>
							) : null}
							{isStockFilterChecked && (
								<FilterState
									handleCloseIsStockFilterState={handleCloseIsStockFilterState}
									isStockFilterChecked={isStockFilterChecked}
								/>
							)}
							{filterStateMounted && (
								<FilterState
									handleClosePriceFilterState={handleClosePriceFilterState}
									inputValueMinFilter={inputValueMinFilter}
									inputValueMaxFilter={inputValueMaxFilter}
								/>
							)}
							<ProductFilter totalProductIsStock={totalProductIsStock} />
						</Sider>
						<Content className={cx('main-side', colView)}>
							{Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
								filteredProducts.map((product) => (
									<Suspense
										fallback={<div>Đang tải...</div>}
										key={product.id}>
										<ProductItem
											product={product}
											colView={colView}
										/>
									</Suspense>
								))
							) : (
								<div>No products available</div>
							)}
						</Content>
					</Layout>
					<div className={cx('recently-viewed-products')}>
						<p className={cx('recently-title')}>Recently viewed products</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CollectionItem;
