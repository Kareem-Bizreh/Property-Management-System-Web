import AdvertisementRepository from "../../../domain/repositories/advertisementRepository.jsx";

export const addImageAd   = async (day_period, image) => {
    try {
        const formData = new FormData();
        formData.append("day_period", day_period);
        formData.append("image", image);
        const response = await AdvertisementRepository.addImageAd(formData);
        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error?.response?.data?.message || "حدث خطأ"};
    }
};