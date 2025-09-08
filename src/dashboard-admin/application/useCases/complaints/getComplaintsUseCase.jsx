import ComplaintsRepository from "../../../domain/repositories/complaintsRepository.jsx";

export const getComplaints = async () => {
    try {
        const response = await ComplaintsRepository.get();

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};
