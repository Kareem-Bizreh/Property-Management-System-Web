import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {User} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = import.meta.env.VITE_API_BASE_URL + User.baseURL;

export const getUserDetails = async () => {
    const response = await axiosInstance.get(User.get, {baseURL});
    return response.data;
};
