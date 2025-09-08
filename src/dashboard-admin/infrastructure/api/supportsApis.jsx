import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import { Supports } from "../../shared/constants/ApiRoutes.jsx";

const baseURL = Supports.baseURL;

export const getSupports = async () => {
    const response = await axiosInstance.get(Supports.get, {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL,
    });
    return response.data;
};

export const addSupport = async (payload) => {
    const response = await axiosInstance.post(Supports.add, payload, {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL,
    });
    return response.data;
};

export const editSupport = async (id, payload) => {
    const response = await axiosInstance.put(Supports.edit(id), payload, {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL,
    });
    return response.data;
};

export const deleteSupport = async (id) => {
    const response = await axiosInstance.delete(Supports.delete(id), {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL,
    });
    return response.data;
};
