import Sidebar from "../../../shared/presentation/components/Sidebar.jsx";
import {SIDEBAR_ITEMS} from "../../shared/constants/sidebarContent.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";
import NotificationsPage from "../../../shared/presentation/pages/NotificationsPage.jsx";
import SupportPage from "../../../shared/presentation/pages/SupportPage.jsx";
import RequireAuth from "../../../shared/presentation/components/RequireAuth.jsx";

export const PrivateRoutes = [{
    path: "/service-provider/",
    element:
        <RequireAuth>
            <Sidebar items={SIDEBAR_ITEMS}/>
        </RequireAuth>,
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