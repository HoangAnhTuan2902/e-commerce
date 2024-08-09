import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useState } from 'react';

/* eslint-disable react/prop-types */
import styles from '../../../assets/scss/styles.module.scss';
import LinkCustom from '../../../components/LinkCustom';
const cx = classNames.bind(styles);

const DROP_DOWN_ITEMS = [
	{
		id: 1,
		title: 'Collections list',
		to: '/collections',
	},
	{
		title: 'FAQ',
		to: '/faq',
	},
	{
		title: 'Delivery Information',
		to: '/delivery-information',
	},
	{
		id: 2,
		title: 'About Us',
		to: '/about-us',
	},
	{
		title: 'Contact Us',
		to: '/contact-us',
	},
	{
		title: 'All Sections',
		to: '/all-sections',
	},
];
function OrtherPageNavigation() {
	const [activeDropdownId, setActiveDropdownId] = useState(null);

	const handleSubDropdown = (item) => {
		setActiveDropdownId(activeDropdownId === item.id ? null : item.id);
	};

	const handleSubItemClick = (e) => {
		e.stopPropagation();
	};

	return (
		<>
			<ul className={cx('dropdown-menu')}>
				{DROP_DOWN_ITEMS.map((item, index) => (
					<li
						key={`item-${index}`}
						className={cx('dropdown-item')}
						onClick={(e) => {
							handleSubDropdown(item);
							item.subDropDown ? handleSubItemClick(e) : null;
						}}>
						<LinkCustom
							to={item.to}
							className={({ isActive }) =>
								cx('dropdown-title', {
									'title-hover': activeDropdownId === item.id,
									hover: activeDropdownId === item.id,
									'title-active': isActive,
								})
							}>
							{item.title}
						</LinkCustom>
						<div className={cx('dropdown-icon')}>
							{activeDropdownId === item.id ? item.iconUp : item.icon}
						</div>
						{activeDropdownId === item.id && item.subDropDown && (
							<ul className={cx('sub-dropdown')}>
								{item.subDropDown.map((subItem, subIndex) => (
									<li
										key={`subItem-${subIndex}`}
										className={cx('sub-dropdown-item')}>
										<NavLink
											to={subItem.to}
											className={({ isActive }) => cx('sub-item-name', { 'title-active': isActive })}>
											{subItem.name}
										</NavLink>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</>
	);
}

export default OrtherPageNavigation;
