import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/resolveAuthentication.css";
const logo = require("../../images/whitelogo.png");

const ResolveAuthentication = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			localStorage.getItem("token") ? navigate("/signup") : navigate("/signin");
		}, 3000);
	});

	return (
		// -- With moving background --
		// <main id="resolve-auth">
		// 	<div id="video-wrapper"></div>
		// 	<video autoPlay muted loop id="video-background">
		// 		<source src={videoBackground} type="video/mp4" />
		// 	</video>
		// </main>
		<main className="bg-gradient-to-r from-orange-300 via-purple-500 to-amber-300">
			<div className="flex h-screen">
				<img src={logo} alt="logo" className="w-80 m-auto self-auto animate__animated animate-bounce" />
			</div>
		</main>
	);
};

export default ResolveAuthentication;
