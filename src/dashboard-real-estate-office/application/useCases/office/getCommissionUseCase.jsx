import OfficeRepository from "../../../domain/repositories/officeRepository.jsx";

export const getOfficeCommission = async () => {
    try {
        const response = await OfficeRepository.commission();

        return {success: true, response: response.data.commission};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}