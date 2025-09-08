import Header from "../../../shared/presentation/components/Header.jsx";
import Notification from "../../../shared/presentation/components/notification/Notification.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useNotificationsStore from "../../application/state/notification/useNotificationsStore.jsx";
import {useEffect} from "react";
import {getNotifications} from "../../application/useCases/notification/getNotificationsUseCase.jsx";

const NotificationsPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore()
    const {notifications, setNotifications} = useNotificationsStore()

    useEffect(() => {
        setIsLoading(true)
        const loadNotifications = async () => {
            const {success, response} = await getNotifications();
            if (success) {
                setNotifications(response)
            } else {
                setNotifications([])
                alert(response)
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
