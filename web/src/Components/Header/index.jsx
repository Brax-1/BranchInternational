import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
	const [openMobileNavigation, setOpenMobileNavigation] = useState(false);
	return (
		<nav className={`${openMobileNavigation ? "nav_open_mobile" : ""}`}>
			<div className="logo">Branch <span>International</span></div>
			<label
				onClick={() => setOpenMobileNavigation(!openMobileNavigation)}
				className={`menu_btn`}
			>
				<MenuIcon />
			</label>
			<ul>
				<li>
					<NavLink exact to="/allqueries" className="header_iconbox">
						Queries
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/signin" className="header_iconbox">
						SignIn
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/signup" className="header_iconbox">
						SignUp
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
