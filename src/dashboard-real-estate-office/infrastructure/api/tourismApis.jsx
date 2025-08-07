import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {Tourism} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = Tourism.baseURL;

export const addTourism = async (data) => {
    const response = await axiosInstance.post(Tourism.add, data, {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL,
    });
    return response.data;
}

export const filters = async (city, region, status) => {
    const params = {};
    if (city) params.city = city;
    if (region) params.region = region;
    if (status) params.status = status;

    const response = await axiosInstance.get(
        Tourism.filters,
        {
            params,
            baseURL: import.meta.env.VITE_API_BASE_URL + baseURL
        }
    );

    return response.data;
};

export const getTourism = async (tourismId) => {
    const response = await axiosInstance.get(Tourism.get(tourismId), {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL
    });
    return response.data;
}

export const editTourism = async (tourismId, data) => {
    const response = await axiosInstance.post(Tourism.edit(tourismId), data, {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL,
    });
    return response.data;
}
