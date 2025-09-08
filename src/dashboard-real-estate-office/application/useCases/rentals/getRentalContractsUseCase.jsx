import RentalRepository from "../../../domain/repositories/rentalRepository.jsx";
import {Rental} from "../../../domain/entities/Rental.jsx";

export const getRental = async (rentalId) => {
    try {
        const response = await RentalRepository.getRentalContracts(rentalId);
        response.data = new Rental(response.data);

        return {success: true, response: response};
    } catch (error) {
        return { success: false, response: error.response.data.message };
    }
}