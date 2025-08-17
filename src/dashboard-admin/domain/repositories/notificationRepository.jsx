import {sendNotification} from "../../infrastructure/api/notificationApis.jsx";

const NotificationRepository = {
    send: async (payload) => await sendNotification(payload),
};

export default NotificationRepository;
