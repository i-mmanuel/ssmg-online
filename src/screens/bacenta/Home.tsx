import { AxiosResponse } from "axios";
import { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import Charts from "../../components/Charts";
import Pages from "../../components/Pages";
import { Context as AuthContext } from "../../contexts/authContext";
import { LocalSignIn } from "../../hooks/localSignIn";

const BacentaHome = (): JSX.Element => {
	const context = useContext(AuthContext);
	const navigate = useNavigate();
	LocalSignIn("/bacenta/home");

	const handleSignOut = () => {
		context?.signOut();
		navigate("/signin");
	};

	const fetchData = useCallback(async () => {
		// Takes care of making sure we're signed in
		try {
			const response: AxiosResponse = await api.get("/api/bacenta/home");
			console.log(response.data);
		} catch (error) {
			navigate("/signin");
		}
	}, [navigate]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<Pages>
			<section className="container mx-auto ">
				<h1 className=" w-full text-center">{context?.state.user?.center}</h1>

				<a
					href="#"
					className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 overflow-auto dark:bg-gray-800 dark:hover:bg-gray-700 h-80"
				>
					<div className="flex flex-col w-full h-full justify-between p-4 leading-normal">
						<Charts
							data={[
								{ name: "Page A", uv: 600, pv: 2400, amt: 2400 },
								{ name: "Page A", uv: 800, pv: 2400, amt: 2400 },
								{ name: "Page B", uv: 400, pv: 2400, amt: 2400 },
							]}
						/>
					</div>
				</a>

				<div className="grid gap-4 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 place-content-stretch h-48">
					<a
						href="#"
						className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
					>
						<img
							className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
							src="/docs/images/blog/image-4.jpg"
							alt=""
						/>
						<div className="flex flex-col justify-between p-4 leading-normal">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Noteworthy technology acquisitions 2021
							</h5>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
							</p>
						</div>
					</a>
					<a
						href="#"
						className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
					>
						<img
							className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
							src="/docs/images/blog/image-4.jpg"
							alt=""
						/>
						<div className="flex flex-col justify-between p-4 leading-normal">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Noteworthy technology acquisitions 2021
							</h5>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
							</p>
						</div>
					</a>
					<a
						href="#"
						className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
					>
						<img
							className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
							src="/docs/images/blog/image-4.jpg"
							alt=""
						/>
						<div className="flex flex-col justify-between p-4 leading-normal">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Noteworthy technology acquisitions 2021
							</h5>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
							</p>
						</div>
					</a>
					<a
						href="#"
						className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
					>
						<img
							className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
							src="/docs/images/blog/image-4.jpg"
							alt=""
						/>
						<div className="flex flex-col justify-between p-4 leading-normal">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Noteworthy technology acquisitions 2021
							</h5>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
								Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
							</p>
						</div>
					</a>
				</div>
			</section>
		</Pages>
	);
};

export default BacentaHome;
