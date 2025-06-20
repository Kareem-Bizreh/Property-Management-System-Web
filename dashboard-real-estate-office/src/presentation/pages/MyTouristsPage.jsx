import Header from "../components/shared/Header.jsx";
import Filter from "../components/tourism/Filter.jsx"
import TouristList from "../components/tourism/TouristList.jsx";

const MyTouristsPage = () => {
    return (
        <div className="flex flex-col">
            <Header title={'سياحي'} />
            <Filter />
            <TouristList />
        </div>
    )
}
export default MyTouristsPage
