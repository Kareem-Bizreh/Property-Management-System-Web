import PartnersManagementRepository from "../../../domain/repositories/partnersManagementRepository.jsx";

export const getOffice = async (id) => {
    try {
        const response = await PartnersManagementRepository.getOffice(id);

        return {success: true, response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};