import TourismRepository from "../../../domain/repositories/tourismRepository.jsx";
import {Tourism} from "../../../domain/entities/Tourism.jsx";

export const addTourism = async (tourism) => {
    try {
        const formData = Tourism.toFormData(tourism);

        const response = await TourismRepository.addTourism(formData);
        return {success: true, response};
    } catch (error) {
        return {success: false, response: error?.response?.data?.message || error.message};
    }
};
