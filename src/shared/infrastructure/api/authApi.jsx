import axiosInstance from "./axiosInstance";
import {AUTH} from "../../shared/constants/ApiRoutes.jsx";

export const loginApi = async (data) => {
    return await axiosInstance.post(AUTH.LOGIN, data);
};

export const logoutApi = async () => {
    return await axiosInstance.post(AUTH.LOGOUT);
};

export const refreshApi = async () => {
    return await axiosInstance.post(AUTH.REFRESH, {useRefreshToken: true});
};
