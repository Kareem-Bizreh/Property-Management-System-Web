import ReservationRepository from "../../../domain/repositories/reservationsRepository.jsx";
import {Reservation} from "../../../domain/entities/Reservation.jsx";

export const getReservation = async (propertyReservationId) => {
    try {
        const response = await ReservationRepository.getReservation(propertyReservationId);
        response.data = new Reservation(response.data);

        return {success: true, response: response};
    } catch (error) {
        return { success: false, response: error.response.data.message };
    }
}