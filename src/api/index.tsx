import axios, { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "./baseUrl";

const api = axios.create({
	baseURL: baseUrl,
	timeout: 2500,
});

api.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		const token: string | null = localStorage.getItem("token");

		if (token && config.headers !== undefined) {
			config.headers.authorization = `Bearer ${token}`;
		} else {
			config.headers = {};
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

export default api;
