import { loginApi, logoutApi, refreshApi } from "../../infrastructure/api/authApi.jsx";

const authRepository = {
    login: async (credentials) => {
        return await loginApi(credentials);
    },

    logout: async () => {
        return await logoutApi();
    },

    refresh: async () => {
        return await refreshApi();
    }
};

export default authRepository;
