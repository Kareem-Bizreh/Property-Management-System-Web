import AdminRepository from "../../../domain/repositories/adminRepository.jsx";

export const getAdmin = async () => {
    try {
        const response = await AdminRepository.get();

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};