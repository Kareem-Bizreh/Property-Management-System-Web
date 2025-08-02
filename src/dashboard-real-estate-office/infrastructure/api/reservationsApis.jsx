import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {PropertyReservation} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = PropertyReservation.baseURL;

export const getAll = async () => {
    const response = await axiosInstance.get(PropertyReservation.getAll, {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL,
    });
    return response.data;
}

export const filters = async (cityId, regionId, status) => {
    const params = {};
    if (cityId) params.cityId = cityId;
    if (regionId) params.regionId = regionId;
    if (status) params.status = status;

    const response = await axiosInstance.get(
        PropertyReservation.filters,
        {
            params,
            baseURL: import.meta.env.VITE_API_BASE_URL + baseURL
        }
    );

    return response.data;
};

export const getReservation = async (propertyReservationId) => {
    const response = await axiosInstance.get(PropertyReservation.getReservation(propertyReservationId), {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL
    });
    return response.data;
}

export const getPropertyRentalInformation = async (propertyId) => {
    const response = await axiosInstance.get(PropertyReservation.getPropertyRentalInformation(propertyId), {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL
    });
    return response.data;
}