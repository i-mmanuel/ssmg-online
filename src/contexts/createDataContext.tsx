import { createContext, useReducer } from "react";

interface contextProps {
	localSignIn(): any;
	signIn(p: object): void;
	state: {
		token: string;
	};
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
