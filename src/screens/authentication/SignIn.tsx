import { Context as AuthContext } from "../../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/authentication.css";
import Forms from "../../components/Forms";
import { FormEvent, useCallback, useContext, useEffect, useState } from "react";
import api from "../../api";
import { AxiosResponse } from "axios";
const logo = require("../../images/signup-image.jpg");

const SignIn = (): JSX.Element => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const context = useContext(AuthContext);
	const navigate = useNavigate();

	const formSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const response: AxiosResponse = await api.post("/signin", { email, password });
			context?.signIn(response.data);
			navigate("/bacenta/home");
		} catch (error) {
			alert("Wrong password");
			context?.addError("Your username or password is incorrect");
		}
	};

	const localSignIn = useCallback(async () => {
		const token: string | null = localStorage.getItem("token");

		if (token) {
			try {
				const response: AxiosResponse = await api.get("/signedin");

				context?.localSignIn(response.data);
				navigate("/bacenta/home");
			} catch (error) {
				context?.addError("Error signing in, try again");
			}
		}
	}, [context, navigate]);

	useEffect(() => {
		localSignIn();
	}, [localSignIn]);

	return (
		<Forms>
			<section className="sign-in animate__animated animate__fadeIn">
				<div className="container">
					<div className="signin-content">
						<div className="signin-image">
							<figure>
								<img src={logo} alt="logo" />
							</figure>
							<Link to="/signup" className="signup-image-link underline underline-offset-4">
								Create an account
							</Link>
						</div>

						<div className="signin-form">
							<h2 className="form-title">Sign in</h2>

							<form className="register-form" id="login-form" onSubmit={formSubmit}>
								<div className="form-group">
									<label htmlFor="email">
										<i className="zmdi zmdi-email" />
									</label>
									<input
										type="email"
										name="email"
										id="email"
										placeholder="Your Email"
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="your_pass">
										<i className="zmdi zmdi-lock"></i>
									</label>
									<input
										type="password"
										name="your_pass"
										id="your_pass"
										placeholder="Your Password"
										value={password}
										onChange={e => setPassword(e.target.value)}
									/>
								</div>

								<div className="form-group">
									{/* <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" /> */}
									<label htmlFor="remember-me" className="label-agree-term">
										<span>
											<span></span>
										</span>
										{context?.state.errorMessage}
									</label>
								</div>

								<div className="form-group form-button">
									<input
										type="submit"
										name="signin"
										id="signin"
										value="Log in"
										className="form-submit bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</Forms>
	);
};

export default SignIn;
