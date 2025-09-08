import PartnersManagementRepository from "../../../domain/repositories/partnersManagementRepository.jsx";

export const getJoinRequests = async () => {
    try {
        const response = await PartnersManagementRepository.getJoinRequests();

        return {success: true, response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};