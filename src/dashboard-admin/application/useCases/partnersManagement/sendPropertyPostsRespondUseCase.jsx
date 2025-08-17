import PartnersManagementRepository from "../../../domain/repositories/partnersManagementRepository.jsx";

export const sendPropertyPostsRespond = async (id, approved, reason) => {
    try {
        const data = {
            approved,
            reason,
        }
        const response = await PartnersManagementRepository.propertyPostsRespond(id, data);

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};
