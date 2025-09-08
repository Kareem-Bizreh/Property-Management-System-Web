import Header from "../components/Header.jsx";
import Notification from "../components/notification/Notification.jsx";
import useLoadingStore from "../../application/state/useLoadingStore.jsx";
import {Spinner} from "../components/Spinner.jsx";
import useNotificationsStore from "../../application/state/notification/useNotificationsStore.jsx";
import {useEffect} from "react";
import {getNotifications} from "../../application/useCases/notification/getNotificationsUseCase.jsx";
import {useNotification} from "../../shared/hooks/useNotification.jsx";

const NotificationsPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore()
    const {notifications, setNotifications} = useNotificationsStore()
    const {notifyError} = useNotification()

    useEffect(() => {
        setIsLoading(true)
        const loadNotifications = async () => {
            const {success, response} = await getNotifications();
            if (success) {
                setNotifications(response)
            } else {
                setNotifications([])
                notifyError(response)
            }
            setIsLoading(false)
        }
        loadNotifications()
    }, []);

    return (
        <div className="flex flex-col">
            <Header title={'مركز الإشعارات'}/>
            {(isLoading || !notifications) ? <Spinner/> :
                <div className="flex flex-col py-4 px-6 gap-4 -mt-4">
                    {notifications.map((notification) => (
                        <Notification notification={notification}/>
                    ))}
                </div>
            }
        </div>
    )
}
export default NotificationsPage
