import TourismRepository from "../../../domain/repositories/tourismRepository.jsx";

export const getTourismReservations = async (tourismId, year) => {
    try {
        const response = await TourismRepository.getTourismReservations(tourismId, year);

        return {success: true, response};
    } catch (error) {
        return {success: false, response: error?.response?.data?.message || error.message};
    }
};