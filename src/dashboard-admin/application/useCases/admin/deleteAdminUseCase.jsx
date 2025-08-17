import AdminRepository from "../../../domain/repositories/adminRepository.jsx";

export const deleteAdmin = async (id) => {
    try {
        const response = await AdminRepository.delete(id);

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};