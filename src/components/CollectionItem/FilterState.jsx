/* eslint-disable react/prop-types */
import classNames from 'classnames/bind';
import { IoCloseOutline } from 'react-icons/io5';
import styles from '~/assets/scss/styles.module.scss';

const cx = classNames.bind(styles);
function FilterState(props) {
	const {
		isStockFilterChecked,
		inputValueMaxFilter,
		inputValueMinFilter,
		handleClosePriceFilterState,
		handleCloseIsStockFilterState,
	} = props;

	return (
		<>
			{isStockFilterChecked && (
				<div
					onClick={handleCloseIsStockFilterState}
					className={cx('filter-state-wrapper')}>
					<p>Availability: In Stock</p>
					<IoCloseOutline />
				</div>
			)}
			{inputValueMinFilter || inputValueMaxFilter ? (
				<div
					onClick={handleClosePriceFilterState}
					className={cx('filter-state-wrapper')}>
					<p>
						${inputValueMinFilter} - ${inputValueMaxFilter}
					</p>
					<IoCloseOutline />
				</div>
			) : null}
		</>
	);
}

export default FilterState;
