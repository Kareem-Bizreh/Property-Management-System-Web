import Header from "../components/shared/Header.jsx";
import Filter from "../components/tourism/Filter.jsx"
import TouristList from "../components/tourism/TouristList.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";

const MyTouristsPage = () => {
    const {isLoading} = useLoadingStore()
    return (
        <div className="flex flex-col">
            <Header title={'سياحي'} />
            <Filter />
            <TouristList />
            {(isLoading ? (<Spinner/>) : null)}
        </div>
    )
}
export default MyTouristsPage
