import RequireAuth from "../../../shared/presentation/components/RequireAuth.jsx";
import Sidebar from "../../../shared/presentation/components/Sidebar.jsx";
import {SIDEBAR_ITEMS} from "../../shared/constants/sidebarContent.jsx";
import DashboardPage from "../../presentation/pages/DashboardPage.jsx";
import UsersManagementPage from "../pages/UsersManagementPage.jsx";
import FinancialManagementPage from "../pages/FinancialManagementPage.jsx";
import AdsManagementPage from "../pages/AdsManagementPage.jsx";
import OfficesPage from "../pages/OfficesPage.jsx";
import OfficePage from "../pages/OfficePage.jsx";
import PostsAndRequestsPage from "../pages/PostsAndRequestsPage.jsx";
import NotificationsPage from "../pages/NotificationsPage.jsx";
import ComplaintsPage from "../pages/ComplaintsPage.jsx";
import SupportPage from "../pages/SupportPage.jsx";

export const PrivateRoutes = [{
    path: "/admin/",
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
            path: "users",
            element: <UsersManagementPage/>
        },
        {
            path: "financial-management",
            element: <FinancialManagementPage/>
        },
        {
            path: "ads-management",
            element: <AdsManagementPage/>
        },
        {
            path: "offices",
            element: <OfficesPage/>
        },
        {
            path: "offices/:id",
            element: <OfficePage/>
        },
        {
            path: "posts-requests",
            element: <PostsAndRequestsPage/>
        },
        {
            path: "notifications",
            element: <NotificationsPage/>
        },
        {
            path: "complaints",
            element: <ComplaintsPage/>
        },
        {
            path: "support",
            element: <SupportPage/>
        }
    ]
}]