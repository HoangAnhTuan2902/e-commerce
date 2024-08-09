import classNames from 'classnames/bind';
import { useOutletContext } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';
import Layout, { Content } from 'antd/es/layout/layout';

import ProductItem from '~/components/Product/ProductItem';
import { ProductFilter, SortProduct } from '~/components/Product/ProductFilter';
import ProductSlideShow from '~/components/Product/ProductSlideShow';
import GoToHome from '~/components/GoToHome';
import styles from '~/assets/scss/styles.module.scss';

const cx = classNames.bind(styles);
// eslint-disable-next-line react/prop-types
function CollectionItem() {
	const nameCollection = useOutletContext();

	return (
		<div className={cx('collection-item-container')}>
			<GoToHome currentPage={nameCollection} />
			<div className={cx('promotion')}>
				<p className={cx('promotion-title')}>
					15% off $60, 20% off $80 or 25% off $100 +<br /> free shipping
				</p>

				<p className={cx('promotion-sub-title')}>One day only</p>
			</div>
			<div className={cx('featured-collection-list')}>
				<ProductSlideShow />
			</div>
			<p className={cx('collection-title')}>{nameCollection}</p>
			<div className={cx('products-list')}>
				<div className={cx('product-title')}>
					<SortProduct />
				</div>
				<div className={cx('product-wrapper')}>
					<Layout className={cx('product-layout')}>
						<Sider
							width={260}
							className={cx('left-side')}>
							<ProductFilter />
						</Sider>
						<Content className={cx('main-side')}>
							<ProductItem />
						</Content>
					</Layout>
				</div>
			</div>
		</div>
	);
}

export default CollectionItem;
