import createDataContext from "./createDataContext";
import { ERROR, SIGN_IN, SIGN_OUT } from "./types";

interface payloadProps {
	user: {
		email_confirmed: boolean;
		account_created: Date;
		email: string;
		password: string;
		first_name: string;
		last_name: string;
		phone_number: string;
		__v: number;
		date_of_birth: string;
		center: string;
		profile_image: string;
		notification_token: string;
		membership_type: string;
	};
	token: string;
}

interface actionProps {
	type: string;
	payload: {
		email_confirmed: boolean;
		account_created: Date;
		email: string;
		password: string;
		first_name: string;
		last_name: string;
		phone_number: string;
		__v: number;
		date_of_birth: string;
		center: string;
		profile_image: string;
		notification_token: string;
		membership_type: string;
	};
}

const authReducer = (state: {}, { payload, type }: actionProps): object => {
	switch (type) {
		case SIGN_IN:
			return { errorMessage: "", user: payload };
		case ERROR:
			return { ...state, errorMessage: payload };
		case SIGN_OUT:
			return { errorMessage: "" };
		default:
			return state;
	}
};

const localSignIn = (dispatch: any) => async (response: object) => dispatch({ type: SIGN_IN, payload: response });

const signOut = (dispatch: any) => () => {
	localStorage.removeItem("token");

	dispatch({ type: SIGN_OUT, payload: null });
};

const signIn = (dispatch: any) => (response: payloadProps) => {
	const token: string = response.token;
	localStorage.setItem("token", token);

	dispatch({ type: SIGN_IN, payload: response.user });
};

// const clearErrorMessage = dispatch => () => {
// 	dispatch({ type: "clear_error_message" });
// };

const addError = (dispatch: any) => (error: string) => {
	dispatch({ type: ERROR, payload: error });
};

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

export const { Provider, Context } = createDataContext(authReducer, { signIn, addError, signOut, localSignIn }, {});
