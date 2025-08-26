import axiosInstance from "./axiosInstance.jsx";
import {Supports} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = import.meta.env.VITE_API_BASE_URL + Supports.baseURL;

export const getFaqs = async () => {

    const response = await axiosInstance.get(
        Supports.getFaqs, {baseURL}
    );

    return response.data;
};