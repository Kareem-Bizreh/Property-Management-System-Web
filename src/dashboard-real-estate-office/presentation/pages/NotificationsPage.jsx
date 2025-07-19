import Header from "../components/shared/Header.jsx";
import Notification from "../components/notifications/Notification.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";

const NotificationsPage = () => {
    const {isLoading} = useLoadingStore()
    const notifications = [
        {
            id: 1,
            date: "2025-07-01",
            source: "النظام",
            title: "تنبيه دخول جديد",
            description: "تم تسجيل دخول جديد إلى حسابك من جهاز غير معروف."
        },
        {
            id: 2,
            date: "2025-06-28",
            source: "البريد",
            title: "إشعار استلام رسالة",
            description: "وصلتك رسالة جديدة من الدعم الفني."
        },
        {
            id: 3,
            date: "2025-06-25",
            source: "المصرف",
            title: "إشعار تحويل مالي",
            description: "تم تحويل مبلغ 500 دولار إلى حسابك."
        },
        {
            id: 4,
            date: "2025-06-20",
            source: "التطبيق",
            title: "تحديث متوفر",
            description: "يوجد تحديث جديد للتطبيق، يرجى التحديث للاستفادة من الميزات الجديدة."
        }
    ];

    return (
        <div className="flex flex-col">
            <Header title={'مركز الإشعارات'}/>
            <div className="flex flex-col py-4 px-6 gap-4 -mt-4">
                {notifications.map((notification) => (
                    <Notification notification={notification}/>
                ))}
            </div>
            {(isLoading ? (<Spinner/>) : null)}
        </div>
    )
}
export default NotificationsPage
