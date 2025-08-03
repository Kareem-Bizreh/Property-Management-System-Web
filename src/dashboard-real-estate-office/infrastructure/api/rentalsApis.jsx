import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {RentalContracts} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = RentalContracts.baseURL;

export const add = async (formData) => {
    const response = await axiosInstance.post(
        RentalContracts.add,
        formData, {baseURL: import.meta.env.VITE_API_BASE_URL + baseURL}
    );
    return response.data;
};

export const filters = async (cityId, regionId, status) => {
    const params = {};
    if (cityId) params.cityId = cityId;
    if (regionId) params.regionId = regionId;
    if (status) params.status = status;

    const response = await axiosInstance.get(
        RentalContracts.filters,
        {
            params,
            baseURL: import.meta.env.VITE_API_BASE_URL + baseURL
        }
    );

    return response.data;
};

export const getRental = async (rentalId) => {
    const response = await axiosInstance.get(RentalContracts.getRentalContracts(rentalId), {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL
    });
    return response.data;
}

export const uploadDocument = async (invoiceId, formData) => {
    const response = await axiosInstance.post(
        RentalContracts.uploadDocument(invoiceId),
        formData, {baseURL: import.meta.env.VITE_API_BASE_URL + baseURL}
    );
    return response.data;
};