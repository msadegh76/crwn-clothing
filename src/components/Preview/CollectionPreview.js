import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionPreview = ({ otherProps: { items, routeName, title } }) => {
	return (
		<div className="collection-preview">
			<h1 className="title shop-title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => {
						return <CollectionItem key={item.id} {...item} />;
					})}
			</div>
		</div>
	);
};

export default CollectionPreview;
