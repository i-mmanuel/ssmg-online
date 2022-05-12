import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./screens/authentication/SignIn";
import SignUp from "./screens/authentication/SignUp";

const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
