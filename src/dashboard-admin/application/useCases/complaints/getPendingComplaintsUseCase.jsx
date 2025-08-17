import ComplaintsRepository from "../../../domain/repositories/complaintsRepository.jsx";

export const getPendingComplaints = async () => {
    try {
        const response = await ComplaintsRepository.getPending();

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};
