import ReservationRepository from "../../../domain/repositories/reservationsRepository.jsx";

export const getPropertyRentalInformation = async (propertyId) => {
    try {
        const response = await ReservationRepository.getPropertyRentalInformation(propertyId);

        return {success: true, response: response.data};
    } catch (error) {
        return { success: false, response: error.response.data.message };
    }
}