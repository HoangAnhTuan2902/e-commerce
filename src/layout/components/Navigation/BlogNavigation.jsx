import classNames from 'classnames/bind';

import styles from '../../../assets/scss/styles.module.scss';
import Blog1 from '../../../assets/images/blog1.avif';
import Blog2 from '../../../assets/images/blog2.avif';
import Blog3 from '../../../assets/images/blog3.avif';
import User from '../../../assets/images/user.png';
import { useState } from 'react';

const BLOGS = [
	{
		id: 1,
		title: 'Trends in Interior Design',
		image: Blog1,
		author: 'David Braun',
		time: 'Oct 08, 14',
	},
	{
		id: 2,
		title: 'Must-Have Protective Gear',
		image: Blog2,
		author: 'David Braun',
		time: 'Oct 08, 14',
	},
	{
		id: 3,
		title: 'Creative Flooring Solutions for Small Rooms',
		image: Blog3,
		author: 'David Braun',
		time: 'Oct 08, 14',
	},
];

const cx = classNames.bind(styles);
function BlogNavigation() {
	const [isHover, setIsHover] = useState({});

	const handleMouseEnter = (item) => {
		setIsHover((prev) => ({
			...prev,
			[item.id]: true,
		}));
	};

	const handleMouseLeave = (item) => {
		setIsHover((prev) => ({
			...prev,
			[item.id]: false,
		}));
	};

	return (
		<div className={cx('blog-nav-container')}>
			<ul className={cx('blog-wrapper')}>
				{BLOGS.map((blog, index) => (
					<li
						onMouseEnter={() => handleMouseEnter(blog)}
						onMouseLeave={() => handleMouseLeave(blog)}
						key={`blog-${index}`}
						className={cx('blog-item')}>
						<div className={cx('blog-image')}>
							<img
								className={cx({ scale: isHover[blog.id] })}
								src={blog.image}
								alt={blog.image}
							/>
						</div>
						<div className={cx('blog-content')}>
							<p className={cx('blog-title', { 'under-line': isHover[blog.id] })}>{blog.title}</p>
							<div className={cx('blog-info')}>
								<div className={cx('user-icon')}>
									<img
										src={User}
										alt=''
									/>
								</div>
								<p>by</p>
								<p className={cx('author')}>{blog.author}</p>
								<p>{blog.time}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default BlogNavigation;
