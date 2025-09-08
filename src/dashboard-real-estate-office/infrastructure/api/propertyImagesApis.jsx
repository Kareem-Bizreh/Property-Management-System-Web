import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {PropertyImage} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = PropertyImage.baseURL;

export const upload = async (propertyId, formData) => {
    const response = await axiosInstance.post(
        PropertyImage.upload(propertyId),
        formData,
        {
            baseURL: import.meta.env.VITE_API_BASE_URL + baseURL,
        }
    );
    return response.data;
};

export const getAll = async (propertyId) => {
    const response = await axiosInstance.get(PropertyImage.getAll(propertyId), {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL,
    });
    return response.data;
};

export const remove = async (propertyId, imageId) => {
    const response = await axiosInstance.delete(
        PropertyImage.delete(propertyId, imageId),
        {
            baseURL: import.meta.env.VITE_API_BASE_URL + baseURL,
        }
    );
    return response.data;
};
