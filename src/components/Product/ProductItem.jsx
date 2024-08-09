import classNames from 'classnames/bind';
import styles from '~/assets/scss/styles.module.scss';
import { Row } from 'antd';

import { GoHeart } from 'react-icons/go';
import { LuArrowRightLeft } from 'react-icons/lu';
import { PiEyeLight } from 'react-icons/pi';
import ProdImg1_1 from '~/assets/images/best_seller_1.1.png';
import ProdImg1_2 from '~/assets/images/best_seller_1.2.webp';

const cx = classNames.bind(styles);
function ProductItem() {
	return (
		<div className={cx('product-item')}>
			<div className={cx('product-item-image')}>
				<img
					className={cx('img-1')}
					src={ProdImg1_1}
				/>
				<img
					className={cx('img-2')}
					src={ProdImg1_2}
				/>
				<div className={cx('promotion-prod')}>
					<div className={cx('new-prod')}>new</div>
					<div className={cx('sale-prod')}>sale</div>
					<div className={cx('discount-percent-prod')}>-9%</div>
				</div>
				<Row className={cx('interact-prod')}>
					<div className={cx('interact-icon')}>
						<GoHeart className={cx('icon')} />
					</div>
					<div className={cx('interact-icon')}>
						<LuArrowRightLeft className={cx('icon')} />
					</div>
					<div className={cx('interact-icon')}>
						<PiEyeLight className={cx('icon')} />
					</div>
				</Row>
				<div className={cx('button-wrapper')}>
					<div className={cx('button')}>
						<button className={cx('add-btn')}>Add to card</button>
					</div>
				</div>
			</div>
			<div className={cx('product-item-content')}>
				<p className={cx('prod-name')}>1278 Acrylic Felt Sheet - 1 Pc</p>
				<div className={cx('prod-price')}>
					<p className={cx('price', 'prod-price-sale')}>$500</p>
					<p className={cx('price')}>$450</p>
				</div>
			</div>
		</div>
	);
}

export default ProductItem;
