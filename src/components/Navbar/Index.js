import React, { useState } from 'react';
import {
Nav,
NavLink,
NavMenu
} from './NavbarElements';
import Dropdown from './Dropdown';


 
function Navbar() {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(true);
		} else {
			setDropdown(true);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};

return (
	<>
	<Nav>
		<NavMenu>
		<NavLink class = "nav-links" to='/' activeStyle>
			Home
		</NavLink>
		<NavLink class = "nav-links" to='/about' activeStyle>
			About
		</NavLink>
		<NavLink class = "nav-links" onClick={handleClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} to='/projects' activeStyle>
			Projects
			{dropdown && <Dropdown />}
		</NavLink>
		<NavLink class = "nav-links" to='/contact' activeStyle>
			Contact
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
