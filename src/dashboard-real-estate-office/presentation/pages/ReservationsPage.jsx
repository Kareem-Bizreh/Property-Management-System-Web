import Header from "../components/shared/Header.jsx";
import Filter from "../components/booking/Filter.jsx";
import Reservations from "../components/booking/Reservations.jsx";

const ReservationsPage = () => {
    return (
        <div className="flex flex-col">
            <Header title={'حجز الأملاك'} />
            <Filter />
            <Reservations />
        </div>
    )
}
export default ReservationsPage
