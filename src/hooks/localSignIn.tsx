import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LocalSignIn = async (route: string) => {
	const navigate = useNavigate();
	const token: string | null = localStorage.getItem("token");

	useEffect(() => {
		if (!token) {
			try {
				navigate("/signin");
			} catch (error) {
				alert("Problems");
			}
		} else {
			navigate(route);
		}
	}, []);
};
