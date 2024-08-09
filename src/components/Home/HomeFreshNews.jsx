import classNames from 'classnames/bind';
import styles from '~/assets/scss/styles.module.scss';

import News1 from '~/assets/images/blog1.avif';
import News2 from '~/assets/images/blog2.avif';
import News3 from '~/assets/images/blog3.avif';
import User from '~/assets/images/user.png';

const cx = classNames.bind(styles);
function HomeFreshNews() {
	return (
		<div className={cx('fresh-news-container')}>
			<p className={cx('title')}>Fresh news from our blog</p>
			<div className={cx('fresh-news')}>
				<div className={cx('fresh-news-item')}>
					<div className={cx('news-image')}>
						<img
							src={News1}
							alt=''
						/>
					</div>
					<div className={cx('news-content')}>
						<div className={cx('title')}>
							<p>building</p>
							<p> | ladders</p>
							<p> | storage</p>
						</div>
						<p className={cx('topic')}>Must-Have Protective Gear</p>
						<div className={cx('blog-info')}>
							<div className={cx('user-icon')}>
								<img
									src={User}
									alt=''
								/>
							</div>
							<p>by</p>
							<p className={cx('author')}>David Braun</p>
							<p>Oct 08, 14</p>
						</div>
						<p className={cx('desc')}>
							Harum, at sequi impedit suscipit delectus excepturi sint Quaerat, facilis, deleniti, minima
							similique...
						</p>
					</div>
				</div>
				<div className={cx('fresh-news-item')}>
					<div className={cx('news-image')}>
						<img
							src={News2}
							alt=''
						/>
					</div>
					<div className={cx('news-content')}>
						<div className={cx('title')}>
							<p>building</p>
							<p> | hinges</p>
							<p> | storage</p>
						</div>
						<p className={cx('topic')}>Creative Flooring Solutions for Small Rooms</p>
						<div className={cx('blog-info')}>
							<div className={cx('user-icon')}>
								<img
									src={User}
									alt=''
								/>
							</div>
							<p>by</p>
							<p className={cx('author')}>David Braun</p>
							<p>Oct 08, 14</p>
						</div>
						<p className={cx('desc')}>
							Tempore, perspiciatis, modi, sed, qui fugiat vel ducimus dignissimos itaque accusantium
							voluptate consequuntur...
						</p>
					</div>
				</div>
				<div className={cx('fresh-news-item')}>
					<div className={cx('news-image')}>
						<img
							src={News3}
							alt=''
						/>
					</div>
					<div className={cx('news-content')}>
						<div className={cx('title')}>
							<p>building</p>
							<p> | ladders</p>
							<p> | storage</p>
						</div>
						<p className={cx('topic')}>Trends in Interior Design</p>
						<div className={cx('blog-info')}>
							<div className={cx('user-icon')}>
								<img
									src={User}
									alt=''
								/>
							</div>
							<p>by</p>
							<p className={cx('author')}>David Braun</p>
							<p>Oct 08, 14</p>
						</div>
						<p className={cx('desc')}>
							Provident vitae corrupti culpa ullam quis facere veritatis adipisci aliquid vero esse in...
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeFreshNews;
