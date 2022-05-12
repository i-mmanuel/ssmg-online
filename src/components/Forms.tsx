import "../styles/authentication.css";
import "../fonts/material-icon/css/material-design-iconic-font.min.css";
import "animate.css";
import { ReactNode } from "react";
const logo = require("../images/whitelogo.png");

interface formsProps {
	children: ReactNode;
}

const Forms = (props: formsProps): JSX.Element => {
	return (
		<main className="main bg-gradient-to-r from-orange-300 via-purple-500 to-amber-300">
			<section className="signup my-50">
				<div className="flex justify-center">
					<img src={logo} alt="logo" className="w-80 self-auto animate__animated animate__rubberBand" />
				</div>
				{props.children}
			</section>
		</main>
	);
};

export default Forms;
