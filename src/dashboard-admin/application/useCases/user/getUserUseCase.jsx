import UserRepository from "../../../domain/repositories/userRepository.jsx";

export const getUser = async () => {
    try {
        const response = await UserRepository.getDetails();

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};
