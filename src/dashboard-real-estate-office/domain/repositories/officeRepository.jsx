import {
    commission, editDetails, getDashboard, getDetails, getTopRatedProperties, getTopRegions
} from "../../infrastructure/api/officeApis.jsx";

const OfficeRepository = {
    getDetails: async () => await getDetails(),
    editDetails: async (payload) => await editDetails(payload),
    commission: async () => await commission(),
    getDashboard: async () => await getDashboard(),
    getTopRegions: async () => await getTopRegions(),
    getTopRatedProperties: async (type) => await getTopRatedProperties(type),
};

export default OfficeRepository;