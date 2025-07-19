import Header from "../components/shared/Header.jsx";
import Filter from "../components/booking/Filter.jsx";
import Reservations from "../components/booking/Reservations.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";

const ReservationsPage = () => {
    const {isLoading} = useLoadingStore()
    return (
        <div className="flex flex-col">
            <Header title={'حجز الأملاك'} />
            <Filter />
            <Reservations />
            {(isLoading ? (<Spinner/>) : null)}
        </div>
    )
}
export default ReservationsPage
