import {
    add,
    addResidential,
    filters,
    getAll,
    getExpectedPrice,
    getProperty,
    search
} from "../../infrastructure/api/residentialOfficeApis.jsx";

const ResidentialOfficeRepository = {
    getAll: async () => await getAll(),

    add: async (data) => await add(data),

    filters: async ({cityId, regionId, listingType, status}) =>
        await filters({cityId, regionId, listingType, status}),

    search: async (data) => await search(data),

    getProperty: async (propertyId) => await getProperty(propertyId),

    getExpectedPrice: async (propertyId) => await getExpectedPrice(propertyId),

    addResidential: async (residentialId, data) =>
        await addResidential(residentialId, data),
};

export default ResidentialOfficeRepository;