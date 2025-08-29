import {
    getAllAdRequests,
    respondToAdRequest,
    getApprovedAds,
    getAdInvoices, getStripe, editStripe,
} from "../../infrastructure/api/financeAndAdsApis.jsx";

const FinanceAndAdsRepository = {
    getAllAdRequests: async () => await getAllAdRequests(),
    respondToAdRequest: async (id, payload) => await respondToAdRequest(id, payload),
    getApprovedAds: async () => await getApprovedAds(),
    getAdInvoices: async () => await getAdInvoices(),
    getStripe: async () => await getStripe(),
    editStripe: async (data) => await editStripe(data),
};

export default FinanceAndAdsRepository;
