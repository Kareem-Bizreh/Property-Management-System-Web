import AdvertisementRepository from "../../../domain/repositories/advertisementRepository.jsx";

export const getInvoices = async (type) => {
    try {
        const response = await AdvertisementRepository.getInvoices(type);

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}