import React from "react";
import SHOP_DATA from "./ShopData";
import CollectionPreview from "../../components/Preview/CollectionPreview";

class ShopPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		return (
			<div className="shop-page">
				{this.state.collections.map((item) => {
					return <CollectionPreview key={item.id} otherProps={item} />;
				})}
			</div>
		);
	}
}

export default ShopPage;
