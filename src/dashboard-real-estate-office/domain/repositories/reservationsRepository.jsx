import {
    filters,
    getAll,
    getReservation,
    getPropertyRentalInformation
} from "../../infrastructure/api/reservationsApis.jsx";

const ReservationRepository = {
    getAll: async () => await getAll(),

    filters: async (cityId, regionId, status) =>
        await filters(cityId, regionId, status),

    getReservation: async (propertyReservationId) => await getReservation(propertyReservationId),

    getPropertyRentalInformation: async (propertyId) => await getPropertyRentalInformation(propertyId),
};

export default ReservationRepository;