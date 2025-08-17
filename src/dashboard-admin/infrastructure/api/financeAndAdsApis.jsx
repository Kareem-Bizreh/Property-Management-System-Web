import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {FinanceAndAdsManagement} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = import.meta.env.VITE_API_BASE_URL + FinanceAndAdsManagement.baseURL;

export const getAllAdRequests = async () => {
    const response = await axiosInstance.get(FinanceAndAdsManagement.getAllAdRequests, {baseURL});
    return response.data;
};

export const respondToAdRequest = async (id, payload) => {
    const response = await axiosInstance.post(FinanceAndAdsManagement.respondToAdRequest(id), payload, {baseURL});
    return response.data;
};

export const getApprovedAds = async () => {
    const response = await axiosInstance.get(FinanceAndAdsManagement.getApprovedAds, {baseURL});
    return response.data;
};

export const getAdInvoices = async () => {
    const response = await axiosInstance.get(FinanceAndAdsManagement.getAdInvoices, {baseURL});
    return response.data;
};
