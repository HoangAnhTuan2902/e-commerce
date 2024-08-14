/* eslint-disable react/prop-types */
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import styles from '../../assets/scss/styles.module.scss';
import '../../assets/scss/CustomPackage/CustomHomeSlideShow.scss';
import images from '~/assets/images';

import { useRef } from 'react';

const DUMMY_TYPE_SLIDE_SHOW = [
	{
		id: 1,
		image: images.Slide1,
		title: 'Your Trusted So rce for Quality Spa es',
		content: 'Where Quality Meets Reliability',
	},
	{
		id: 2,
		image: images.Slide2,
		title: 'Driving Innovation in Spare Parts',
		content: 'Where Quality Meets Reliability',
	},
	{
		id: 3,
		image: images.Slide3,
		title: 'Your Foundation for Quality Construction',
		content: 'Where Quality Meets Reliability',
	},
];

const cx = classNames.bind(styles);
function HomeSlideShow() {
	const slideRef = useRef(null);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		touchMove: false,
	};

	const goToNext = () => {
		slideRef.current.slickNext();
	};
	const goToPrev = () => {
		slideRef.current.slickPrev();
	};
	return (
		<div className={cx('slide-show-wrapper')}>
			<Slider
				className={cx('slide-show')}
				ref={slideRef}
				{...settings}>
				{DUMMY_TYPE_SLIDE_SHOW.map((slide, index) => (
					<div
						key={`slide-${index}`}
						className={cx('slide-show-container')}>
						<div className={cx('slide-show-item')}>
							<div className={cx('slide-show-item-img')}>
								<img
									className={cx('image')}
									src={slide.image}
									alt={slide.image}
								/>
								<div className={cx('slide-content')}>
									<div className={cx('main-content')}>
										<p className={cx('title')}>{slide.title}</p>
										<p className={cx('content')}>{slide.content}</p>
										<button className={cx('discover-btn')}>discover now</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
			<div className={cx('nav-btn')}>
				<button
					onClick={goToPrev}
					className={cx('btn', 'left-btn')}>
					<img
						src={images.LeftArrow}
						alt=''
					/>
				</button>
				<button
					onClick={goToNext}
					className={cx('btn', 'right-btn')}>
					<img
						src={images.RightArrow}
						alt=''
					/>
				</button>
			</div>
		</div>
	);
}

export default HomeSlideShow;
