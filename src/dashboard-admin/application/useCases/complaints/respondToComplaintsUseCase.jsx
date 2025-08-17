import ComplaintsRepository from "../../../domain/repositories/complaintsRepository.jsx";

export const respondToComplaints = async (id, approved, type) => {
    try {
        const data = {
            approved,
            type,
        }

        const response = await ComplaintsRepository.respond(id, data);

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};
