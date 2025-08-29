const baseURL = 'admin/'

export const stats = {
    baseURL: baseURL + 'stats',
    public_info: 'public-info',
    popular: 'popular',
}

export const User = {
    baseURL: 'user',
    get: 'details'
}

export const Admin = {
    baseURL: baseURL,
    get: '',
    add: '',    // POST
    edit: (id) => `${id}`,   // PUT
    delete: (id) => `${id}`, // DELETE
}

export const FinanceAndAdsManagement = {
    baseURL: baseURL + 'finance-ads-management',
    getAllAdRequests: 'ad-requests',
    respondToAdRequest: (id) => `ad-request/${id}/respond`, // POST
    getApprovedAds: 'approved-ads',
    getAdInvoices: 'ad-invoices',
    getStripe: 'stripe',
    editStripe: 'stripe', // PUT
}

export const PartnersManagement = {
    baseURL: baseURL + 'partners-management',
    getOffices: 'offices',
    getOffice: (id) => `offices/${id}`,
    getOfficeProperties: (id) => `offices/${id}/properties`,
    getPropertyPosts: 'property-posts',
    getServiceProviders: 'service-providers',
    getServiceProvider: (id) => `service-providers/${id}`,
    getJoinRequests: 'join-requests',
    propertyPostsRespond: (id) => `property-posts/${id}/respond`, // PUT
    joinRequestsRespond: (id) => `join-requests/${id}/respond`,   // POST
}

export const UserPosts = {
    baseURL: baseURL + 'user-posts',
    get: '',
    respond: (id) => `${id}/respond`, // PUT
}

export const Notifications = {
    baseURL: 'notifications',
    send: '' // POST
}

export const Complaints = {
    baseURL: baseURL + 'complaints',
    get: '',
    getPending: 'pending',
    respond: (id) => `${id}/respond`, // PUT
}

export const Supports = {
    baseURL: baseURL + 'supports/faqs',
    get: '',
    add: '',
    edit: (id) => `${id}`,   // PUT
    delete: (id) => `${id}`, // POST
}