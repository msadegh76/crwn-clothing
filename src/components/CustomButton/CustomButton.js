import React from "react";
import "./custom-button.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherprops }) => (
	<button
		className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
		{...otherprops}
	>
		{children}
	</button>
);
CustomButton.defaultProps = {
	isGoogleSignIn: false,
};

export default CustomButton;
