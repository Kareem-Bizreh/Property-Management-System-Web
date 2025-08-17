import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {Notifications} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = Notifications.baseURL;

export const sendNotification = async (payload) => {
    const response = await axiosInstance.post(Notifications.send, payload, {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL,
    });
    return response.data;
};
