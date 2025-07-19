import Header from "../components/shared/Header.jsx";
import Filter from "../components/rentals/Filter.jsx";
import Rentals from "../components/rentals/Rentals.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";

const RentalsPage = () => {
    const {isLoading} = useLoadingStore()
    return (
        <div className="flex flex-col">
            <Header title={'الإيجارات'} />
            <Filter />
            <Rentals />
            {(isLoading ? (<Spinner/>) : null)}
        </div>
    )
}
export default RentalsPage
