import FinanceAndAdsRepository from "../../../domain/repositories/financeAndAdsRepository.jsx";

export const respondToAdRequest = async (id, approved, reason) => {
    try {
        const data = {
            approved,
            reason,
        }

        const response = await FinanceAndAdsRepository.respondToAdRequest(id, data);

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};
