import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {UserPosts} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = import.meta.env.VITE_API_BASE_URL + UserPosts.baseURL;

export const getUserPosts = async (status) => {
    const params = {}
    if (status) params.status = status;

    const response = await axiosInstance.get(UserPosts.get, {baseURL, params});
    return response.data;
};

export const respondToUserPost = async (id, payload) => {
    const response = await axiosInstance.put(UserPosts.respond(id), payload, {baseURL});
    return response.data;
};
