import StatsRepository from "../../../domain/repositories/statsRepository.jsx";

export const getPopular = async (type) => {
    try {
        const response = await StatsRepository.popular(type);

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};
