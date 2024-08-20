import classNames from 'classnames/bind';
import { set } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import styles from '~/assets/scss/styles.module.scss';

const cx = classNames.bind(styles);
function SlideShow(props) {
	const { images } = props;

	const [current, setCurrent] = useState(images[0]);
	const [isPreliew, setIsPreview] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0, scale: isPreliew ? 2 : 1 });
	const elementRef = useRef(null);
	const mainImageRef = useRef(null);

	const changecurrentImage = (image) => {
		setCurrent(image);
	};
	const handleMouseMove = (event) => {
		if (elementRef.current) {
			const rect = elementRef.current.getBoundingClientRect();
			const x = event.clientX - rect.left / 2 - rect.width / 2;
			const y = event.clientY - rect.top / 2 - rect.height / 2;
			setPosition({ x: -x, y: -y, scale: 2 });
		}
	};

	const handleMouseLeave = () => {
		setIsPreview(false);
		setPosition({ x: 0, y: 0, scale: 1 });
	};

	useEffect(() => {
		setPosition({ x: 0, y: 0, scale: isPreliew ? 2 : 1 });
	}, [isPreliew]);

	return (
		<div
			className={cx('slideshow-container')}
			ref={mainImageRef}>
			<div
				className={cx('main-image')}
				onClick={() => {
					setIsPreview((prev) => !prev);
				}}
				onMouseMove={isPreliew ? handleMouseMove : null}
				onMouseLeave={handleMouseLeave}>
				<img
					style={{
						transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale})`,
					}}
					ref={elementRef}
					className={cx('image', { 'zoom-in': isPreliew })}
					src={current}
					alt='Product'
				/>
			</div>

			<div className={cx('thumbnail-container')}>
				{images.map((image, index) => (
					<img
						className={cx('thumbnail', { active: current === image })}
						key={index}
						onClick={() => changecurrentImage(image)}
						src={image}
					/>
				))}
			</div>
		</div>
	);
}

export default SlideShow;
