/* eslint-disable react/prop-types */
import classNames from 'classnames/bind';

import styles from '~/assets/scss/styles.module.scss';

const cx = classNames.bind(styles);
function ItemShowRoomTool(props) {
	const { image, name, price, discountPrice } = props;

	return (
		<div className={cx('show-room-item')}>
			<div className={cx('item-img')}>
				<img
					src={image}
					alt=''
				/>
				{discountPrice > 0 && <span className={cx('sale')}>sale</span>}
			</div>
			<div className={cx('item-info')}>
				<p className={cx('item-name')}>{name}</p>

				<p className={cx({ 'old-price': discountPrice > 0, price: discountPrice <= 0 })}>${price}</p>
				{discountPrice > 0 && <p className={cx('price')}>${discountPrice}</p>}
			</div>
		</div>
	);
}

export default ItemShowRoomTool;
