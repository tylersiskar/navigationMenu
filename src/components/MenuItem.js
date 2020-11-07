import styled from 'styled-components';

const MenuItemComponent = styled.li`
	display: flex;
	align-items: center;
	text-decoration: none;
	font-family: Roboto, sans-serif;
	text-transform: uppercase;
	color: white;
	height: 100%;
	width: 100%;
	justify-content: center;
	font-size: 24px;
	background-color: ${({ active }) => active && '#EEB902'};
	color: ${({ active }) => active && 'darkgreen'};
	&:hover {
		cursor: pointer;
		background-color: #EEB902;
		color: darkgreen;
	}
`;

const MenuItem = props => {
	const { label } = props;
	return (
		<MenuItemComponent active={props.active} {...props}>
		{label}
		</MenuItemComponent>
	)
};


export default MenuItem;
