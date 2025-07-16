import Header from "../components/shared/Header.jsx";
import Filter from "../components/rentals/Filter.jsx";
import Rentals from "../components/rentals/Rentals.jsx";

const RentalsPage = () => {
    return (
        <div className="flex flex-col">
            <Header title={'الإيجارات'} />
            <Filter />
            <Rentals />
        </div>
    )
}
export default RentalsPage
