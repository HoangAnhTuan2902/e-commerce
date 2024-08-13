/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import classNames from 'classnames/bind';
import styles from '~/assets/scss/styles.module.scss';
import { Row } from 'antd';

import { GoHeart } from 'react-icons/go';
import { LuArrowRightLeft } from 'react-icons/lu';
import { PiEyeLight } from 'react-icons/pi';

const cx = classNames.bind(styles);
// eslint-disable-next-line react/prop-types
function ProductItem({ product, colView }) {
	// eslint-disable-next-line react/prop-types
	const { image_1, image_2, name, price, salePrice, discountPercent } = product;

	return (
		<div className={cx('product-item')}>
			<div className={cx('product-item-image')}>
				<img
					className={cx('img-1')}
					src={image_1}
				/>
				<img
					className={cx('img-2')}
					src={image_2}
				/>
				<div className={cx('promotion-prod')}>
					<div className={cx('new-prod')}>new</div>
					{salePrice > 0 && (
						<>
							<div className={cx('sale-prod')}>sale</div>
							<div className={cx('discount-percent-prod')}>-{discountPercent}%</div>
						</>
					)}
				</div>
				<Row className={cx('interact-prod')}>
					<div
						className={cx('interact-icon', {
							'interact-icon-two-col': colView === 'two-col',
						})}>
						<GoHeart className={cx('icon')} />
					</div>
					<div
						className={cx('interact-icon', {
							'interact-icon-two-col': colView === 'two-col',
						})}>
						<LuArrowRightLeft className={cx('icon')} />
					</div>
					<div
						className={cx('interact-icon', {
							'interact-icon-two-col': colView === 'two-col',
						})}>
						<PiEyeLight className={cx('icon')} />
					</div>
				</Row>
				<div className={cx('button-wrapper')}>
					<div className={cx('button')}>
						<button className={cx('add-btn')}>Add to card</button>
					</div>
				</div>
			</div>
			<div className={cx('product-item-content')}>
				<p className={cx('prod-name')}>{name}</p>
				<div className={cx('prod-price')}>
					<p className={cx('price', { 'prod-price-sale': salePrice > 0 })}>${price}</p>
					{salePrice > 0 && <p className={cx('price')}>${salePrice}</p>}
				</div>
			</div>
		</div>
	);
}

export default ProductItem;
