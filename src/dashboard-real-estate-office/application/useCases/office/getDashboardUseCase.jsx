import OfficeRepository from "../../../domain/repositories/officeRepository.jsx";

export const getDashboard = async () => {
    try {
        const response = await OfficeRepository.getDashboard();

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}