import { AxiosResponse } from "axios";
import { Modal } from "flowbite-react";
import { ReactNode, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import { Context as AuthContext } from "../contexts/authContext";
import SubmitModal from "./SubmitModal";
const logo = require("../images/whitelogo.png");

interface PageProps {
	children: ReactNode;
	dataURL?: string;
}

const Pages = (props: PageProps): JSX.Element => {
	const context = useContext(AuthContext);
	const navigate = useNavigate();
	const [showMenu, setShowMenu] = useState(false);
	const [showButtons, setShowButtons] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleSignOut = () => {
		context?.signOut();
		navigate("/signin");
	};

	const handleDataSubmission = (data: {}) => {
		const url = `/api/${context?.state.user?.center}/attendance/new`;
		const response = api.post(url, data);
	};

	const fetchData = async () => {
		try {
			const response: AxiosResponse = await api.get("/api/user/profile/image");
			context?.localSignIn(response.data);
		} catch (error) {
			console.log("Pages.tsx, fetching profile image", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<main>
			<header className="w-full py-5 px-5  overflow-auto bg-gradient-to-r from-orange-300 via-red-300 to-amber-300 backdrop-blur-lg ">
				{/* <img src={logo} alt="logo" className="w-20 float-left self-auto animate__animated animate__rubberBand" /> */}
				<div className=" flex flex-wrap justify-between items-center mx-auto">
					<span className="flex items-center">
						<img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
						<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SSMG</span>
					</span>

					<div className="flex items-center md:order-2">
						<button
							type="button"
							className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
							id="user-menu-button"
							aria-expanded="false"
							data-dropdown-toggle="dropdown"
						>
							<span className="sr-only">Open user menu</span>
							<img
								onClick={() => {
									setShowMenu(!showMenu);
									setShowButtons(false);
								}}
								className="w-8 h-8 rounded-full"
								src={context?.state.user?.profile_image}
								alt="user photo"
							/>
						</button>

						<button
							data-collapse-toggle="mobile-menu-2"
							type="button"
							className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="mobile-menu-2"
							aria-expanded="false"
							onClick={() => {
								setShowButtons(!showButtons);
								setShowMenu(false);
							}}
						>
							<span className="sr-only">Open main menu</span>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								></path>
							</svg>
							<svg
								className="hidden w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
					</div>

					<div
						className={`${
							showButtons ? "" : "hidden"
						} justify-between items-center w-full md:flex md:w-auto md:order-1`}
						id="mobile-menu-2"
					>
						<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
							<li>
								<a
									href="/bacenta/home"
									className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
									aria-current="page"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#"
									onClick={event => {
										event.preventDefault();
										setShowModal(true);
									}}
									className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									Submit Data
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									Trends
								</a>
							</li>
							{/* <li>
								<a
									href="#"
									className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									Contact
								</a>
							</li> */}
						</ul>
					</div>
				</div>

				{/* Dropdown menu */}
				<div
					className={`${
						showMenu ? "" : "hidden"
					} z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
					id="dropdown"
				>
					<div className="py-3 px-4">
						<span className="block text-sm text-gray-900 dark:text-white">
							{context?.state.user?.first_name} {context?.state.user?.last_name}
						</span>
						<span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
							{context?.state.user?.email}
						</span>
					</div>
					<ul className="py-1" aria-labelledby="dropdown">
						<li>
							<a
								href="#"
								className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
							>
								Dashboard
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
							>
								Settings
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
							>
								Earnings
							</a>
						</li>
						<li>
							<a
								onClick={event => {
									event.preventDefault();
									handleSignOut();
								}}
								className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
							>
								Sign out
							</a>
						</li>
					</ul>
				</div>
			</header>

			<SubmitModal showModal={showModal} setShowModal={setShowModal} />

			{props.children}
		</main>
	);
};

export default Pages;
