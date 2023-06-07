import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
position: flex;
top: 150px;
height: 60px;
display: flex;
justify-content: space-between;
`;

export const NavLink = styled(Link)`
color: black;
display: flex;
height: 50%;
align-items: center;
text-decoration: none;
text-align: center;
padding: 10px;
cursor: pointer;
font-size: 32px;
font-weight: bold;
margin: 2px 0px 0px 2px;
&:hover {
	transition: all 0.2s ease-in-out;
	background-color:grey;
	color: white;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
@media screen and (max-width: 768px) {
	display: none;
}
`;

