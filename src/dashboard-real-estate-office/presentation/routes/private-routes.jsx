import DashboardPage from "../pages/DashboardPage.jsx";
import MyPropertiesPage from "../pages/MyPropertiesPage.jsx";
import AddPropertyPage from "../pages/AddPropertyPage.jsx";
import PropertyPage from "../pages/PropertyPage.jsx";
import MyTouristsPage from "../pages/MyTouristsPage.jsx";
import AddTouristPage from "../pages/AddTouristPage.jsx";
import TourismPage from "../pages/TourismPage.jsx";
import ReservationsPage from "../pages/ReservationsPage.jsx";
import ReservationPage from "../pages/ReservationPage.jsx";
import RentalPage from "../pages/RentalPage.jsx";
import RentalsPage from "../pages/RentalsPage.jsx";
import UserRequestsPage from "../pages/UserRequestsPage.jsx";
import AdvertisementsPage from "../pages/AdvertisementsPage.jsx";
import ServicesPage from "../pages/ServicesPage.jsx";
import NotificationsPage from "../../../shared/presentation/pages/NotificationsPage.jsx";
import SupportPage from "../../../shared/presentation/pages/SupportPage.jsx";
import OfficeInfoPage from "../pages/OfficeInfoPage.jsx";
import Sidebar from "../../../shared/presentation/components/Sidebar.jsx";
import {SIDEBAR_ITEMS} from "../../shared/constants/sidebarContent.jsx";
import RequireAuth from "../../../shared/presentation/components/RequireAuth.jsx";

export const PrivateRoutes = [{
    path: "/real-estate-office/",
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
            element: <DashboardPage/>,
        },
        {
            path: "my-properties",
            element: <MyPropertiesPage/>
        },
        {
            path: "my-properties/add",
            element: <AddPropertyPage/>,
        },
        {
            path: "my-properties/:id",
            element: <PropertyPage/>,
        },
        {
            path: "tourism",
            element: <MyTouristsPage/>,
        },
        {
            path: "tourism/add",
            element: <AddTouristPage/>,
        },
        {
            path: "tourism/:id",
            element: <TourismPage/>,
        },
        {
            path: "reservations",
            element: <ReservationsPage/>,
        },
        {
            path: "reservations/:id",
            element: <ReservationPage/>,
        },
        {
            path: "rentals",
            element: <RentalsPage/>,
        },
        {
            path: "rentals/:id",
            element: <RentalPage/>,
        },
        {
            path: "user-requests",
            element: <UserRequestsPage/>,
        },
        {
            path: "ads",
            element: <AdvertisementsPage/>,
        },
        {
            path: "office-info",
            element: <OfficeInfoPage/>,
        },
        {
            path: "services",
            element: <ServicesPage/>,
        },
        {
            path: 'notifications',
            element: <NotificationsPage/>,
        },
        {
            path: "support",
            element: <SupportPage/>,
        }
    ],
}]
