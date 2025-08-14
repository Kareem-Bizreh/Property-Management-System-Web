import Header from "../../../shared/presentation/components/Header.jsx";
import Notification from "../../../shared/presentation/components/notification/Notification.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";

const NotificationsPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore()
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
            {(isLoading ? (<Spinner/>) :
                <div className="flex flex-col py-4 px-6 gap-4 -mt-4">
                    {notifications.map((notification) => (
                        <Notification notification={notification}/>
                    ))}
                </div>)}
        </div>
    )
}
export default NotificationsPage
