import NotificationsRepository from "../../../domain/repositories/notificationsRepository.jsx";

export const getNotifications = async () => {
    try {
        const response = await NotificationsRepository.getAll();

        return {success: true, response: response.data};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}