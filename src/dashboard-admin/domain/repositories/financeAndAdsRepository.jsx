import {
    getAllAdRequests,
    respondToAdRequest,
    getApprovedAds,
    getAdInvoices,
} from "../../infrastructure/api/financeAndAdsApis.jsx";

const FinanceAndAdsRepository = {
    getAllAdRequests: async () => await getAllAdRequests(),
    respondToAdRequest: async (id, payload) => await respondToAdRequest(id, payload),
    getApprovedAds: async () => await getApprovedAds(),
    getAdInvoices: async () => await getAdInvoices(),
};

export default FinanceAndAdsRepository;
