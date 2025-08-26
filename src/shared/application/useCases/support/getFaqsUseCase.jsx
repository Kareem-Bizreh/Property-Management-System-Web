import SupportRepository from "../../../domain/repositories/supportRepository.jsx";

export const getFaqs = async () => {
    try {
        const response = await SupportRepository.getFaqs();

        return {success: true, response: response.data};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}