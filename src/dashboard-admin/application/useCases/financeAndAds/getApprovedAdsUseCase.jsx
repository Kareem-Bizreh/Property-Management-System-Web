import FinanceAndAdsRepository from "../../../domain/repositories/financeAndAdsRepository.jsx";

export const getApprovedAds = async () => {
    try {
        const response = await FinanceAndAdsRepository.getApprovedAds();

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};
