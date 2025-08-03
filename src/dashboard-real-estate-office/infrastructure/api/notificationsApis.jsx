import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {Notifications} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = Notifications.baseURL;

export const getAll = async () => {

    const response = await axiosInstance.get(
        Notifications.getAll, {baseURL: import.meta.env.VITE_API_BASE_URL + baseURL}
    );

    return response.data;
};