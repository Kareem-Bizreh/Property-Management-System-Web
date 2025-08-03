import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {UserPostSuggestion} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = UserPostSuggestion.baseURL;

export const suggest = async (formData) => {
    const response = await axiosInstance.post(
        UserPostSuggestion.suggest,
        formData, {baseURL: import.meta.env.VITE_API_BASE_URL + baseURL}
    );
    return response.data;
};
