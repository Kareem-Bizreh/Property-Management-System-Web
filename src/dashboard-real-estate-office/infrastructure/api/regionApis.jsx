import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {Region} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = Region.baseURL;

export const getMeterPrice = async (regionId) => {
    const response = await axiosInstance.get(Region.getMeterPrice(regionId), {
        baseURL: import.meta.env.VITE_API_BASE_URL + baseURL,
    });

    return response.data;
}