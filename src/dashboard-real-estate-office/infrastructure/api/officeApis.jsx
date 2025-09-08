import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {Office} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = import.meta.env.VITE_API_BASE_URL + Office.baseURL;

export const getDetails = async () => {
    const response = await axiosInstance.get(Office.get, {baseURL});

    return response.data;
}

export const editDetails = async (payload) => {
    const response = await axiosInstance.post(Office.get, payload, {baseURL});

    return response.data;
}

export const commission = async () => {
    const response = await axiosInstance.get(Office.commission, {baseURL});

    return response.data;
}

export const getDashboard = async () => {
    const response = await axiosInstance.get(Office.dashboard, {baseURL});

    return response.data;
}

export const getTopRegions = async () => {
    const response = await axiosInstance.get(Office.topRegions, {baseURL});

    return response.data;
}

export const getTopRatedProperties = async (type) => {
    const params = {}
    if (type) {
        params.type = type;
    }
    const response = await axiosInstance.get(Office.topRatedProperties, {baseURL, params});

    return response.data;
}