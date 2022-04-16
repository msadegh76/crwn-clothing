import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link to="/shop" className=" title option">
					SHOP
				</Link>
				<Link to="/shop" className="title option">
					CONTACTS
				</Link>
				{currentUser ? (
					<div className="title option" onClick={() => auth.signOut()}>
						SIGN OUT{" "}
					</div>
				) : (
					<Link to="/signin" className="title option">
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};
export default Header;
