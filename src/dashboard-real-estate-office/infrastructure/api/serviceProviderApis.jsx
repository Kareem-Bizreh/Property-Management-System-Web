import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {ServiceProvider} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = ServiceProvider.baseURL;

export const filters = async (cityId, regionId, career) => {
    const params = {};
    if (cityId) params.cityId = cityId;
    if (regionId) params.regionId = regionId;
    if (career) params.career = career;

    const response = await axiosInstance.get(
        ServiceProvider.filters,
        {
            params,
            baseURL: import.meta.env.VITE_API_BASE_URL + baseURL
        }
    );

    return response.data;
};