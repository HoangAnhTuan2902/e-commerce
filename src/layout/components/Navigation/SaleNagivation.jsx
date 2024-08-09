import classNames from 'classnames/bind';
import styles from '../../../assets/scss/styles.module.scss';

import Product1 from '../../../assets/images/product1.webp';
import Product2 from '../../../assets/images/product2.webp';
import Product3 from '../../../assets/images/product3.webp';
import Product4 from '../../../assets/images/product4.webp';
import { useState } from 'react';

const PRODUCTS = [
	{
		id: 1,
		name: '1278 Acrylic Felt Sheet - 1 Pc',
		image: Product1,
		price: 500,
		discountPrice: 455,
	},
	{
		id: 2,
		name: 'Acrylic Sheet, Standard Tolerance, ASTM D788',
		image: Product2,
		price: 643,
		discountPrice: 0,
	},
	{
		id: 3,
		name: 'Adams Manufacturing Quik-Fold Step Stool',
		image: Product3,
		price: 245,
		discountPrice: 0,
	},
	{
		id: 4,
		name: 'Adjustable - Zinc Plated',
		image: Product4,
		price: 354,
		discountPrice: 0,
	},
];

// Thêm thuộc tính discountPercent cho từng sản phẩm
PRODUCTS.forEach((product) => {
	if (product.price > 0 && product.discountPrice > 0) {
		// Đảm bảo price không phải là 0 để tránh chia cho 0
		product.discountPercent = Math.round(
			((product.price - product.discountPrice) / product.price) * 100,
		);
	} else {
		product.discountPercent = 0;
	}
});

const cx = classNames.bind(styles);
function SaleNagivation() {
	const [isHover, setIsHover] = useState({});

	const handleMouseEnter = (item) => {
		setIsHover((prev) => ({ ...prev, [item.id]: true }));
	};
	const handleMouseLeave = (item) => {
		setIsHover((prev) => ({ ...prev, [item.id]: false }));
	};

	return (
		<ul className={cx('product-container')}>
			<div className={cx('wrapper-propduct')}>
				{PRODUCTS.map((product, index) => (
					<li
						onMouseEnter={() => handleMouseEnter(product)}
						onMouseLeave={() => handleMouseLeave(product)}
						key={`product-${index}`}
						className={cx('product-item')}>
						<div className={cx('product-img')}>
							<img
								className={cx('img', { scale: isHover[product.id] })}
								src={product.image}
								alt={product.image}
							/>
							<div className={cx('promotion')}>
								<p className={cx('new')}>new</p>
								{product.discountPercent > 0 && (
									<>
										<p className={cx('sale')}>sale</p>
										<p className={cx('discount-percent')}>-{product.discountPercent}%</p>
									</>
								)}
							</div>
						</div>
						<div className={cx('product-info')}>
							<p className={cx('product-name')}>{product.name}</p>
							<span className={cx('product-price')}>
								<p
									className={cx('product-price-original', {
										'discount-price': product.discountPercent > 0,
									})}>
									${product.price}
								</p>
								{product.discountPercent > 0 && (
									<p className={cx('product-price-discount')}>${product.discountPrice}</p>
								)}
							</span>
						</div>
					</li>
				))}
			</div>
		</ul>
	);
}

export default SaleNagivation;
