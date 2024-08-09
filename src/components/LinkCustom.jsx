import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

/* eslint-disable react/prop-types */
import styles from '../assets/scss/styles.module.scss';

const cx = classNames.bind(styles);

const LinkCustom = ({ to, children, className }) => {
	if (to) {
		return (
			<NavLink
				className={className}
				to={to}>
				{children}
			</NavLink>
		);
	} else {
		return <p className={cx('dropdown-item-name')}>{children}</p>;
	}
};

export default LinkCustom;
