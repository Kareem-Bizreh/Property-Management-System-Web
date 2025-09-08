import ServicePriceRepository from "../../../domain/repositories/servicePriceRepository.jsx";

export const getServicePrice = async (service) => {
    try {
        const response = await ServicePriceRepository.get(service);

        return {success: true, response: response.data};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}