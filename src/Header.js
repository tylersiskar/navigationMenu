import { Fragment, useState } from 'react';
import styled from 'styled-components';
import { 
	MenuItem, 
	DropdownMenu, 
	HamburgerIcon, 
	CloseIcon, 
	SideNav 
}	from './components';

const HeaderComponent = styled.header`
	height: 62px;
	display: flex;
	position: relative;
	justify-content: space-around;
	background-color: darkgreen;
	border-top: 3px solid #EEB902;
	border-bottom: ${({ nav }) => !nav ? `3px solid #EEB902` : `1px solid #EEB902`};
	padding: 0 12px;
	@media  (max-width: 1024px) {
		justify-content: flex-end;
	}
`;

const MenuItemList = styled.ul`
	display: flex;
	width: 100%;
	justify-content: space-around;
	margin: 0;
	padding: 0;
	@media  (max-width: 1024px) {
		display: none;
	}

`;

const IconWrapper = styled.span`
	display: none;
	width: 50px;
	height: 100%;
	border-left: 1px solid black;
	padding-left: 12px;
	cursor: pointer;
	@media  (max-width: 1024px) {
		display: flex;
		align-items: center;
		justify-content: center;
	}

`;

const Header = props => {
	const { menuItems, mensSports, womensSports } = props;
	const [ item, hoverItem ] = useState(false);
	const [ sideNav, openSideNav ] = useState(false);
	const [ nav, viewNav ] = useState(false);
	
	function enterItem() {
		hoverItem(true);
		viewNav(true);
	}

	function leaveItem() {
		hoverItem(false);
	}

	function leaveNav() {
		if(item) {
			viewNav(true);
		} else {
			viewNav(false);
		}
	}

	function enterOther() {
		viewNav(false);
	}

	return (
		<Fragment>
			<HeaderComponent nav={nav}>
				<MenuItemList>
				{menuItems.map((item, index) => {
					const firstItem = index === 0;
					return (
						<MenuItem 
							active={firstItem && nav} 
							label={item} 
							onMouseOver={firstItem ? enterItem : enterOther} 
							onMouseLeave={firstItem && leaveItem }/>
						)
				})}
				</MenuItemList>
				<IconWrapper onClick={e => openSideNav(!sideNav)}> 
					{!sideNav && <HamburgerIcon /> }
					{sideNav && <CloseIcon /> }
				</IconWrapper>
			{sideNav && <SideNav mensSports={mensSports} womensSports={womensSports} menuItems={menuItems} />}
			</HeaderComponent>
			{nav && <DropdownMenu mensSports={mensSports} womensSports={womensSports} onMouseLeave={leaveNav}/>}
		</Fragment>
	)
};


export default Header;
