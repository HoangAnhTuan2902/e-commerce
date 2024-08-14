import { useCallback } from 'react';
import debounce from 'lodash/debounce';
import { memo } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import {
	setSelectedOption,
	setIsStockFilter,
	setInputValueMinFilter,
	setInputValueMaxFilter,
} from './productSlice';
import { Collapse, Checkbox, Row, Slider, InputNumber, Space, ConfigProvider } from 'antd';
import classNames from 'classnames/bind';
import styles from '~/assets/scss/styles.module.scss';
import '~/assets/scss/CustomPackage/CustomSliderAntDesign.scss';
import '~/assets/scss/CustomPackage/CustomReactSelect.scss';

const cx = classNames.bind(styles);

// eslint-disable-next-line react/prop-types
function ProductFilter({ totalProductIsStock }) {
	const isStockChecked = useSelector((state) => state.product.isStockFilter);
	const inputValueMin = useSelector((state) => state.product.inputValueMinFilter);
	const inputValueMax = useSelector((state) => state.product.inputValueMaxFilter);
	const maxPrice = useSelector((state) => state.product.maxPrice);

	const dispatch = useDispatch();

	// Hàm debounce cho các thay đổi giá trị
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedMinChange = useCallback(
		debounce((e) => dispatch(setInputValueMinFilter(e)), 500),
		[dispatch],
	);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedMaxChange = useCallback(
		debounce((e) => dispatch(setInputValueMaxFilter(e)), 500),
		[dispatch],
	);

	const items = [
		{
			key: '1',
			label: 'Availability',
			children: (
				<ConfigProvider
					theme={{
						token: {
							colorPrimary: '#f6b73b',
							colorPrimaryHover: '#f6b73b',
						},
					}}>
					<Row>
						<Checkbox
							checked={isStockChecked}
							onChange={(e) => dispatch(setIsStockFilter(e.target.checked))}
							className={cx('check-box')}>
							In Stock
						</Checkbox>
						<p>({totalProductIsStock})</p>
					</Row>
					<Row>
						<Checkbox className={cx('check-box')}>Out of stock</Checkbox>
						<p>(0)</p>
					</Row>
				</ConfigProvider>
			),
		},
		{
			key: '2',
			label: 'Price',
			children: (
				<>
					<ConfigProvider
						theme={{
							components: {
								InputNumber: {
									inputFontSize: 16,
									paddingBlock: 6,
									handleWidth: 30,
									hoverBorderColor: '#f6b73b',
									handleHoverColor: '#f6b73b',
									activeBorderColor: '#f6b73b',
									activeShadow: '0 0 5px 0.2px #f6b73b',
								},
							},
						}}>
						<Space size='middle'>
							<InputNumber
								min={0}
								max={570}
								value={inputValueMin}
								onChange={(e) => debouncedMinChange(e)}
							/>
							<InputNumber
								min={90}
								max={maxPrice}
								value={inputValueMax}
								onChange={(e) => debouncedMaxChange(e)}
							/>
						</Space>
					</ConfigProvider>
					<Slider
						range
						max={maxPrice}
						step={10}
						value={[inputValueMin, inputValueMax]}
						tooltip={{ open: false }}
						onChange={(e) => {
							dispatch(setInputValueMinFilter(e[0]));
							dispatch(setInputValueMaxFilter(e[1]));
						}}
					/>
					<Row className={cx('price-filter')}>
						<p className={cx('name')}>Price $:</p>
						<p className={cx('value')}>
							${inputValueMin} - ${inputValueMax}
						</p>
					</Row>
				</>
			),
		},
	];

	return (
		<Collapse
			className={cx('collapse')}
			items={items}
			defaultActiveKey={['1']}
		/>
	);
}

// eslint-disable-next-line react/display-name, react/prop-types
const SortProduct = memo(({ setColView, colView, totalProduct, totalProductAfterFilter }) => {
	const dispatch = useDispatch();

	const selectedOption = useSelector((state) => state.product.selectedOption);

	const options = [
		{ value: 'Featured', label: 'Featured' },
		{ value: 'Best selling', label: 'Best selling' },
		{ value: 'Alphabetically, A-Z', label: 'Alphabetically, A-Z' },
		{ value: 'Alphabetically, Z-A', label: 'Alphabetically, Z-A' },
		{ value: 'Price, low to high', label: 'Price, low to high' },
		{ value: 'Price, high to low', label: 'Price, high to low' },
		{ value: 'Date, old to new', label: 'Date, old to new' },
		{ value: 'Date, new to old', label: 'Date, new to old' },
	];

	const handleSelectChange = (option) => {
		dispatch(setSelectedOption(option.value));
	};

	return (
		<div className={cx('sort-product')}>
			<div className={cx('sort')}>
				<Select
					placeholder='Sort Options'
					classNamePrefix={'react-select'}
					className='react-select'
					value={options.find((option) => option.value === selectedOption)}
					onChange={handleSelectChange}
					options={options}
				/>
			</div>

			{totalProductAfterFilter < totalProduct ? (
				<p className={cx('total-product')}>
					{totalProductAfterFilter} of {totalProduct} products
				</p>
			) : (
				<p className={cx('total-product')}>{totalProductAfterFilter} products</p>
			)}
			<div className={cx('grid-views')}>
				<p>View:</p>
				<p
					onClick={() => setColView('two-col')}
					className={cx('two-col', 'col', { active: colView === 'two-col' })}>
					2
				</p>
				<p
					onClick={() => setColView('three-col')}
					className={cx('three-col', 'col', { active: colView === 'three-col' })}>
					3
				</p>
			</div>
		</div>
	);
});

export { ProductFilter, SortProduct };
