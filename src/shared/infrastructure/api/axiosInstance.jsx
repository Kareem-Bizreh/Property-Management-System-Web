import axios from "axios";
import {useNotification} from "../../shared/hooks/useNotification.jsx";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
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
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");

            window.location.href = "/login";

            return Promise.reject({
                message: "Session expired. Please log in again.",
                ...error,
            });
        }

        if (error.response?.status === 403) {
            return Promise.reject({
                ...error,
                response: {
                    data: {message: error.response?.data?.message ?? "المستخدم لا يملك الدور المطلوب"}
                },
                message: "المستخدم لا يملك الدور المطلوب",
            });
        }

        if (error.code === "ERR_NETWORK") {
            // show toast once
            const {notifyWarning} = useNotification();
            notifyWarning("يرجى التأكد من الاتصال بالشبكة !");

            return Promise.reject({
                response: {
                    data: {message: "لا يوجد اتصال بالشبكة",}
                },
            });
        }

        // Handle timeout separately (optional)
        if (error.code === "ECONNABORTED") {
            return Promise.reject({
                response: {
                    data: {message: error.response?.data?.message ?? "انتهت مهلة الاتصال بالخادم"}
                },
                message: "انتهت مهلة الاتصال بالخادم",
                isTimeout: true,
                ...error,
            });
        }

        // Handle server errors (with response)
        if (error.response) {
            return Promise.reject({
                response: {
                    data: {message: error.response?.data?.message ?? "حدث خطأ غير متوقع"}
                },
                message: error.response.data?.message || "حدث خطأ غير متوقع",
                ...error,
            });
        }

        // Fallback
        return Promise.reject({
            response: {
                data: {message: error.response?.data?.message ?? "حدث خطأ, يرجى المحاولة مرة ثانية"}
            },
            ...error,
        });
    }
);

export default axiosInstance;
