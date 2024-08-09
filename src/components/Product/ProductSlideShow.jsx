import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

import styles from '~/assets/scss/styles.module.scss';
import CollectionImg1 from '~/assets/images/collection-img-1.webp';
import CollectionImg2 from '~/assets/images/collection-img-3.webp';
import CollectionImg3 from '~/assets/images/collection-img-5.webp';
import CollectionImg4 from '~/assets/images/collection-img-2.webp';
import CollectionImg5 from '~/assets/images/collection-img-7.webp';
import CollectionImg6 from '~/assets/images/collection-img-8.webp';
import CollectionImg7 from '~/assets/images/collection-img-9.webp';

const DUMMY_COLLECTION_LIST = [
	{
		id: 1,
		name: 'Acrylic Sheets',
		image: CollectionImg1,
	},
	{
		id: 2,
		name: 'Builders Hardware',
		image: CollectionImg2,
	},
	{
		id: 3,
		name: 'Cement & Masonry',
		image: CollectionImg3,
	},
	{
		id: 4,
		name: 'Drywall',
		image: CollectionImg4,
	},
	{
		id: 5,
		name: 'Fireplace & Hearth',
		image: CollectionImg5,
	},
	{
		id: 6,
		name: 'Insulation',
		image: CollectionImg6,
	},
	{
		id: 7,
		name: 'Interior Stair Parts',
		image: CollectionImg7,
	},
];

const cx = classNames.bind(styles);
function ProductSlideShow() {
	const sliderRef = useRef(null);

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		initialSlide: 0,
	};

	const goToLeft = () => {
		sliderRef.current.slickPrev();
	};

	const goToRight = () => {
		sliderRef.current.slickNext();
	};
	return (
		<div>
			<div className={cx('collection-list-wrapper')}>
				<Slider
					ref={sliderRef}
					className={cx('collection-list-slider')}
					{...settings}>
					{DUMMY_COLLECTION_LIST.map((item) => (
						<div
							key={item.id}
							className={cx('collection-list-item')}>
							<div className={cx('list-item-image')}>
								<img
									src={item.image}
									alt=''
								/>
							</div>
							<button className={cx('list-item-btn')}>{item.name}</button>
						</div>
					))}
				</Slider>
				<div className={cx('btn-wrapper')}>
					<button
						onClick={goToLeft}
						className={cx('btn-arrow', 'left')}>
						<FaArrowLeft />
					</button>
					<button
						onClick={goToRight}
						className={cx('btn-arrow', 'right')}>
						<FaArrowRight />
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductSlideShow;
