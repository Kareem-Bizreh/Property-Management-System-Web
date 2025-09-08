import ServiceProviderRepository from "../../../domain/repositories/serviceProviderRepository.jsx";

export const getServiceProvider = async () => {
    try {
        const response = await ServiceProviderRepository.get();
        response.data.image = response.data.logo;

        return {success: true, response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}