import {getSupports, addSupport, editSupport, deleteSupport} from "../../infrastructure/api/supportsApis.jsx";

const SupportsRepository = {
    get: async () => await getSupports(),
    add: async (payload) => await addSupport(payload),
    edit: async (id, payload) => await editSupport(id, payload),
    delete: async (id) => await deleteSupport(id),
};

export default SupportsRepository;
