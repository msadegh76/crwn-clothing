import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Route, Routes, useParams, useLocation, Link } from "react-router-dom";
import HatsPage from "./Pages/HatsPage/HatsPage";
function App() {
	////////////////////////////TEMP
	const HatsDetail = (props) => {
		const params = useParams();
		const url = useLocation();

		console.log("THIS IS ", params.hatId, url);
		return (
			<>
				<Link to={`/hats/12`}>link1</Link>
				<Link to={`/hats/113`}>link2</Link>
			</>
		);
	};
	/////////////////////////////////
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/hats" element={<HatsPage />} />
				<Route path="/hats/:hatId" element={<HatsDetail />} />
			</Routes>
		</div>
	);
}

export default App;
