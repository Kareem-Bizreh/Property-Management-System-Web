import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {ResidentialOffice} from "../../shared/constants/ApiRoutes.jsx";

export const getAll = async () => {
    const response = await axiosInstance.get(ResidentialOffice.getAll, {
        baseURL: import.meta.env.VITE_API_BASE_URL + 'residential-office/'
    });
    return response.data;
}

export const add = async (data) => {
    const response = await axiosInstance.post(ResidentialOffice.add, data, {
        baseURL: import.meta.env.VITE_API_BASE_URL + 'residential-office/'
    });
    return response.data;
}

export const filters = async ({cityId, regionId, listingType, status}) => {
    const params = {};
    if (cityId) params.cityId = cityId;
    if (regionId) params.regionId = regionId;
    if (listingType) params.listing_type = listingType;
    if (status) params.status = status;

    const response = await axiosInstance.get(
        ResidentialOffice.filters,
        {
            params,
            baseURL: import.meta.env.VITE_API_BASE_URL + 'residential-office/'
        }
    );

    return response.data;
};

export const search = async (title) => {
    const response = await axiosInstance.get(ResidentialOffice.search, {
            params: {title},
            baseURL: import.meta.env.VITE_API_BASE_URL + 'residential-office/'
        }
    )
    return response.data;
}

export const getProperty = async (propertyId) => {
    const response = await axiosInstance.get(ResidentialOffice.getProperty(propertyId), {
        baseURL: import.meta.env.VITE_API_BASE_URL + 'residential-office/'
    });
    return response.data;
}

export const getExpectedPrice = async (propertyId) => {
    const response = await axiosInstance.get(ResidentialOffice.getExpectedPrice(propertyId), {
        baseURL: import.meta.env.VITE_API_BASE_URL + 'residential-office/'
    });
    return response.data;
}

export const addResidential = async (residentialId, data) => {
    const response = await axiosInstance.post(ResidentialOffice.addResidential(residentialId), data, {
        baseURL: import.meta.env.VITE_API_BASE_URL + 'residential-office/'
    });
    return response.data;
}
