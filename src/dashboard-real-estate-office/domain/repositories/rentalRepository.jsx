import {add, filters, getRental} from "../../infrastructure/api/rentalsApis.jsx";

const RentalRepository = {
    add: async (formData) => await add(formData),

    filters: async (cityId, regionId, status) =>
        await filters(cityId, regionId, status),

    getRentalContracts: async (rentalId) => await getRental(rentalId),
};

export default RentalRepository;