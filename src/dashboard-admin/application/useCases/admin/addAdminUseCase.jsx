import AdminRepository from "../../../domain/repositories/adminRepository.jsx";

export const addAdmin = async (data) => {
    try {
        const response = await AdminRepository.add(data);

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};