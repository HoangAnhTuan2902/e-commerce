import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { MdCompareArrows } from 'react-icons/md';
import { IoEyeOutline, IoHeartOutline } from 'react-icons/io5';
import { FaShoppingBasket } from 'react-icons/fa';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import styles from '../../assets/scss/styles.module.scss';

import BestSeller1_1 from '../../assets/images/best_seller_1.1.png';
import BestSeller1_2 from '../../assets/images/best_seller_1.2.webp';
import BestSeller2_1 from '../../assets/images/best_seller_2.1.png';
import BestSeller2_2 from '../../assets/images/best_seller_2.2.webp';
import BestSeller3_1 from '../../assets/images/best_seller_3.1.png';
import BestSeller3_2 from '../../assets/images/best_seller_3.2.webp';
import BestSeller4_1 from '../../assets/images/best_seller_4.1.png';
import BestSeller4_2 from '../../assets/images/best_seller_4.2.webp';
import BestSeller5_1 from '../../assets/images/best_seller_5.1.png';
import BestSeller5_2 from '../../assets/images/best_seller_5.2.webp';
import BestSeller6_1 from '../../assets/images/best_seller_6.1.png';
import BestSeller6_2 from '../../assets/images/best_seller_6.2.webp';
import { useRef, useState } from 'react';

const DUMMY_BEST_SELLER = [
	{
		id: 1,
		img_1: BestSeller1_1,
		img_2: BestSeller1_2,
		name: '1278 Acrylic Felt Sheet - 1 Pc',
		price: 500,
		discountPrice: 455,
	},
	{
		id: 2,
		img_1: BestSeller2_1,
		img_2: BestSeller2_2,
		name: 'Acrylic Sheet, Standard Tolerance, ASTM D788',
		price: 643,
		discountPrice: 0,
	},
	{
		id: 3,
		img_1: BestSeller3_1,
		img_2: BestSeller3_2,
		name: 'Adams Manufacturing Quik-Fold Step Stool',
		price: 245,
		discountPrice: 0,
	},
	{
		id: 4,
		img_1: BestSeller4_1,
		img_2: BestSeller4_2,
		name: 'Adjustable - Zinc Plated',
		price: 354,
		discountPrice: 0,
	},
	{
		id: 5,
		img_1: BestSeller5_1,
		img_2: BestSeller5_2,
		name: 'Earthwool Rafter Roll Insulation',
		price: 356,
		discountPrice: 0,
	},
	{
		id: 6,
		img_1: BestSeller6_1,
		img_2: BestSeller6_2,
		name: 'Hand Painted Ornate Crown Molding',
		price: 180,
		discountPrice: 164,
	},
];

DUMMY_BEST_SELLER.forEach((product) => {
	if (product.price > 0 && product.discountPrice > 0) {
		product.discountPercent = Math.round(
			((product.price - product.discountPrice) / product.price) * 100,
		);
	} else {
		product.discountPercent = 0;
	}
});

const cx = classNames.bind(styles);
function HomeBestSeller() {
	const [isLastSlider, setIsLastSlider] = useState(false);
	const [isFirstSlider, setIsFirstSlider] = useState(false);
	const sliderRef = useRef(null);
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
				},
			},
		],
		afterChange: (current) => {
			const totalSlider = DUMMY_BEST_SELLER.length;
			const firstSlider = DUMMY_BEST_SELLER[0];
			if (current + 1 === totalSlider / 2) {
				setIsLastSlider(true);
			} else setIsLastSlider(false);

			if (current === firstSlider.id - 1) {
				setIsFirstSlider(true);
			} else setIsFirstSlider(false);
		},
	};

	const goToNext = () => {
		sliderRef.current.slickNext();
	};

	const goToPrev = () => {
		sliderRef.current.slickPrev();
	};

	return (
		<div className={cx('best-seller-container')}>
			<div className={cx('best-seller-title')}>
				<h4 className={cx('title')}>Best sellers</h4>
				<p className={cx('content')}>Top sale in this week</p>
			</div>
			<div className={cx('best-seller-product')}>
				<div className={cx('item-seller-wrapper')}>
					<Slider
						ref={sliderRef}
						className='best-seller-slider'
						{...settings}>
						{DUMMY_BEST_SELLER.map((item) => (
							<div
								key={`best-seller-${item.id}`}
								className={cx('item-seller')}>
								<div className={cx('item-image')}>
									<img
										className={cx('img_1')}
										src={item.img_1}
										alt='best_seller_1.1'
									/>
									<img
										className={cx('img_2')}
										src={item.img_2}
										alt=''
									/>
									<div className={cx('item-interact-btn')}>
										<button className={cx('interact-btn', 'view-image-btn')}>
											<IoEyeOutline />
										</button>
										<button className={cx('interact-btn', 'add-to-cart-btn')}>
											<FaShoppingBasket />
										</button>
										<button className={cx('interact-btn', 'view-image-btn')}>
											<MdCompareArrows />
										</button>
										<button className={cx('interact-btn', 'conpare-btn')}>
											<IoHeartOutline />
										</button>
									</div>
									<div className={cx('discount')}>
										<div className={cx('new')}>new</div>
										{item.discountPercent > 0 && (
											<>
												<div className={cx('sale')}>sale</div>
												<div className={cx('discount-percent')}>-{item.discountPercent}%</div>
											</>
										)}
									</div>
								</div>
								<div className={cx('item-info')}>
									<p className={cx('item-name')}>1278 Acrylic Felt Sheet - 1 Pc</p>
									<div className={cx('item-price')}>
										<p className={cx('price', { 'discount-price': item.discountPercent > 0 })}>
											${item.price}
										</p>
										{item.discountPercent > 0 && (
											<p className={cx('price', { 'new-price': item.discountPercent > 0 })}>
												${item.discountPrice}
											</p>
										)}
									</div>
								</div>
							</div>
						))}
					</Slider>
					<div className={cx('button')}>
						<button
							onClick={goToPrev}
							className={cx('prev-btn', { disable: isFirstSlider })}>
							<GoArrowLeft />
						</button>
						<button
							onClick={goToNext}
							className={cx('next-btn', { disable: isLastSlider })}>
							<GoArrowRight />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeBestSeller;
