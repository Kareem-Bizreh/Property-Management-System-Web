import Header from "../../../shared/presentation/components/Header.jsx";
import Notification from "../../../shared/presentation/components/notification/Notification.jsx";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/colors.jsx";
import Button from "@mui/material/Button";
import useNotificationSendOpenStore from "../../application/state/notifications/useNotificationSendOpenStore.jsx";
import NotificationSend from "../components/notifications/NotificationSend.jsx";

const NotificationsPage = () => {
    const {isOpen, setIsOpen} = useNotificationSendOpenStore();

    const notifications = [
        {
            id: 1,
            sent_at: "2025-07-01",
            source: "النظام",
            title: "تنبيه دخول جديد",
            body: "تم تسجيل دخول جديد إلى حسابك من جهاز غير معروف."
        },
        {
            id: 2,
            sent_at: "2025-07-03",
            source: "الدعم الفني",
            title: "تحديث الأمان",
            body: "تم تحديث نظام الأمان، يرجى إعادة تسجيل الدخول لتفعيل التحديث."
        },
        {
            id: 3,
            sent_at: "2025-07-05",
            source: "النظام",
            title: "تغيير كلمة المرور",
            body: "تم تغيير كلمة المرور الخاصة بحسابك بنجاح."
        },
        {
            id: 4,
            sent_at: "2025-07-07",
            source: "الإدارة",
            title: "الصيانة المجدولة",
            body: "سيتم إجراء صيانة للنظام في 2025-07-10، وقد تتأثر بعض الخدمات."
        },
        {
            id: 5,
            sent_at: "2025-07-10",
            source: "النظام",
            title: "تنبيه أمني",
            body: "تم اكتشاف نشاط غير معتاد على حسابك، يرجى مراجعة تفاصيل الدخول."
        }
    ];

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
                {notifications.map((notification) => (
                    <Notification notification={notification}/>
                ))}
            </div>
        </div>
    )
}
export default NotificationsPage
