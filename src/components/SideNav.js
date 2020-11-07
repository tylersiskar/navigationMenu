import styled from 'styled-components';
import { Component, Fragment } from 'react';
import DropdownList from './DropdownList';

const SideNavWrapper = styled.span`
	display: flex;
	position: absolute;
	flex-direction: column;
	height: 100vh;
	background-color: darkgreen;
	min-width: 320px;
	top: ${({ mounted }) => mounted ? 65 : 0}px;
	opacity: ${({ mounted }) => mounted ? 1 : 0};
	transition: all 0.35s ease;
	right: 0;
	@media (min-width: 1024px) {
		display: none;
	}
`;

const NavItem = styled.span`
	width: 100%;
	display: flex;
	align-items: center;
	height: 44px;
	font-size: 24px;
	border-bottom: 1px solid black;
	color: white;
	font-family: Roboto;
	text-transform: uppercase;
	cursor: pointer;
	padding-left: 16px;
	box-sizing: border-box;
	justify-content: space-between;
`;

const Caret = styled.span`
	display: block;
	height: 6px;
	width: 6px;
	border-bottom: 2px solid white;
	border-right: 2px solid white;
	transform: ${({ open }) => open ? `rotate(225deg)` : `rotate(45deg)`};
	transition: transform 0.35s ease;
	margin-right: 16px;
`;

class SideNav extends Component {
	state = {
		mounted: false
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ mounted : true });
		}, 10);
	}

	componentWillUnmount() {
		this.setState({ mounted : false });
	}

	_renderDropdown = (mens, womens) => {
		return (
			<Fragment>
				<DropdownList sideNav title="Men's Sports" items={mens} />
				<DropdownList sideNav title="Women's Sports" items={womens} />
			</Fragment>)
	}

	_onClick = () => {
		this.setState({ viewMenu: !this.state.viewMenu})
	}
	
	render () {
		const { menuItems, mensSports, womensSports } = this.props;
		const { viewMenu } = this.state;

		return (
			<SideNavWrapper mounted={this.state.mounted}>
				<NavItem onClick={this._onClick}>  {menuItems[0]} <Caret open={viewMenu}/> </NavItem>
				{viewMenu && this._renderDropdown(mensSports, womensSports)}
				<NavItem> {menuItems[1]}</NavItem>
				<NavItem> {menuItems[2]}</NavItem>
				<NavItem> {menuItems[3]}</NavItem>
				<NavItem> {menuItems[4]}</NavItem>
			</SideNavWrapper>
		)
	}
}

export default SideNav;