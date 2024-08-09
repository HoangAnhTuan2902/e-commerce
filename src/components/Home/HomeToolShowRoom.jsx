import { FaPlus } from 'react-icons/fa6';
import classNames from 'classnames/bind';
import styles from '../../assets/scss/styles.module.scss';
import ToolShowRoomImg from '~/assets/images/tool-show-room-img.webp';
import ItemShowRoomTool from './ItemShowRoomTool';

import ItemShowRoom1 from '~/assets/images/item-show-room-1.webp';
import ItemShowRoom2 from '~/assets/images/item-show-room-2.webp';
import ItemShowRoom3 from '~/assets/images/best_seller_6.1.png';
import ItemShowRoom4 from '~/assets/images/best_seller_5.1.png';
import { useState, useEffect } from 'react';

const LIST_TOOL_SHOW_ROOM = [
	{
		id: 1,
		image: ItemShowRoom1,
		name: 'Little Giant Ladder Systems 15109-001 300-Pound',
		price: 590,
		discountPrice: 564,
	},
	{
		id: 2,
		image: ItemShowRoom2,
		name: 'Louisville Ladder FS1506 300-Pound',
		price: 170,
		discountPrice: 134,
	},
	{
		id: 3,
		image: ItemShowRoom3,
		name: 'Hand Painted Ornate Crown Molding',
		price: 180,
		discountPrice: 164,
	},
	{
		id: 4,
		image: ItemShowRoom4,
		name: 'Earthwool Rafter Roll Insulation',
		price: 356,
		discountPrice: 0,
	},
];

const cx = classNames.bind(styles);

function HomeToolShowRoom() {
	const [isHover, setIsHover] = useState({});

	useEffect(() => {
		const handleClickOutside = () => setIsHover({});
		window.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	}, []);
	const handleHover = (id, hoverState) => {
		const timeoutHover = setTimeout(() => {
			setIsHover(() => ({
				[id]: hoverState,
			}));
		}, 200);

		return () => {
			clearTimeout(timeoutHover);
		};
	};

	return (
		<div className={cx('tool-show-room-container')}>
			<div className={cx('show-room-img')}>
				<img
					src={ToolShowRoomImg}
					alt=''
				/>
				{LIST_TOOL_SHOW_ROOM.map((item) => (
					<div key={item.id}>
						<button
							onClick={(e) => e.stopPropagation()}
							className={cx(`btn-${item.id}`)}
							onMouseEnter={() => handleHover(item.id, true)}>
							<FaPlus className={cx('icon', { 'hover-icon': isHover[item.id] })} />
						</button>
						<div className={cx(`item-${item.id}`, { [`item-${item.id}-hover`]: isHover[item.id] })}>
							{isHover[item.id] && (
								<ItemShowRoomTool
									image={item.image}
									name={item.name}
									price={item.price}
									discountPrice={item.discountPrice}
								/>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default HomeToolShowRoom;
