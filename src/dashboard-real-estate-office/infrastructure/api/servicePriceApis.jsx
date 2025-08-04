import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {ServicePrice} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = ServicePrice.baseURL;

export const get = async (service) => {
    const params = {}
    if (service) params.service = service;

    const response = await axiosInstance.get(
        ServicePrice.get, {
            params,
            baseURL: import.meta.env.VITE_API_BASE_URL + baseURL
        }
    );

    return response.data;
};