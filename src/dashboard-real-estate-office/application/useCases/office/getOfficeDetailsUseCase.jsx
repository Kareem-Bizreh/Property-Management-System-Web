import OfficeRepository from "../../../domain/repositories/officeRepository.jsx";

export const getOfficeDetails = async () => {
    try {
        const response = await OfficeRepository.getDetails();
        response.data.image = response.data.logo;
        response.data.coordinates = {
            lat: response.data.latitude,
            lng: response.data.longitude,
        }

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}