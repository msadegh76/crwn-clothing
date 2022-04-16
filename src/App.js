import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Route, Routes, useParams, useLocation, Link } from "react-router-dom";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./components/Header/Header.js";
import SignInSignUp from "./Pages/SignInSignUp/SignInSignUp";
import { auth } from "./firebase/firebase.utils";
import React from "react";
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}
	unsubscribeFromAuth = null;
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
			console.log(user);
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route exact path="/shop" element={<ShopPage />} />
					{/* <Route path="/hats/:hatId" element={<HatsDetail />} /> */}
					<Route path="/signin" element={<SignInSignUp />} />
				</Routes>
			</div>
		);
	}
}
export default App;
