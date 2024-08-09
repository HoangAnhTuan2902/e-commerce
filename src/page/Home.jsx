import classNames from 'classnames/bind';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import HomeBestSeller from '../components/Home/HomeBestSeller';

import Tool1 from '../assets/images/tool1.webp';
import Tool2 from '../assets/images/tool2.webp';
import Tool3 from '../assets/images/tool3.webp';
import Tool4 from '../assets/images/tool4.png';
import Tool5 from '../assets/images/tool5.png';
import styles from '../assets/scss/styles.module.scss';
import HomeSlideShow from '../components/Home/HomeSlideShow';

import SaleUp1 from '../assets/images/sale_up_1.png';
import SaleUp2 from '../assets/images/sale_up_2.png';

import DiscountImg1 from '../assets/images/discount-img-1.png';
import DiscountImg2 from '../assets/images/discount-img-2.png';
import HomeToolShowRoom from '~/components/Home/HomeToolShowRoom';
import HomeFreshNews from '~/components/Home/HomeFreshNews';

const DUMMY_DATA_TOOL = [
	{
		id: 1,
		image: Tool1,
		name: 'hand tools',
		to: '/hand-tools',
	},
	{
		id: 2,
		image: Tool2,
		name: 'paint tools',
		to: '/paint-tools',
	},
	{
		id: 3,
		image: Tool3,
		name: 'power tools',
		to: '/power-tools',
	},
	{
		id: 4,
		image: Tool4,
		name: 'plumbing tools',
		to: '/plumbing-tools',
	},
	{
		id: 5,
		image: Tool5,
		name: 'electician',
		to: '/electician',
	},
];

const cx = classNames.bind(styles);
function Home() {
	return (
		<div className={cx('home-container')}>
			<HomeSlideShow />
			<div className={cx('showroom-content')}>
				<h4 className={cx('showroom-content-title')}>PARTS THAT POWER YOUR JOURNEY</h4>
				<p className={cx('showroom-content-description')}>
					Step into our expansive showroom and discover a world of possibilities for your building
					projects
				</p>
				<button className={cx('discover-btn')}>
					<p>discover now</p> <FaArrowRightLong />
				</button>
			</div>
			<div className={cx('tool-container')}>
				{DUMMY_DATA_TOOL.map((tool, index) => (
					<Link
						key={`tool-${index}`}
						className={cx('tool-item')}>
						<img
							src={tool.image}
							alt={tool.image}
						/>
						<div className={cx('btn-wrapper')}>
							<button className={cx('btn-tool')}>{tool.name}</button>
						</div>
					</Link>
				))}
			</div>
			<div className={cx('sale-up-container')}>
				<div className={cx('sale-up-item')}>
					<div className={cx('sale-up-image')}>
						<img
							src={SaleUp1}
							alt={SaleUp1}
						/>
					</div>
					<div className={cx('sale-up-content')}>
						<h4 className={cx('title')}>Measuring & Layout</h4>
						<p className={cx('description')}>Sale up to 50% off!</p>
						<button className={cx('btn-sale-up')}>
							<p>DISCOVER NOW</p>
							<FaArrowRightLong />
						</button>
					</div>
				</div>
				<div className={cx('sale-up-item')}>
					<div className={cx('sale-up-image')}>
						<img
							src={SaleUp2}
							alt={SaleUp2}
						/>
					</div>
					<div className={cx('sale-up-content')}>
						<h4 className={cx('title')}>Painting Tool Kits</h4>
						<p className={cx('description')}>Sale up to 50% off!</p>
						<button className={cx('btn-sale-up')}>
							<p>DISCOVER NOW</p>
							<FaArrowRightLong />
						</button>
					</div>
				</div>
			</div>
			<HomeBestSeller />
			<div className={cx('discount-container')}>
				<div className={cx('discount-item')}>
					<div className={cx('discount-img')}>
						<img
							src={DiscountImg1}
							alt=''
						/>
						<div className={cx('discount-content')}>
							<p className={cx('spending')}>from $9.99</p>
							<h4 className={cx('title')}>All you need get up to 30% off</h4>
							<div className={cx('btn-discount')}>
								<button className={cx('btn')}>shop now</button>
							</div>
						</div>
					</div>
				</div>
				<div className={cx('discount-item')}>
					<div className={cx('discount-img')}>
						<img
							src={DiscountImg2}
							alt=''
						/>
						<div className={cx('discount-content')}>
							<p className={cx('spending')}>WEEKLY OFFER</p>
							<h4 className={cx('title')}>Discounts up to 70%</h4>
							<div className={cx('btn-discount')}>
								<button className={cx('btn')}>shop now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<HomeToolShowRoom />
			<HomeFreshNews />
		</div>
	);
}

export default Home;
