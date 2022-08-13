import { Context as AuthContext } from "../../contexts/authContext";
import { useContext, useEffect } from "react";
import "../../styles/resolveAuthentication.css";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import api from "../../api";
const logo = require("../../images/whitelogo.png");

const ResolveAuthentication = (): JSX.Element => {
	const navigate = useNavigate();
	const context = useContext(AuthContext);
	const token: string | null = localStorage.getItem("token");

	const localSignIn = () => {
		setTimeout(async () => {
			if (token) {
				try {
					const response: AxiosResponse = await api.get("/signedin");

					context?.localSignIn(response.data);
					navigate("/bacenta/home");
				} catch (error) {
					context?.addError("Error signing in, try again");
					alert("Problems");
				}
			} else {
				navigate("/signin");
			}
		}, 1500);
	};

	useEffect(() => {
		localSignIn();
	}, [localSignIn]);

	return (
		<main className="bg-gradient-to-r from-orange-300 via-purple-500 to-amber-300">
			<div className="flex h-screen">
				<img src={logo} alt="logo" className="w-80 m-auto self-auto animate__animated animate-bounce" />
			</div>
		</main>
	);
};

export default ResolveAuthentication;
