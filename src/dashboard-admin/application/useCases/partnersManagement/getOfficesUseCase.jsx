import PartnersManagementRepository from "../../../domain/repositories/partnersManagementRepository.jsx";

export const getOffices = async () => {
    try {
        const response = await PartnersManagementRepository.getOffices();

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};
