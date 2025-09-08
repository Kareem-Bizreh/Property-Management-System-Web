import {edit, get} from "../../infrastructure/api/serviceProviderApis.jsx";

const ServiceProviderRepository = {
    get: async () => await get(),

    edit: async (payload) => await edit(payload)
}

export default ServiceProviderRepository
