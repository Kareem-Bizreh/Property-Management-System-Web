import RequireAuth from "../../../shared/presentation/components/RequireAuth.jsx";
import Sidebar from "../../../shared/presentation/components/Sidebar.jsx";
import {SIDEBAR_ITEMS} from "../../shared/constants/sidebarContent.jsx";
import DashboardPage from "../../presentation/pages/DashboardPage.jsx";
import UsersManagementPage from "../pages/UsersManagementPage.jsx";
import FinancialManagementPage from "../pages/FinancialManagementPage.jsx";

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
        }
    ]
}]