import {getComplaints, getPendingComplaints, respondToComplaint} from "../../infrastructure/api/complaintsApis.jsx";

const ComplaintsRepository = {
    get: async () => await getComplaints(),
    getPending: async () => await getPendingComplaints(),
    respond: async (id, payload) => await respondToComplaint(id, payload),
};

export default ComplaintsRepository;
