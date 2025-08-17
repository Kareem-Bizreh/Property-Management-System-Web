import ComplaintsRepository from "../../../domain/repositories/complaintsRepository.jsx";

export const getComplaints = async () => {
    try {
        const response = await ComplaintsRepository.get();
        response.data = response.data.map((complaint) => {
            if (complaint.type === "مكتب") {
                complaint.type = "real-estate";
            } else {
                complaint.type = "service-provider";
            }
            return complaint;
        });

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};
