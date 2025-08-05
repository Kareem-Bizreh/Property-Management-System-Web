import {addTourism, editTourism, filters, getTourism} from "../../infrastructure/api/tourismApis.jsx";

const TourismRepository = {
    addTourism: async (data) => await addTourism(data),

    filters: async (regionId, status) => await filters(regionId, status),

    getTourism: async (tourismId) => await getTourism(tourismId),

    editTourism: async (tourismId, data) => await editTourism(tourismId, data),
};

export default TourismRepository;