import { Link } from "react-router-dom";
import "../../styles/authentication.css";
import "../../fonts/material-icon/css/material-design-iconic-font.min.css";
import Forms from "../../components/Forms";
const signUpImage = require("../../images/signin-image.jpg");

const SignUp = (): JSX.Element => {
	return (
		<Forms>
			<div className="signup">
				<div className="container my-container">
					<div className="signup-content">
						<div className="signup-form">
							<h2 className="form-title">Sign up</h2>
							<form method="POST" className="register-form" id="register-form">
								<div className="form-group">
									<label htmlFor="centres">
										<i className="zmdi zmdi-pin-drop material-icons-name" />
									</label>
									<select>
										<option value="">Choose your centre</option>
										<option value="Greenwich">Greenwich</option>
										<option value="Woolwich">Woolwich</option>
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="first-name">
										<i className="zmdi zmdi-account material-icons-name" />
									</label>
									<input type="text" name="first-name" id="first-name" placeholder="Your First Name" />
								</div>
								<div className="form-group">
									<label htmlFor="surname">
										<i className="zmdi zmdi-account-o material-icons-name" />
									</label>
									<input type="text" name="surname" id="surname" placeholder="Your First Name" />
								</div>

								<div className="form-group">
									<label htmlFor="email">
										<i className="zmdi zmdi-email" />
									</label>
									<input type="email" name="email" id="email" placeholder="Your Email" />
								</div>
								<div className="form-group">
									<label htmlFor="password">
										<i className="zmdi zmdi-lock"></i>
									</label>
									<input type="password" name="password" id="pass" placeholder="Password" />
								</div>
								<div className="form-group">
									<label htmlFor="confirm-password">
										<i className="zmdi zmdi-lock-outline"></i>
									</label>
									<input type="password" name="confirm-password" id="re_pass" placeholder="Repeat your password" />
								</div>
								{/* <div className="form-group">
									<input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
									<label htmlFor="agree-term" className="label-agree-term">
										<span>
											<span></span>
										</span>
										I agree all statements in{" "}
										<a href="#" className="term-service">
											Terms of service
										</a>
									</label>
								</div> */}
								<div className="form-group form-button">
									<input
										type="submit"
										name="signup"
										id="signup"
										className="form-submit bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
										value="REGISTER"
									/>
								</div>
							</form>
						</div>
						<div className="signup-image">
							<figure>
								<img src={signUpImage} />
							</figure>
							<Link to="/" />
							<a href="/signin" className="signup-image-link underline underline-offset-4">
								I am already member
							</a>
						</div>
					</div>
				</div>
			</div>
		</Forms>
	);
};

export default SignUp;
