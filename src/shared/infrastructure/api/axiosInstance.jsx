import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use((config) => {
    let token;
    if (config.useRefreshToken) {
        token = localStorage.getItem("refreshToken");
    } else {
        token = localStorage.getItem("accessToken");
    }
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // optionally handle logout or redirect
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
