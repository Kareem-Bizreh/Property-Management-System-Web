import DashboardPage from "../pages/DashboardPage.jsx";
import MyPropertiesPage from "../pages/MyPropertiesPage.jsx";

export const PrivateRoutes = [
    {
        path: "dashboard",
        element: <DashboardPage />,
    },
    {
        path: "my-properties",
        element: <MyPropertiesPage />,
    },
]
