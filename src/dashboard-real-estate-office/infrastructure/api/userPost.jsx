import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {UserPost} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = UserPost.baseURL;

export const filters = async (regionId, type) => {
    const params = {};
    if (regionId) params.regionId = regionId;
    if (type) params.type = type;

    const response = await axiosInstance.get(
        UserPost.filters,
        {
            params,
            baseURL: import.meta.env.VITE_API_BASE_URL + baseURL
        }
    );

    return response.data;
};