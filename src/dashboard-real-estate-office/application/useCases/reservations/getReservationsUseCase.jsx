import ReservationRepository from "../../../domain/repositories/reservationsRepository.jsx";
import {Reservation} from "../../../domain/entities/Reservation.jsx";

export const getAll = async () => {
    try {
        const response = await ReservationRepository.getAll();
        response.data = response.data.map((item) => new Reservation(item));

        return {success: true, response: response};
    } catch (error) {
        return { success: false, response: error.response.data.message };
    }
}