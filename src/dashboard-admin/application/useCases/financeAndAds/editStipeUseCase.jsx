import FinanceAndAdsRepository from "../../../domain/repositories/financeAndAdsRepository.jsx";

export const editStripe = async (creditCard) => {
    try {
        const data = {
            stripe_customer_id: creditCard
        }

        const response = await FinanceAndAdsRepository.editStripe(data);

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};
