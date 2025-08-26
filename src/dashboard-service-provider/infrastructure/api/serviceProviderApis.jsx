import {ServiceProvider} from "../../shared/constants/ApiRoutes.jsx";
import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";

const baseURL = import.meta.env.VITE_API_BASE_URL + ServiceProvider.baseURL;

export const get = async () => {
    const response = await axiosInstance.get(
        ServiceProvider.get, {baseURL}
    );

    return response.data;
}

export const edit = async (payload) => {
    const response = await axiosInstance.post(
        ServiceProvider.edit, payload, {baseURL}
    )

    return response.data;
}