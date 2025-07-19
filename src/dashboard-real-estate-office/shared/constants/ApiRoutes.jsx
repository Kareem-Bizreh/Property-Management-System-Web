export const ResidentialOffice = {
    getAll: '/',
    add: '/',                                    // POST
    filters: '/filters',
    search: '/search',
    getProperty: (propertyId) => `/properties/${propertyId}`,
    getExpectedPrice: (propertyId) => `/properties/${propertyId}/expected-price`,
    addResidential: (residentialId) => `/${residentialId}`,   // POST
};
