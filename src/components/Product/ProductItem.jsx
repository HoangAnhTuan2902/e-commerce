import classNames from 'classnames/bind';
import styles from '~/assets/scss/styles.module.scss';
import { Row } from 'antd';

import { GoHeart } from 'react-icons/go';
import { LuArrowRightLeft } from 'react-icons/lu';
import { PiEyeLight } from 'react-icons/pi';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const ProductItem = memo(({ product, colView }) => {
	const { listImages, name, price, salePrice, discountPercent } = product;

	const oldPath = window.location.pathname;
	const oldPathSplit = oldPath.split('/').filter(Boolean);

	return (
		<div className={cx('product-item')}>
			<div className={cx('product-item-image')}>
				<Link
					to={`/${oldPathSplit[oldPathSplit.length - 1]}/${name}`}
					state={{ product }}>
					{listImages &&
						listImages.length > 0 &&
						listImages.map((image, index) => (
							<img
								key={index}
								className={cx(`img-${index + 1}`)}
								src={image}
							/>
						))}
					<div className={cx('promotion-prod')}>
						<div className={cx('new-prod')}>new</div>
						{salePrice > 0 && (
							<>
								<div className={cx('sale-prod')}>sale</div>
								<div className={cx('discount-percent-prod')}>-{discountPercent}%</div>
							</>
						)}
					</div>
				</Link>
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
});

export default ProductItem;
