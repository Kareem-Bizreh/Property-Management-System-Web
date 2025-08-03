import RentalRepository from "../../../domain/repositories/rentalRepository.jsx";

export const getRental = async (rentalId) => {
    try {
        const response = await RentalRepository.getRentalContracts(rentalId);
        // response.data = new Reservation(response.data);

        return {success: true, response: response};
    } catch (error) {
        return { success: false, response: error.response.data.message };
    }
}