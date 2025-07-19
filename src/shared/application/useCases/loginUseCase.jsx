import authRepository from "../../domain/repositories/authRepository.jsx";

export const loginUseCase = async (formData) => {
    try {
        const response = (await authRepository.login(formData)).data;

        localStorage.setItem("accessToken", response.data.tokens.accessToken);
        localStorage.setItem("refreshToken", response.data.tokens.refreshToken);

        return {success: true, data: response, message: "Login Success"};
    } catch (error) {
        if (error.response?.status === 400) {
            return {
                success: false,
                data: error.response.data,
                message: error.response.data.message[0] || "Invalid credentials",
            };
        } else {
            return {
                success: false,
                data: error.response.data,
                message: error.response.error || "Something went wrong, please try again.",
            };
        }
    }
};
