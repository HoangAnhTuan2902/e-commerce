import React, { useEffect, useRef, useState } from 'react';
import { Flex, Modal } from 'antd';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { GoCheckCircle } from 'react-icons/go';

import { Collapse } from 'antd';

import { BsClock } from 'react-icons/bs';
import { LuMinus, LuPlus } from 'react-icons/lu';
import { GoHeart } from 'react-icons/go';
import { MdCompareArrows } from 'react-icons/md';
import styles from '~/assets/scss/styles.module.scss';
import GoToHome from '~/components/GoToHome';
import SlideShow from '~/components/ProductItemDesc/SlideShow';
import images from '~/assets/images';
import ruler from '~/assets/svg/ruler.svg';
import '~/assets/scss/CustomPackage/CustomModal.scss';
import svgs from '~/assets/svg';
// import '~/assets/scss/CustomPackage/CustomCollapseAntDesign.scss';

const cx = classNames.bind(styles);
function ProductItemDesc() {
	const [open, setOpen] = useState(false);
	const [quatity, setQuatity] = useState(1);

	const { pathname } = window.location;
	const [secondPath, thirdPath] = pathname.split('/').filter(Boolean).map(decodeURIComponent);

	// Extract product from location state
	const location = useLocation();
	const product = location.state?.product;

	const rangeContainerRef = useRef(null);

	const handleDecreaseQuatity = () => {
		if (quatity === 0) {
			return;
		}
		setQuatity((prev) => prev - 1);
	};
	const handleIncreaseQuatity = (e) => {
		setQuatity((prev) => prev + 1);
	};

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

	const items = [
		{
			key: '1',
			label: <p className={cx('detail-title')}>DESCRIPTION</p>,
			children: (
				<ul className={cx('custom-ul')}>
					<p className={cx('custom-li')}>{product.description}</p>
				</ul>
			),
		},
		{
			key: '2',
			label: <p className={cx('detail-title')}>PRODUCT DETAILS</p>,
			children: (
				<ul className={cx('custom-ul')}>
					<li className={cx('custom-li')}>Relaxed-fit</li>
					<li className={cx('custom-li')}>Jacquard-knit fabric with wool content</li>
					<li className={cx('custom-li')}>Round neckline</li>
					<li className={cx('custom-li')}>Dropped shoulders</li>
				</ul>
			),
		},
		{
			key: '3',
			label: <p className={cx('detail-title')}>DETAILS INFO</p>,
			children: (
				<ul className={cx('custom-ul')}>
					<li className={cx('custom-li-info')}>
						<p className={cx('name')}>Vendor:</p>
						<p className={cx('info')}>Storage</p>
					</li>
					<li className={cx('custom-li-info')}>
						<p className={cx('name')}>Type:</p>
						<p className={cx('info')}>Drywall</p>
					</li>
					<li className={cx('custom-li-info')}>
						<p className={cx('name')}>Collections:</p>
						<p className={cx('info')}>Acrylic Sheets,</p>
						<p className={cx('info')}> Boat Docks & Accessories,</p>
						<p className={cx('info')}> Builders Hardware,</p>
						<p className={cx('info')}> Drywall,</p>
						<p className={cx('info')}> Interior Stair Parts,</p>
						<p className={cx('info')}> Ladders,</p>
						<p className={cx('info')}> Safety Equipment</p>
					</li>
				</ul>
			),
		},
	];

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
					<div className={cx('product-desc-wrapper')}>
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
								style={{ width: '100%' }}
								src={images.size_guide}
								alt=''
							/>
						</Modal>
						<span className={cx('quatity-title')}>
							<p>quatity</p>
							<p className={cx('in-cart')}> (... in cart)</p>
						</span>
						<div className={cx('product-interactions')}>
							<span className={cx('product-quatity')}>
								<span className={cx('product-quatity-input')}>
									<span>
										<LuMinus
											onClick={handleDecreaseQuatity}
											className={cx('quatity-minus', 'icon-quatity')}
										/>
									</span>
									<input
										onChange={(e) => setQuatity(e.target.value >= 0 ? e.target.value : 1)}
										className={cx('input-quatity')}
										type='number'
										min={1}
										value={quatity}
									/>
									<span>
										<LuPlus
											onClick={handleIncreaseQuatity}
											className={cx('quatity-plus', 'icon-quatity')}
										/>
									</span>
								</span>
							</span>
							<div className={cx('interact')}>
								<span>
									<GoHeart className={cx('interact-icon')} />
								</span>
								<span>
									<MdCompareArrows className={cx('interact-icon')} />
								</span>
							</div>
						</div>
						<div className={cx('button-wrapper')}>
							<div className={cx('add-to-cart', 'btn')}>
								<button>add to cart</button>
							</div>
							<div className={cx('buy-now', 'btn')}>
								<button>buy it now</button>
							</div>
						</div>
						<span className={cx('sold-in-recently')}>
							<BsClock />
							<p>... sold in recently</p>
						</span>
					</div>
					<div className={cx('product-detail')}>
						<Collapse
							expandIconPosition='end'
							className={[cx('collapse'), 'collapse']}
							items={items}
							defaultActiveKey={['1']}
						/>
					</div>
					<div className={cx('customer-care')}>
						<li className={cx('customer-care-item')}>
							<img
								src={svgs.shipping}
								alt=''
							/>
							<p>Free delivery</p>
						</li>
						<li className={cx('customer-care-item')}>
							<img
								src={svgs.returns}
								alt=''
							/>
							<p>Free returns</p>
						</li>
						<li className={cx('customer-care-item')}>
							<img
								src={svgs.deliveryInfo}
								alt=''
							/>
							<p>More delivery info</p>
						</li>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductItemDesc;
