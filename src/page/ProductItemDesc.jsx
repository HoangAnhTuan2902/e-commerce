import React, { useEffect, useRef, useState } from 'react';
import { Modal } from 'antd';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { GoCheckCircle } from 'react-icons/go';

import styles from '~/assets/scss/styles.module.scss';
import GoToHome from '~/components/GoToHome';
import SlideShow from '~/components/ProductItemDesc/SlideShow';
import '~/assets/scss/CustomPackage/CustomModal.scss';
import images from '~/assets/images';
import ruler from '~/assets/svg/ruler.svg';

const cx = classNames.bind(styles);
function ProductItemDesc() {
	const [open, setOpen] = useState(false);

	const { pathname } = window.location;
	const [secondPath, thirdPath] = pathname.split('/').filter(Boolean).map(decodeURIComponent);

	// Extract product from location state
	const location = useLocation();
	const product = location.state?.product;

	const rangeContainerRef = useRef(null);

	useEffect(() => {
		if (rangeContainerRef.current) {
			const rangeContainer = rangeContainerRef.current;
			const rangeInput = rangeContainer.querySelector(`.${cx('quantity')}`);
			const max = parseFloat(rangeInput.max); // Giá trị max của thanh trượt
			const value = product.inStockTotal;
			const percentage = (value / max) * 100;

			const progressBar = rangeContainer.querySelector(`.${cx('quantity-progress')}`);
			if (progressBar) {
				progressBar.style.width = `${percentage}%`;
			}
		}
	}, [product.inStockTotal]);

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<div>
			<GoToHome
				secondPath={secondPath}
				thirdPath={thirdPath}
			/>
			<div className={cx('product-item-desc-container')}>
				<div className={cx('show-image')}>
					<SlideShow images={product.listImages} />
				</div>
				<div className={cx('product-desc')}>
					<p className={cx('product-name')}>{product.name}</p>
					<div className={cx('prices')}>
						<p className={cx('price', { 'old-price': product.salePrice > 0 })}>${product.price}</p>
						{product.salePrice > 0 && (
							<>
								<p className={cx('sale-price', 'new-price')}>${product.salePrice}</p>
								<span className={cx('sale-mode')}>sale</span>
							</>
						)}
					</div>
					<span className={cx('in-stock-total')}>
						<GoCheckCircle className={cx('check-icon')} />
						<p className={cx('total')}>
							{product.inStockTotal > 0 ? `In stock ${product.inStockTotal}` : 'Out of stock'}
						</p>
					</span>
					<div
						ref={rangeContainerRef}
						className={cx('custom-range')}>
						<input
							className={cx('quantity')}
							type='range'
							max={100}
							step={1}
							value={product.inStockTotal}
							disabled
							readOnly
						/>
						<div className={cx('quantity-progress')} />
					</div>
					<span
						onClick={() => setOpen(true)}
						className={cx('size-view')}>
						<img
							src={ruler}
							alt=''
						/>
						<p className={cx('size-chart')}>Size chart</p>
					</span>
					<Modal
						style={{ overflowY: 'scroll' }}
						centered
						open={open}
						onOk={() => setOpen(false)}
						onCancel={() => setOpen(false)}
						okButtonProps={{ style: { display: 'none' } }}
						cancelButtonProps={{ style: { display: 'none' } }}
						width={'70%'}
						height={'80%'}>
						<img
							src={images.size_guide}
							alt=''
						/>
					</Modal>
				</div>
			</div>
		</div>
	);
}

export default ProductItemDesc;
