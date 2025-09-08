import {getInvoices, addImageAd} from "../../infrastructure/api/advertisementApis.jsx";

const AdvertisementRepository = {
    addImageAd: async (formData) => await addImageAd(formData),
    getInvoices: async (type) => await getInvoices(type),
};

export default AdvertisementRepository;