export const ResidentialOffice = {
    baseURL: 'residential-office/',
    getAll: '',
    add: '',                                    // POST
    filters: 'filters',
    search: 'search',
    getProperty: (propertyId) => `properties/${propertyId}`,
    getExpectedPrice: (propertyId) => `properties/${propertyId}/expected-price`,
    editResidential: (residentialId) => `${residentialId}`,   // POST
};

export const Office = {
    baseURL: 'office/',
    commission: 'commission'
}

export const Region = {
    baseURL: 'region/',
    getMeterPrice: (regionId) => `${regionId}/expected-price`,
}