import React from "react";
import Directory from "../../components/Directory/Directory";
import "./HomePage.scss";

const HomePage = (props) => {
	console.log("THIS IS PRops", props);
	return (
		<>
			<div className="homepage">
				<Directory />
			</div>
		</>
	);
};

export default HomePage;
