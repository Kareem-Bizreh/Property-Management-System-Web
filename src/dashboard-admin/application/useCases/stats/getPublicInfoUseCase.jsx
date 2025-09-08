import StatsRepository from "../../../domain/repositories/statsRepository.jsx";

export const getPublicInfo = async () => {
    try {
        const response = await StatsRepository.publicInfo();

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};
