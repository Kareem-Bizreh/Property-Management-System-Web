import {getFaqs} from "../../infrastructure/api/supportApis.jsx";

const SupportRepository = {
    getFaqs: async () => await getFaqs(),
};

export default SupportRepository;