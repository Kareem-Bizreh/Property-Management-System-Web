import Header from "../../../shared/presentation/components/Header.jsx";
import Notification from "../../../shared/presentation/components/notification/Notification.jsx";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/colors.jsx";
import Button from "@mui/material/Button";
import useNotificationSendOpenStore from "../../application/state/notifications/useNotificationSendOpenStore.jsx";
import NotificationSend from "../components/notifications/NotificationSend.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import {useEffect} from "react";
import {
    getNotifications
} from "../../../dashboard-real-estate-office/application/useCases/notification/getNotificationsUseCase.jsx";
import useDataStore from "../../application/state/useDataStore.jsx";

const NotificationsPage = () => {
    const {isOpen, setIsOpen} = useNotificationSendOpenStore();
    const {isLoading, setIsLoading} = useLoadingStore();
    const {data, setDataForTab} = useDataStore();

    useEffect(() => {
        setIsLoading(true)
        const loadNotifications = async () => {
            const {success, response} = await getNotifications();
            if (success) {
                setDataForTab(0, response)
            } else {
                setDataForTab(0, []);
                alert(response)
            }
            setIsLoading(false)
        }
        loadNotifications()
    }, []);

    return (
        <div className="flex flex-col">
            <Header title={'مركز الإشعارات'}/>

            <div className="w-full h-[65px] mb-2 flex items-center px-4"
                 style={{backgroundColor: BACKGROUND_COLORS.table}}
            >
                <Button
                    onClick={() => setIsOpen(true)}
                    variant="contained"
                    sx={{
                        color: TEXT_COLORS.white,
                        width: 180,
                        height: 45,
                        backgroundColor: BACKGROUND_COLORS.card,
                        borderRadius: '15px',
                        fontWeight: 700,
                        fontSize: '16px',
                        lineHeight: '100%',
                        letterSpacing: '3%',
                        textAlign: 'center'
                    }}
                >
                    إرسال إشعار
                </Button>
                {isOpen && (<NotificationSend/>)}
            </div>

            <div className="flex flex-col py-4 px-6 gap-4">
                {(isLoading || !data[0]) ? <Spinner/> :
                    <div className="flex flex-col py-4 px-6 gap-4 -mt-4">
                        {data[0]?.map((notification) => (
                            <Notification notification={notification}/>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}
export default NotificationsPage
