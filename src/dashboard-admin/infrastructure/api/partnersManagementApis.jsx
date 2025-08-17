import axiosInstance from "../../../shared/infrastructure/api/axiosInstance.jsx";
import {PartnersManagement} from "../../shared/constants/ApiRoutes.jsx";

const baseURL = import.meta.env.VITE_API_BASE_URL + PartnersManagement.baseURL;

// Get all offices
export const getOffices = async () => {
    const response = await axiosInstance.get(PartnersManagement.getOffices, {baseURL});
    return response.data;
};

// Get a single office by ID
export const getOffice = async (id) => {
    const response = await axiosInstance.get(PartnersManagement.getOffice(id), {baseURL});
    return response.data;
};

// Get all property posts
export const getPropertyPosts = async () => {
    const response = await axiosInstance.get(PartnersManagement.getPropertyPosts, {baseURL});
    return response.data;
};

// Get all service providers
export const getServiceProviders = async () => {
    const response = await axiosInstance.get(PartnersManagement.getServiceProviders, {baseURL});
    return response.data;
};

// Get a single service provider by ID
export const getServiceProvider = async (id) => {
    const response = await axiosInstance.get(PartnersManagement.getServiceProvider(id), {baseURL});
    return response.data;
};

// Get all join requests
export const getJoinRequests = async () => {
    const response = await axiosInstance.get(PartnersManagement.getJoinRequests, {baseURL});
    return response.data;
};

// Respond to a property post (PUT)
export const propertyPostsRespond = async (id, payload) => {
    const response = await axiosInstance.put(PartnersManagement.propertyPostsRespond(id), payload, {baseURL});
    return response.data;
};

// Respond to a join request (POST)
export const joinRequestsRespond = async (id, payload) => {
    const response = await axiosInstance.post(PartnersManagement.joinRequestsRespond(id), payload, {baseURL});
    return response.data;
};
