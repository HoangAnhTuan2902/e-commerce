/* eslint-disable react/prop-types */
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import styles from '../../assets/scss/styles.module.scss';
import '../../assets/scss/CustomPackage/CustomHomeSlideShow.scss';

import Slide1 from '../../assets/images/slide1.png';
import Slide2 from '../../assets/images/slide2.png';
import Slide3 from '../../assets/images/slide3.png';

import LeftArrow from '../../assets/images/left-arrow.png';
import RightArrow from '../../assets/images/right-arrow.png';
import { useRef } from 'react';

const DUMMY_TYPE_SLIDE_SHOW = [
	{
		id: 1,
		image: Slide1,
		title: 'Your Trusted So rce for Quality Spa es',
		content: 'Where Quality Meets Reliability',
	},
	{
		id: 2,
		image: Slide2,
		title: 'Driving Innovation in Spare Parts',
		content: 'Where Quality Meets Reliability',
	},
	{
		id: 3,
		image: Slide3,
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
						src={LeftArrow}
						alt=''
					/>
				</button>
				<button
					onClick={goToNext}
					className={cx('btn', 'right-btn')}>
					<img
						src={RightArrow}
						alt=''
					/>
				</button>
			</div>
		</div>
	);
}

export default HomeSlideShow;
