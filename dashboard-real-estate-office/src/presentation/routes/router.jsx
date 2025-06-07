import {createBrowserRouter} from "react-router";
import {PublicRoutes} from "./public-routes.jsx";
import {PrivateRoutes} from "./private-routes.jsx";
import Sidebar from "../components/shared/Sidebar.jsx";

export const router = createBrowserRouter([
    ...PublicRoutes,
    {
        path: "/real-estate-office/",
        element: <Sidebar />,
        children: [
            {
                index: true,
                element: <></>,
            },
            ...PrivateRoutes
        ],
    },
]);
