import Sidebar from "../../../shared/presentation/components/Sidebar.jsx";
import {SIDEBAR_ITEMS} from "../../shared/constants/sidebarContent.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";
import NotificationsPage from "../pages/NotificationsPage.jsx";
import SupportPage from "../pages/SupportPage.jsx";

export const PrivateRoutes = [{
    path: "/service-provider/",
    element:
    // <RequireAuth>
        <Sidebar items={SIDEBAR_ITEMS}/>,
    // </RequireAuth>,
    children: [
        {
            index: true,
            element: <></>,
        },
        {
            path: "dashboard",
            element: <DashboardPage/>
        },
        {
            path: "notifications",
            element: <NotificationsPage/>
        },
        {
            path: "support",
            element: <SupportPage/>
        }
    ]
}]