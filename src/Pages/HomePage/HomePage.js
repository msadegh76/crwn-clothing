import React from "react";
import MenuItem from "../../components/menu-item/MenuItem";
import "./HomePage.scss";

const HomePage = () => {
	return (
		<>
			<div className="homepage">
				<div className="directory-menu">
					<MenuItem />
				</div>
			</div>
		</>
	);
};

export default HomePage;
