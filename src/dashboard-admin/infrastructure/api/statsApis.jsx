import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {stats} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = import.meta.env.VITE_API_BASE_URL + stats.baseURL;

export const getPublicInfoStats = async () => {
    const response = await axiosInstance.get(stats.public_info, {baseURL});
    return response.data;
};

export const getPopularStats = async (type) => {
    const params = {};
    if (type) params.type = type;

    const response = await axiosInstance.get(stats.popular, {baseURL, params});
    return response.data;
};
