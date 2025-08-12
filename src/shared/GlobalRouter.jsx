import {createBrowserRouter} from "react-router";
import {PublicRoutes as RePublicRoutes} from "../dashboard-real-estate-office/presentation/routes/public-routes.jsx";
import {PrivateRoutes as RePrivateRoutes} from "../dashboard-real-estate-office/presentation/routes/private-routes.jsx";
import {PrivateRoutes as AdminPrivateRoutes} from "../dashboard-admin/presentation/routes/private-routes.jsx";
import LoginPage from "./presentation/pages/LoginPage.jsx";
import LogoutPage from "./presentation/pages/LogoutPage.jsx";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "/logout",
        element: <LogoutPage/>,
    },

    // Real Estate Office
    ...RePublicRoutes,
    ...RePrivateRoutes,

    // Admin
    ...AdminPrivateRoutes
]);