import classNames from 'classnames/bind';
import styles from '~/assets/scss/styles.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function DynamicLink({ to, children, className }) {
	let Comp = 'p';
	const props = {};
	if (to) {
		Comp = Link;
		props.to = to;
	}
	return (
		<Comp
			className={cx({ [className]: className })}
			{...props}>
			{children}
		</Comp>
	);
}

export default DynamicLink;
