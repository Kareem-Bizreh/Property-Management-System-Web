import NotificationRepository from "../../../domain/repositories/notificationRepository.jsx";

export const sendNotification = async (title, body, target) => {
    try {
        const data = {
            title,
            body,
            target
        }

        const response = await NotificationRepository.send(data);

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};
