import TourismRepository from "../../../domain/repositories/tourismRepository.jsx";
import {Tourism} from "../../../domain/entities/Tourism.jsx";

export const editTourism = async (tourism) => {
    try {
        const formData = Tourism.toFormData(tourism);

        const response = await TourismRepository.editTourism(formData);
        return {success: true, response};
    } catch (error) {
        return {success: false, response: error?.response?.data?.message || error.message};
    }
};