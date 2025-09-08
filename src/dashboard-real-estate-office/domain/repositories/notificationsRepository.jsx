import {getAll} from "../../infrastructure/api/notificationsApis.jsx";

const NotificationsRepository = {
    getAll: async () => await getAll(),
};

export default NotificationsRepository;