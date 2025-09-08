import PartnersManagementRepository from "../../../domain/repositories/partnersManagementRepository.jsx";

export const getPropertyPosts = async () => {
    try {
        const response = await PartnersManagementRepository.getPropertyPosts();

        return {success: true, response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};