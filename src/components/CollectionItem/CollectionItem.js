import React from "react";
import "./collection-item.scss";

const CollectionItem = (props) => {
	const { id, name, price, imageUrl } = props;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			></div>
			<div className="image-footer">
				<div className="name-footer title">{name} </div>
				<div className="price-footer title">${price} </div>
			</div>
		</div>
	);
};
export default CollectionItem;
