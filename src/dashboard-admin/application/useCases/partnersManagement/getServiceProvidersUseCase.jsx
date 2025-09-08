import PartnersManagementRepository from "../../../domain/repositories/partnersManagementRepository.jsx";

export const getServiceProviders = async () => {
    try {
        const response = await PartnersManagementRepository.getServiceProviders();

        return {success: true, response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};