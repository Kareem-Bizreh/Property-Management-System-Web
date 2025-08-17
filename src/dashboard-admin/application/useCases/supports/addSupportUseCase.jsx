import SupportsRepository from "../../../domain/repositories/supportsRepository.jsx";

export const addSupport = async (question, answer) => {
    try {
        const data = {
            question,
            answer,
        }
        const response = await SupportsRepository.add(data);

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};