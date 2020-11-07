import styled from 'styled-components';

const DropdownListComponent = styled.span`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	background: ${({ sideNav }) => sideNav ? '#264027' : 'transparent'};
`;

const TitleWrapper = styled.span`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	color: darkgreen;
	font-size: 24px;
	font-weight: 700;
	text-transform: uppercase;
	width: 100%;
	border-bottom: 1px solid lightgray;
	padding: 8px 0px;
	 ${({ sideNav }) => sideNav && `
		color: #EEB902;
		font-style: italic;
		padding-left: 12px;
	`};
`;

const ListWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 0;
	margin: 0;
	width: 100%;

`;

const ItemWrapper = styled.li`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	color: gray;
	font-size: 16px;
	font-weight: 700;
	border-bottom: 1px solid lightgray;
	text-transform: uppercase;
	width: 100%;
	padding: 8px 0px;
	 ${({ sideNav }) => sideNav && `
		padding-left: 12px;
		text-transform: none;
		font-weight: 400;
		color: white;
	`};
`;

const DropdownList = props => {
	const { title, items, sideNav } = props;
	return (
		<DropdownListComponent {...props} sideNav={sideNav}>
			<TitleWrapper sideNav={sideNav}> {title} </TitleWrapper>
			<ListWrapper>
			{items && items.map(item => {
				return <ItemWrapper sideNav={sideNav}> {item} </ItemWrapper>
			})}
			</ListWrapper>
		</DropdownListComponent>
	)
};


export default DropdownList;
