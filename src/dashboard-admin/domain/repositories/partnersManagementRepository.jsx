import {
    getOffices,
    getPropertyPosts,
    getServiceProviders,
    getServiceProvider,
    getJoinRequests,
    propertyPostsRespond,
    joinRequestsRespond, getOffice,
} from "../../infrastructure/api/partnersManagementApis.jsx";

const PartnersManagementRepository = {
    getOffices: async () => await getOffices(),
    getOffice: async (id) => await getOffice(id),
    getPropertyPosts: async () => await getPropertyPosts(),
    getServiceProviders: async () => await getServiceProviders(),
    getServiceProvider: async (id) => await getServiceProvider(id),
    getJoinRequests: async () => await getJoinRequests(),
    propertyPostsRespond: async (id, payload) => await propertyPostsRespond(id, payload),
    joinRequestsRespond: async (id, payload) => await joinRequestsRespond(id, payload),
};

export default PartnersManagementRepository;
