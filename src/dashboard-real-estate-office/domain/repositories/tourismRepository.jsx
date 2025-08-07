import {addTourism, editTourism, filters, getTourism} from "../../infrastructure/api/tourismApis.jsx";

const TourismRepository = {
    addTourism: async (data) => await addTourism(data),

    filters: async (city, region, status) => await filters(city, region, status),

    getTourism: async (tourismId) => await getTourism(tourismId),

    editTourism: async (tourismId, data) => await editTourism(tourismId, data),
};

export default TourismRepository;