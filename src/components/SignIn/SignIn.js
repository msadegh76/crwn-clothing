import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./sign-in.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: "", password: "" });
	};
	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className="sign-in">
				<h2 className=""> I already have an account</h2>
				<h3 className="title"> Sign in with your email and password </h3>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						handleChange={this.handleChange}
						label={"email"}
						value={this.state.email}
						required
					/>
					<FormInput
						name="password"
						type="password"
						handleChange={this.handleChange}
						label={"password"}
						value={this.state.password}
						required
					/>
					<div className="buttons">
						<CustomButton type="submit"> SIGN IN</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							SIGN IN WITH GOOGLE
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}
export default SignIn;
