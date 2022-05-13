import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import api from "../api";
import createDataContext from "./createDataContext";
import { SIGN_IN } from "./types";

interface actionProps {
	type: string;
	payload: string | object;
}

interface signinProps {
	email: string;
	password: string;
}

const authReducer = (state: {}, action: actionProps): object => {
	switch (action.type) {
		case SIGN_IN:
			return { token: action.payload };
		default:
			return state;
	}
};

const localSignIn = (dispatch: any) => () => {
	const navigate = useNavigate();
	const token: string | null = localStorage.getItem("token");

	if (token) {
		dispatch({ type: SIGN_IN, payload: token });
		navigate("/bacenta/home");
	} else {
		navigate("/signin");
	}
};

const signIn =
	(dispatch: any) =>
	async ({ email, password }: signinProps) => {
		try {
			const response: AxiosResponse = await api.post("/signin", { email, password });

			localStorage.setItem("token", response.data.token);
			dispatch({ type: SIGN_IN, payload: response.data.token });
			console.log(response.data);
		} catch (error) {
			dispatch({ type: "add_error", payload: "Something went wrong with signing in" });
		}
	};

const signOut = (dispatch: any) => async () => {
	await localStorage.removeItem("token");
	dispatch({ type: "signout" });
};

// const clearErrorMessage = dispatch => () => {
// 	dispatch({ type: "clear_error_message" });
// };

// const signup =
// 	dispatch =>
// 	async ({ email, password }) => {
// 		try {
// 			const response = await tracker.post("signup", { email, password });
// 			await AsyncStorage.setItem("token", response.data.token);
// 			dispatch({ type: "signin", payload: response.data.token });

// 			navigate("TrackList");
// 		} catch (error) {
// 			dispatch({
// 				type: "add_error",
// 				payload: "Something went wrong with sign up",
// 			});
// 		}
// 	};

export const { Provider, Context } = createDataContext(authReducer, { signIn, localSignIn, signOut }, {});
