import ResidentialOfficeRepository from "../../../domain/repositories/residentialOfficeRepository.jsx";

export const getExpectedPrice = async (id) => {
    try {
        const response = await ResidentialOfficeRepository.getExpectedPrice(id);

        return {success: true, response: response.data.expected_price};
    } catch (error) {
        return { success: false, response: error.response.data.message };
    }
}