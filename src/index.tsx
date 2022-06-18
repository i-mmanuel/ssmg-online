import "animate.css";
import { Provider as AuthProvider } from "./contexts/authContext";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<AuthProvider>
		<App />
	</AuthProvider>
);
