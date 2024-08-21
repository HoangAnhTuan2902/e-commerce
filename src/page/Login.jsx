// import '~/assets/scss/FaqPage/FaqPage.scss';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
function Login() {
	const items = [
		{
			key: '1',
			label: (
				<span
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.antgroup.com'>
					1st menu item
				</span>
			),
		},
		{
			key: '2',
			label: (
				<span
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.aliyun.com'>
					2nd menu item (disabled)
				</span>
			),
			icon: <SmileOutlined />,
			disabled: true,
		},
	];
	return (
		<div className='main-dropdown'>
			<Dropdown
				menu={{
					items,
				}}>
				<span onClick={(e) => e.preventDefault()}>
					<Space>
						Hover me
						<DownOutlined />
					</Space>
				</span>
			</Dropdown>
		</div>
	);
}

export default Login;
