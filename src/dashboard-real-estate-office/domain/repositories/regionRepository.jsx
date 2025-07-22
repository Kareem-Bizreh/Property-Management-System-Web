import {getMeterPrice} from "../../infrastructure/api/regionApis.jsx";

const RegionRepository = {
    getMeterPrice: async (regionId) => await getMeterPrice(regionId),
};

export default RegionRepository;