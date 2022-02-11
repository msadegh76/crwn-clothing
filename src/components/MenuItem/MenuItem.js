import React from "react";
import "./menu-item.scss";

const MenuItem = ({ sections: { title, imageUrl, size } }) => {
	return (
		<>
			<div className={`${size} menu-item`}>
				<div
					className="background-img"
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				/>
				<div className="content">
					<h1 className="title">{title.toUpperCase()}</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>
		</>
	);
};

export default MenuItem;