import TourismRepository from "../../../domain/repositories/tourismRepository.jsx";
import {Tourism} from "../../../domain/entities/Tourism.jsx";

export const getTourism = async (tourismId) => {
    try {
        const response = await TourismRepository.getTourism(tourismId);
        response.data = new Tourism(response.data);

        return {success: true, response};
    } catch (error) {
        return {success: false, response: error?.response?.data?.message || error.message};
    }
};