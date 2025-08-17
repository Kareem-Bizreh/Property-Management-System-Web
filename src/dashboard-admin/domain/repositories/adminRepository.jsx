import {getAdmins, addAdmin, editAdmin, deleteAdmin,} from "../../infrastructure/api/adminApis.jsx";

const AdminRepository = {
    get: async () => await getAdmins(),
    add: async (payload) => await addAdmin(payload),
    edit: async (id, payload) => await editAdmin(id, payload),
    delete: async (id) => await deleteAdmin(id),
};

export default AdminRepository;
