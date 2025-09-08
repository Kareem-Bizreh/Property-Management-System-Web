import {get} from "../../infrastructure/api/servicePriceApis.jsx";

const ServicePriceRepository = {
    get: async (service) => await get(service),
};

export default ServicePriceRepository;