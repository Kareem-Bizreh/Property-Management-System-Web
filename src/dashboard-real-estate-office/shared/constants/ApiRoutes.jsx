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

export const PropertyImage = {
    baseURL: 'property-image/',
    upload: (propertyId) => `${propertyId}/images`,              // POST
    getAll: (propertyId) => `${propertyId}/images`,
    update: (propertyId, imageId) => `${propertyId}/images/${imageId}`,// PUT
    delete: (propertyId, imageId) => `${propertyId}/images/${imageId}`,// DELETE
};

export const PropertyReservation = {
    baseURL: 'property-reservation/',
    getAll: '',
    filters: 'filters',
    getReservation: (propertyReservationId) => `${propertyReservationId}`,
    getPropertyRentalInformation: (propertyId) => `properties/${propertyId}`,
}

export const UserPropertyInvoice = {
    baseURL: 'user-property-invoices/',
    uploadDocument: (invoiceId) => `${invoiceId}/upload-docement`,
    add: 'upload-docement',
}

export const RentalContracts = {
    baseURL: 'rental-contracts/',
    add: '',
    filters: '',
    getRentalContracts: (id) => `${id}/details`,
    uploadDocument: (invoiceId) => `${invoiceId}/upload-document`,
}

export const UserPost = {
    baseURL: 'user-post/',
    filters: 'filters',
}

export const UserPostSuggestion = {
    baseURL: 'user-post-suggestion/',
    suggest: ''
}

export const ServiceProvider = {
    baseURL: 'service-provider/',
    filters: 'filters',
}

export const Notifications = {
    baseURL: 'notifications/',
    getAll: '',
}