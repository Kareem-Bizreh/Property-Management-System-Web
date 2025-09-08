import {getPublicInfoStats, getPopularStats} from "../../infrastructure/api/statsApis.jsx";

const StatsRepository = {
    publicInfo: async () => await getPublicInfoStats(),
    popular: async (type) => await getPopularStats(type),
};

export default StatsRepository;
