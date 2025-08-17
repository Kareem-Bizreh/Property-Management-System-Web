import PartnersManagementRepository from "../../../domain/repositories/partnersManagementRepository.jsx";

export const getServiceProvider = async (id) => {
    try {
        const response = await PartnersManagementRepository.getServiceProvider(id);

        return {success: true, response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};