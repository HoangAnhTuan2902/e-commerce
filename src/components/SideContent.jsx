import classNames from 'classnames/bind';
import styles from '~/assets/scss/component/SideContent.module.scss';
import { TfiClose } from 'react-icons/tfi';

const cx = classNames.bind(styles);

function SideContent({ className, title, content, sideContentIn, onClick }) {
	const classes = cx(className);

	return (
		<div
			style={{ right: sideContentIn ? '0' : '-100%' }}
			className={cx('side-content')}>
			<span>
				<p className={cx('side-title')}>{title}</p>
				{Array.isArray(content) ? (
					<ul>
						{content.map((item, index) => (
							<li
								key={index}
								className={classes}>
								{item}
							</li>
						))}
					</ul>
				) : (
					<p>{content}</p>
				)}
			</span>

			<TfiClose
				onClick={onClick}
				className={cx('close-icon')}
			/>
		</div>
	);
}

export default SideContent;
