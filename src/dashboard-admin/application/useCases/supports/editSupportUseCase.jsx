import SupportsRepository from "../../../domain/repositories/supportsRepository.jsx";

export const editSupport = async (id, question, answer) => {
    try {
        const data = {
            question,
            answer,
        }
        const response = await SupportsRepository.edit(id, data);

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};