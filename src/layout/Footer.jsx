import classNames from 'classnames/bind';
import styles from '~/assets/scss/styles.module.scss';
import { LuPhone } from 'react-icons/lu';
import { IoMailOutline } from 'react-icons/io5';
import { GoClock } from 'react-icons/go';
import { FaSquareFacebook, FaInstagram, FaYoutube, FaPinterest, FaTiktok } from 'react-icons/fa6';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);
function Footer() {
	const [isFocus, setIsFocus] = useState(false);

	const handleFocus = () => {
		setIsFocus(true);
	};
	const handleBlur = () => {
		setIsFocus(false);
	};

	return (
		<div className={cx('footer-container')}>
			<div className={cx('contact-form')}>
				<p className={cx('title')}>Be in touch with us:</p>
				<form>
					<input
						onBlur={handleBlur}
						onFocus={handleFocus}
						className={cx('input')}
						type='email'
					/>
					<label className={cx('label', { 'focus-input': isFocus })}>Email</label>
					<button className={cx('submit-btn')}>
						<IoMailOutline className={cx('icon-letter')} />
					</button>
				</form>
				<div className={cx('link-profiles')}>
					<FaSquareFacebook className={cx('icon')} />
					<FaInstagram className={cx('icon')} />
					<FaYoutube className={cx('icon')} />
					<FaTiktok className={cx('icon')} />
					<FaPinterest className={cx('icon')} />
				</div>
			</div>
			<div className={cx('about-container')}>
				<ul className={cx('about-item', 'information')}>
					<p className={cx('title')}>Information</p>
					<li>
						<NavLink
							className={({ isActive }) => cx({ active: isActive })}
							to='/'>
							Home
						</NavLink>
					</li>
					<li>Products</li>
					<li>Blog</li>
					<li>About Us</li>
					<li>Contact us</li>
				</ul>
				<ul className={cx('about-item', 'my-account')}>
					<p className={cx('title')}>My Account</p>
					<li>My account</li>
					<li>Log in</li>
					<li>My addresses</li>
					<li>My cart</li>
				</ul>
				<ul className={cx('about-item', 'about')}>
					<p className={cx('title')}>About</p>
					<p className={cx('desc')}>
						Share contact information, store details, and brand content with your customers.
					</p>
				</ul>
				<ul className={cx('about-item', 'contacts')}>
					<p className={cx('title')}>Contacts</p>
					<li>
						<GoClock className={cx('contact-icon')} />
						<p className={cx('desc')}> We offer 24/7 customer service</p>
					</li>
					<li>
						<LuPhone className={cx('contact-icon')} />
						<p> Call Us:800-123-4567</p>
					</li>
					<li>
						<IoMailOutline className={cx('contact-icon')} />
						<p> Send us an email</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Footer;
