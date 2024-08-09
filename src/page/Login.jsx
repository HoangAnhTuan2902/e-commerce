// import '~/assets/scss/FaqPage/FaqPage.scss';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
function Login() {
	const items = [
		{
			key: '1',
			label: (
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.antgroup.com'>
					1st menu item
				</a>
			),
		},
		{
			key: '2',
			label: (
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.aliyun.com'>
					2nd menu item (disabled)
				</a>
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
				<a onClick={(e) => e.preventDefault()}>
					<Space>
						Hover me
						<DownOutlined />
					</Space>
				</a>
			</Dropdown>
		</div>
	);
}

export default Login;
