import {
    addTourism, editTourism, filters, getTourism, getTourismReservations
} from "../../infrastructure/api/tourismApis.jsx";

const TourismRepository = {
    addTourism: async (data) => await addTourism(data),

    filters: async (city, region, status) => await filters(city, region, status),

    getTourism: async (tourismId) => await getTourism(tourismId),

    editTourism: async (tourismId, data) => await editTourism(tourismId, data),

    getTourismReservations: async (tourismId, year) => await getTourismReservations(tourismId, year),
};

export default TourismRepository;