import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {Admin} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = import.meta.env.VITE_API_BASE_URL + Admin.baseURL;

export const getAdmins = async () => {
    const response = await axiosInstance.get(Admin.get, {baseURL});
    return response.data;
};

export const addAdmin = async (payload) => {
    const response = await axiosInstance.post(Admin.add, payload, {baseURL});
    return response.data;
};

export const editAdmin = async (id, payload) => {
    const response = await axiosInstance.put(Admin.edit(id), payload, {baseURL});
    return response.data;
};

export const deleteAdmin = async (id) => {
    const response = await axiosInstance.delete(Admin.delete(id), {baseURL});
    return response.data;
};
