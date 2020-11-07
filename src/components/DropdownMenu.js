import styled from 'styled-components';
import DropdownList from './DropdownList';

const DropdownMenuComponent = styled.span`
	display: flex;
	width: 100%;
	background-color: #E8E8E8;
	z-index: 999;
	height: 100%:
	align-items: center;
	padding: 32px 0;
`;

const LeftMenu = styled.span`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	width: 50%;
	padding: 16px;
`;


const DropdownMenu = props => {
	const { mensSports, womensSports } = props;
	return (
		<DropdownMenuComponent {...props}>
			<LeftMenu>
				<DropdownList title="Men's Sports" items={mensSports} />
			</LeftMenu>
			<LeftMenu>
				<DropdownList title="Women's Sports" items={womensSports} />
			</LeftMenu>
		</DropdownMenuComponent>
	)
};

export default DropdownMenu;
