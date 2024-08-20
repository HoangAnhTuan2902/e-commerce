import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { setCategoryId } from './productSlice';
import { useDispatch } from 'react-redux';

import styles from '~/assets/scss/styles.module.scss';
import { getCategoriesList } from '~/services/apiServices';

const cx = classNames.bind(styles);
function ProductSlideShow() {
	const sliderRef = useRef(null);
	const [categories, setCategories] = useState([]);
	const dispatch = useDispatch();

	const fetchCategoriesList = async () => {
		try {
			const response = await getCategoriesList();
			return response;
		} catch (error) {
			console.error('Failed to fetch categories:', error);
			return [];
		}
	};

	useEffect(() => {
		const loadCategories = async () => {
			const loadCategories = await fetchCategoriesList();
			setCategories(loadCategories);
		};
		loadCategories();
	}, []);

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
					{categories?.map((item) => (
						<div
							key={item.id}
							className={cx('collection-list-item')}>
							<div onClick={() => dispatch(setCategoryId(item.id))}>
								<div className={cx('list-item-image')}>
									<img src={item.bannerImage} />
								</div>
								<button className={cx('list-item-btn')}>{item.name}</button>
							</div>
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
