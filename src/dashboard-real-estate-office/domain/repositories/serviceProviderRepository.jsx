import {filters} from "../../infrastructure/api/serviceProviderApis.jsx";

const ServiceProviderRepository = {
    filters: async (cityId, regionId, career) =>
        await filters(cityId, regionId, career),
};

export default ServiceProviderRepository;