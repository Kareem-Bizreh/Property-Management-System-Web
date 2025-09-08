import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {Complaints} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = Complaints.baseURL;

export const getComplaints = async () => {
    const response = await axiosInstance.get(Complaints.get, {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL,
    });
    return response.data;
};

export const getPendingComplaints = async () => {
    const response = await axiosInstance.get(Complaints.getPending, {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL,
    });
    return response.data;
};

export const respondToComplaint = async (id, payload) => {
    const response = await axiosInstance.put(Complaints.respond(id), payload, {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL,
    });
    return response.data;
};
