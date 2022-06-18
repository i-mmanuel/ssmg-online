import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context as AuthContext } from "../../contexts/authContext";

const BacentaHome = (): JSX.Element => {
	const context = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSignOut = () => {
		context?.signOut();
		navigate("/signin");
	};

	return (
		<div>
			<h1>Bacenta Home here</h1>{" "}
			<button
				value="Log out"
				onClick={handleSignOut}
				className="form-submit bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
			>
				Sign out
			</button>
		</div>
	);
};

export default BacentaHome;
