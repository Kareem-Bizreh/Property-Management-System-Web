import DashboardPage from "../pages/DashboardPage.jsx";
import MyPropertiesPage from "../pages/MyPropertiesPage.jsx";
import AddPropertyPage from "../pages/AddPropertyPage.jsx";
import PropertyPage from "../pages/PropertyPage.jsx";
import MyTouristsPage from "../pages/MyTouristsPage.jsx";
import AddTouristPage from "../pages/AddTouristPage.jsx";
import TourismPage from "../pages/TourismPage.jsx";
import ReservationsPage from "../pages/ReservationsPage.jsx";
import BookingPage from "../pages/BookingPage.jsx";
import RentalPage from "../pages/RentalPage.jsx";
import RentalsPage from "../pages/RentalsPage.jsx";
import UserRequestsPage from "../pages/UserRequestsPage.jsx";
import AdvertisementsPage from "../pages/AdvertisementsPage.jsx";
import ServicesPage from "../pages/ServicesPage.jsx";
import NotificationsPage from "../pages/NotificationsPage.jsx";
import SupportPage from "../pages/SupportPage.jsx";
import OfficeInfoPage from "../pages/OfficeInfoPage.jsx";

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
        path: "booking",
        element: <ReservationsPage/>,
    },
    {
        path: "booking/:id",
        element: <BookingPage/>,
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
]
