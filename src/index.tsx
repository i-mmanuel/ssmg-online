import "animate.css";
import { Provider as AuthProvider } from "./contexts/authContext";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// interface AppContextInterface {
// 	user: {
// 		id: number;
// 		first_name: string;
// 		last_name: string;
// 		location: string;
// 		token: string;
// 	} | null;
// }

// export const AppContext = createContext<AppContextInterface | null>(null);

// const defaultAppContext: AppContextInterface = {
// 	user: {
// 		id: 0,
// 		first_name: "Admin",
// 		last_name: "Real",
// 		location: "nowhere",
// 		token:
// 			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDc2OGQ2ZDRlODc0OTAwMTVmODAzYWYiLCJpYXQiOjE2NTIwMjU1MTh9.zl988K-A7YeaY27EMR61U3_dJk3074l0gJnmyLH5m4g",
// 	},
// };

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	// <AppContext.Provider value={defaultAppContext}>
	<AuthProvider>
		<App />
	</AuthProvider>
	// </AppContext.Provider>
);
