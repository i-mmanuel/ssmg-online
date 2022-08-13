import { createContext, useReducer } from "react";

interface contextProps {
	localSignIn(user: object): void;
	signIn(p: object): void;
	state: {
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
		errorMessage: string;
	};
	signOut(): void;
	addError(message: String): void;
}

const createDataContext = (reducer: any, actions: any, defaultValue: object) => {
	const Context = createContext<contextProps | null>(null);

	const Provider = ({ children }: any) => {
		const [state, dispatch] = useReducer(reducer, defaultValue);

		const boundActions: any = {};

		for (let key in actions) {
			boundActions[key] = actions[key](dispatch);
		}

		return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
	};

	return { Context, Provider };
};

export default createDataContext;
