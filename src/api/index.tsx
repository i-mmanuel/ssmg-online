import axios, { AxiosRequestConfig } from "axios";
import { baseUrl } from "./baseUrl";

const api = axios.create({
	baseURL: baseUrl,
});

api.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		const token = localStorage.getItem("token");

		if (token && config.headers !== undefined) {
			config.headers.Authorization = `Bearer ${token}`;
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
