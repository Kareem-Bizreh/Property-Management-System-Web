import authRepository from "../../domain/repositories/authRepository";
import useUserStore from "../state/userStore.jsx";

export const logoutUseCase = async () => {
    try {
        await authRepository.logout();

        // Clear tokens from localStorage
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        useUserStore.getState().logout();

        return { success: true, message: "Logged out" };
    } catch (error) {
        return { success: false, message: error.message };
    }
};
