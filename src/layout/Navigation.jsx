import classNames from 'classnames/bind';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useState } from 'react';

import OrtherPageNavigation from './components/Navigation/OrtherPageNavigation';
import CatalogNavigation from './components/Navigation/CatalogNavigation';

import styles from '../assets/scss/styles.module.scss';
import SaleNagivation from './components/Navigation/SaleNagivation';
import BlogNavigation from './components/Navigation/BlogNavigation';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const NAVIGATION = [
	{
		title: 'Home',
		to: '/',
	},
	{
		title: 'Other Pages',
		icon: <IoIosArrowDown />,
		iconUp: <IoIosArrowUp />,
	},
	{
		title: 'Catalog',
		icon: <IoIosArrowDown />,
		iconUp: <IoIosArrowUp />,
	},
	{
		title: 'Sale',
		icon: <IoIosArrowDown />,
		iconUp: <IoIosArrowUp />,
	},
	{
		title: 'Blog',
		icon: <IoIosArrowDown />,
		iconUp: <IoIosArrowUp />,
	},
];

const DUMMY_TYPE_PRICES_COUNTRY = [
	{ id: '1', name: 'Afghanistan' },
	{ id: '2', name: 'Albania' },
	{ id: '3', name: 'Algeria' },
	{ id: '4', name: 'Andorra' },
	{ id: '5', name: 'Angola' },
	{ id: '6', name: 'Antigua and Barbuda' },
	{ id: '7', name: 'Argentina' },
	{ id: '8', name: 'Armenia' },
	{ id: '9', name: 'Australia' },
	{ id: '10', name: 'Austria' },
	{ id: '11', name: 'Azerbaijan' },
	{ id: '12', name: 'Bahamas' },
	{ id: '13', name: 'Bahrain' },
	{ id: '14', name: 'Bangladesh' },
	{ id: '15', name: 'Barbados' },
	{ id: '16', name: 'Belarus' },
	{ id: '17', name: 'Belgium' },
	{ id: '18', name: 'Belize' },
	{ id: '19', name: 'Benin' },
	{ id: '20', name: 'Bhutan' },
	{ id: '21', name: 'Bolivia' },
	{ id: '22', name: 'Bosnia and Herzegovina' },
	{ id: '23', name: 'Botswana' },
	{ id: '24', name: 'Brazil' },
	{ id: '25', name: 'Brunei' },
	{ id: '26', name: 'Bulgaria' },
	{ id: '27', name: 'Burkina Faso' },
	{ id: '28', name: 'Burundi' },
	{ id: '29', name: 'Cabo Verde' },
	{ id: '30', name: 'Cambodia' },
	{ id: '31', name: 'Cameroon' },
	{ id: '32', name: 'Canada' },
	{ id: '33', name: 'Central African Republic' },
	{ id: '34', name: 'Chad' },
	{ id: '35', name: 'Chile' },
	{ id: '36', name: 'China' },
	{ id: '37', name: 'Colombia' },
	{ id: '38', name: 'Comoros' },
	{ id: '39', name: 'Congo, Democratic Republic of the' },
	{ id: '40', name: 'Congo, Republic of the' },
	{ id: '41', name: 'Costa Rica' },
	{ id: '42', name: 'Croatia' },
	{ id: '43', name: 'Cuba' },
	{ id: '44', name: 'Cyprus' },
	{ id: '45', name: 'Czech Republic' },
	{ id: '46', name: 'Denmark' },
	{ id: '47', name: 'Djibouti' },
	{ id: '48', name: 'Dominica' },
	{ id: '49', name: 'Dominican Republic' },
	{ id: '50', name: 'East Timor (Timor-Leste)' },
	{ id: '51', name: 'Ecuador' },
	{ id: '52', name: 'Egypt' },
	{ id: '53', name: 'El Salvador' },
	{ id: '54', name: 'Equatorial Guinea' },
	{ id: '55', name: 'Eritrea' },
	{ id: '56', name: 'Estonia' },
	{ id: '57', name: 'Eswatini' },
	{ id: '58', name: 'Ethiopia' },
	{ id: '59', name: 'Fiji' },
	{ id: '60', name: 'Finland' },
	{ id: '61', name: 'France' },
	{ id: '62', name: 'Gabon' },
	{ id: '63', name: 'Gambia' },
	{ id: '64', name: 'Georgia' },
	{ id: '65', name: 'Germany' },
	{ id: '66', name: 'Ghana' },
	{ id: '67', name: 'Greece' },
	{ id: '68', name: 'Grenada' },
	{ id: '69', name: 'Guatemala' },
	{ id: '70', name: 'Guinea' },
	{ id: '71', name: 'Guinea-Bissau' },
	{ id: '72', name: 'Guyana' },
	{ id: '73', name: 'Haiti' },
	{ id: '74', name: 'Honduras' },
	{ id: '75', name: 'Hungary' },
	{ id: '76', name: 'Iceland' },
	{ id: '77', name: 'India' },
	{ id: '78', name: 'Indonesia' },
	{ id: '79', name: 'Iran' },
	{ id: '80', name: 'Iraq' },
	{ id: '81', name: 'Ireland' },
	{ id: '82', name: 'Israel' },
	{ id: '83', name: 'Italy' },
	{ id: '84', name: 'Jamaica' },
	{ id: '85', name: 'Japan' },
	{ id: '86', name: 'Jordan' },
	{ id: '87', name: 'Kazakhstan' },
	{ id: '88', name: 'Kenya' },
	{ id: '89', name: 'Kiribati' },
	{ id: '90', name: 'Korea, North' },
	{ id: '91', name: 'Korea, South' },
	{ id: '92', name: 'Kosovo' },
	{ id: '93', name: 'Kuwait' },
	{ id: '94', name: 'Kyrgyzstan' },
	{ id: '95', name: 'Laos' },
	{ id: '96', name: 'Latvia' },
	{ id: '97', name: 'Lebanon' },
	{ id: '98', name: 'Lesotho' },
	{ id: '99', name: 'Liberia' },
	{ id: '100', name: 'Libya' },
	{ id: '101', name: 'Liechtenstein' },
	{ id: '102', name: 'Lithuania' },
	{ id: '103', name: 'Luxembourg' },
	{ id: '104', name: 'Madagascar' },
	{ id: '105', name: 'Malawi' },
	{ id: '106', name: 'Malaysia' },
	{ id: '107', name: 'Maldives' },
	{ id: '108', name: 'Mali' },
	{ id: '109', name: 'Malta' },
	{ id: '110', name: 'Marshall Islands' },
	{ id: '111', name: 'Mauritania' },
	{ id: '112', name: 'Mauritius' },
	{ id: '113', name: 'Mexico' },
	{ id: '114', name: 'Micronesia' },
	{ id: '115', name: 'Moldova' },
	{ id: '116', name: 'Monaco' },
	{ id: '117', name: 'Mongolia' },
	{ id: '118', name: 'Montenegro' },
	{ id: '119', name: 'Morocco' },
	{ id: '120', name: 'Mozambique' },
	{ id: '121', name: 'Myanmar (Burma)' },
	{ id: '122', name: 'Namibia' },
	{ id: '123', name: 'Nauru' },
	{ id: '124', name: 'Nepal' },
	{ id: '125', name: 'Netherlands' },
	{ id: '126', name: 'New Zealand' },
	{ id: '127', name: 'Nicaragua' },
	{ id: '128', name: 'Niger' },
	{ id: '129', name: 'Nigeria' },
	{ id: '130', name: 'North Macedonia' },
	{ id: '131', name: 'Norway' },
	{ id: '132', name: 'Oman' },
	{ id: '133', name: 'Pakistan' },
	{ id: '134', name: 'Palau' },
	{ id: '135', name: 'Panama' },
	{ id: '136', name: 'Papua New Guinea' },
	{ id: '137', name: 'Paraguay' },
	{ id: '138', name: 'Peru' },
	{ id: '139', name: 'Philippines' },
	{ id: '140', name: 'Pol' },
];
function Navigation() {
	const [isHover, setIsHover] = useState({});
	const [isShowPricesCountry, setIsShowPricesCountry] = useState(false);

	const handleMouseEnter = (item) => {
		setIsHover((prev) => ({ ...prev, [item.title]: true }));
	};

	const handleMouseLeave = (item) => {
		setIsHover((prev) => ({ ...prev, [item.title]: false }));
	};

	const handleShowDropdown = (e, item) => {
		setIsHover((prev) => ({ ...prev, [item.title]: !prev[item.title] }));
		e.preventDefault();
	};

	const handleShowPricesCountry = () => {
		setIsShowPricesCountry(!isShowPricesCountry);
	};

	const renderNavigationComponent = (title) => {
		switch (title) {
			// case 'Other Pages':
			// 	return <OrtherPageNavigation />;
			case 'Catalog':
				return <CatalogNavigation />;
			case 'Sale':
				return <SaleNagivation />;
			case 'Blog':
				return <BlogNavigation />;
			default:
				return null;
		}
	};

	return (
		<div className={cx('navigation-container')}>
			<ul className={cx('main-navigation')}>
				{NAVIGATION.map((navItem, index) => (
					<div
						className={cx('navigation-list-container')}
						key={`nav-${index}`}>
						<li
							className={cx('navigation-list')}
							onMouseEnter={() => handleMouseEnter(navItem)}
							onMouseLeave={() => handleMouseLeave(navItem)}
							onClick={(e) => handleShowDropdown(e, navItem)}>
							{navItem.to ? (
								<NavLink
									to={navItem.to}
									className={({ isActive }) =>
										cx('title', { 'title-active': isActive }, { 'title-hover': isHover[navItem.title] })
									}>
									{navItem.title}
								</NavLink>
							) : (
								<p className={cx('dropdown-item-name', { 'title-hover': isHover[navItem.title] })}>
									{navItem.title}
								</p>
							)}
							{isHover[navItem.title] ? navItem.iconUp : navItem.icon}
							{isHover[navItem.title] && isHover['Other Pages'] && <OrtherPageNavigation />}
						</li>
						<li
							onMouseEnter={() => handleMouseEnter(navItem)}
							onMouseLeave={() => handleMouseLeave(navItem)}>
							{isHover[navItem.title] && renderNavigationComponent(navItem.title)}
						</li>
					</div>
				))}
			</ul>
			<ul className={cx('main-navigation')}>
				<li className={cx('navigation-list')}>
					<p
						onClick={handleShowPricesCountry}
						className={cx('title')}>
						USD
					</p>
					$ <IoIosArrowDown />
					{isShowPricesCountry && (
						<div className={cx('prices-country')}>
							{DUMMY_TYPE_PRICES_COUNTRY.map((item) => (
								<p
									className={cx('prices-item')}
									key={item.id}>
									{item.name}
								</p>
							))}
						</div>
					)}
				</li>
			</ul>
		</div>
	);
}

export default Navigation;
