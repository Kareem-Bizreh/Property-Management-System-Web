import FinanceAndAdsRepository from "../../../domain/repositories/financeAndAdsRepository.jsx";

export const getAdRequests = async () => {
    try {
        const response = await FinanceAndAdsRepository.getAllAdRequests();
        response.data = response.data.map(item => {
            return {
                ...item,
                active_days: item.day_period,
                start_date: item.created_at
            };
        });

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};
