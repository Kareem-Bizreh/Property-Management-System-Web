import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {UserInvoice} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = UserInvoice.baseURL;

export const uploadDocument = async (invoiceId, formData) => {
    const response = await axiosInstance.post(
        UserInvoice.uploadDocument(invoiceId),
        formData, {baseURL: import.meta.env.VITE_API_BASE_URL + baseURL}
    );
    return response.data;
};