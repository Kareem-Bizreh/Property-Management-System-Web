import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {Office} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = Office.baseURL;

export const commission = async () => {
    const response = await axiosInstance.get(Office.commission, {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL,
    });

    return response.data;
}