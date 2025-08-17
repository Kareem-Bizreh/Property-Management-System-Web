import AdminRepository from "../../../domain/repositories/adminRepository.jsx";

export const editAdmin = async (id, data) => {
    try {
        const response = await AdminRepository.edit(id, data);

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};