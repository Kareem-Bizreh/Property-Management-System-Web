import {useEffect} from "react";
import Header from "../../../shared/presentation/components/Header.jsx";
import Filter from "../components/reservation/Filter.jsx";
import Reservations from "../components/reservation/Reservations.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import useCityStore from "../../application/state/reservation/useCityStore.jsx";
import useRegionStore from "../../application/state/reservation/useRegionStore.jsx";
import useStatusStore from "../../application/state/reservation/useStatusStore.jsx";
import useReservationsStore from "../../application/state/reservation/useReservationsStore.jsx";
import {getFilterReservation} from "../../application/useCases/reservations/getFilterReservationUseCase.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";

const ReservationsPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {city} = useCityStore();
    const {region} = useRegionStore();
    const {status} = useStatusStore();
    const {setReservations} = useReservationsStore();
    const {notifyError} = useNotification();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const {success, response} = await getFilterReservation(city, region, status);
            if (success) {
                setReservations(response.data);
            } else {
                setReservations([]);
                notifyError(response);
            }
            setIsLoading(false);
        }

        fetchData();
    }, [city, region, status]);

    return (
        <div className="flex flex-col">
            <Header title={'حجز الأملاك'}/>
            <Filter/>
            {isLoading ? (
                <Spinner />
            ) : (
                <Reservations />
            )}
        </div>
    )
}
export default ReservationsPage
