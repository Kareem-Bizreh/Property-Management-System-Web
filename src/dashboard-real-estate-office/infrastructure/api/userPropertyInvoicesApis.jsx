import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {UserPropertyInvoice} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = UserPropertyInvoice.baseURL;

export const uploadDocument = async (invoiceId, formData) => {
    const response = await axiosInstance.post(
        UserPropertyInvoice.uploadDocument(invoiceId),
        formData, {baseURL: import.meta.env.VITE_API_BASE_URL + baseURL}
    );
    return response.data;
};

export const addInvoice = async (formData) => {
    const response = await axiosInstance.post(
        UserPropertyInvoice.add,
        formData, {baseURL: import.meta.env.VITE_API_BASE_URL + baseURL}
    );
    return response.data;
};
