import OfficeRepository from "../../../domain/repositories/officeRepository.jsx";

export const getTopRegions = async () => {
    try {
        const response = await OfficeRepository.getTopRegions();

        return {success: true, response: response.data};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}