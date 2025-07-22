import {commission} from "../../infrastructure/api/officeApis.jsx";

const OfficeRepository = {
    commission: async () => await commission(),
};

export default OfficeRepository;