import Header from "../../../shared/presentation/components/Header.jsx";
import Filter from "../components/rentals/Filter.jsx";
import Rentals from "../components/rentals/Rentals.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useRentalsStore from "../../application/state/rental/useRentalsStore.jsx";
import {useEffect} from "react";
import useCityStore from "../../application/state/rental/useCityStore.jsx";
import useRegionStore from "../../application/state/rental/useRegionStore.jsx";
import useStatusStore from "../../application/state/rental/useStatusStore.jsx";
import {getFilterRentals} from "../../application/useCases/rentals/getFilterRentalsUseCase.jsx";

const RentalsPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {city} = useCityStore();
    const {region} = useRegionStore();
    const {status} = useStatusStore();
    const {setRentals} = useRentalsStore();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const {success, response} = await getFilterRentals(city, region, status);
            if (success) {
                setRentals(response.data);
            } else {
                setRentals([]);
                alert(response);
            }
            setIsLoading(false);
        }

        fetchData();
    }, [city, region, status]);

    return (
        <div className="flex flex-col">
            <Header title={'الإيجارات'}/>
            <Filter/>
            {(isLoading ? (<Spinner/>) : (<Rentals/>))}
        </div>
    )
}
export default RentalsPage
