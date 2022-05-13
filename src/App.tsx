import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResolveAuthentication from "./screens/authentication/ResolveAuthentication";
import SignIn from "./screens/authentication/SignIn";
import SignUp from "./screens/authentication/SignUp";
import BacentaHome from "./screens/bacenta/Home";

const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ResolveAuthentication />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/bacenta/home" element={<BacentaHome />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
