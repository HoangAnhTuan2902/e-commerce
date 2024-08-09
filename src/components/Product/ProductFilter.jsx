import Select from 'react-select';
import React, { useState } from 'react';
import { Collapse, Checkbox, Row, Slider, InputNumber, Space, ConfigProvider } from 'antd';
import classNames from 'classnames/bind';
import styles from '~/assets/scss/styles.module.scss';
import '~/assets/scss/CustomPackage/CustomSliderAntDesign.scss';
import '~/assets/scss/CustomPackage/CustomReactSelect.scss';

const cx = classNames.bind(styles);

function ProductFilter() {
	const [inputValueMin, setInputValueMin] = useState(0);
	const [inputValueMax, setInputValueMax] = useState(640);

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
						<Checkbox>Checkbox</Checkbox>
						<p>(18)</p>
					</Row>
					<Row>
						<Checkbox>Checkbox</Checkbox>
						<p>(18)</p>
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
								onChange={(e) => setInputValueMin(e)}
							/>
							<InputNumber
								min={90}
								max={640}
								value={inputValueMax}
								onChange={(e) => setInputValueMax(e)}
							/>
						</Space>
					</ConfigProvider>
					<Slider
						max={640}
						range
						step={10}
						value={[inputValueMin, inputValueMax]}
						tooltip={{ open: false }}
						onChange={(e) => {
							setInputValueMin(e[0]);
							setInputValueMax(e[1]);
						}}
						defaultValue={[inputValueMin, inputValueMax]}
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

	const onChange = (key) => {
		console.log(key);
	};

	return (
		<Collapse
			items={items}
			defaultActiveKey={['1']}
			onChange={onChange}
		/>
	);
}

// eslint-disable-next-line react/display-name
const SortProduct = React.memo(() => {
	const [selectedOption, setSelectedOption] = useState(null);
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

	return (
		<div className={cx('sort-product')}>
			<div className={cx('sort')}>
				<Select
					placeholder='Sort Options'
					classNamePrefix={'react-select'}
					className='react-select'
					defaultValue={selectedOption}
					onChange={setSelectedOption}
					options={options}
				/>
			</div>
			<p className={cx('total-product')}>18 products</p>
			<div className={cx('grid-views')}>
				<p>View:</p>
				<p className={cx('two-col', 'col')}>2</p>
				<p className={cx('three-col', 'col')}>3</p>
			</div>
		</div>
	);
});

export { ProductFilter, SortProduct };
