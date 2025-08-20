import TourismRepository from "../../../domain/repositories/tourismRepository.jsx";
import {Tourism} from "../../../domain/entities/Tourism.jsx";

export const getTourismFilters = async (city, region, status) => {
    try {
        const response = await TourismRepository.filters(city, region, status);
        response.data.sort((a, b) => a.id - b.id);
        response.data = response.data.map((item) => Tourism.cardData(item));

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}