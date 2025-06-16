import DashboardPage from "../pages/DashboardPage.jsx";
import MyPropertiesPage from "../pages/MyPropertiesPage.jsx";
import AddPropertyPage from "../pages/AddPropertyPage.jsx";

export const PrivateRoutes = [
    {
        path: "dashboard",
        element: <DashboardPage/>,
    },
    {
        path: "my-properties",
        element: <MyPropertiesPage/>
    },
    {
        path: "my-properties/add",
        element: <AddPropertyPage/>,
    }
]
