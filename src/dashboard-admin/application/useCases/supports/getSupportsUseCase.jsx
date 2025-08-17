import SupportsRepository from "../../../domain/repositories/supportsRepository.jsx";

export const getSupports = async () => {
    try {
        const response = await SupportsRepository.get();

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};