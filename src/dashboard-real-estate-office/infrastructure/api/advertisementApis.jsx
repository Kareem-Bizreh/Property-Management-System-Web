import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {Advertisement} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = Advertisement.baseURL;

export const addImageAd = async (formData) => {

    const response = await axiosInstance.post(
        Advertisement.addImageAd, formData, {baseURL: import.meta.env.VITE_API_BASE_URL + baseURL}
    );

    return response.data;
};

export const getInvoices = async (type) => {
    const params = {}
    if (type) params.type = type;

    const response = await axiosInstance.get(
        Advertisement.getInvoices, {
            params,
            baseURL: import.meta.env.VITE_API_BASE_URL + baseURL
        }
    );

    return response.data;
};