import SupportsRepository from "../../../domain/repositories/supportsRepository.jsx";

export const deleteSupport = async (id) => {
    try {
        const response = await SupportsRepository.delete(id);

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};