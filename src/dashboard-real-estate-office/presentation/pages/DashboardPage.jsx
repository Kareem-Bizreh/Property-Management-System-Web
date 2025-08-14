import OfficeDetails from "../components/dashboard/OfficeDetails.jsx";
import DetailsCards from "../components/dashboard/DetailsCards.jsx";
import MostRequestedAreas from "../components/dashboard/MostRequestedAreas.jsx";
import MostRatedProperties from "../components/dashboard/MostRatedProperties.jsx";
import MostRatedTourist from "../components/dashboard/MostRatedTourist.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";

const DashboardPage = () => {
    const {isLoading} = useLoadingStore()

    return (
        <div className="flex flex-col">
            <OfficeDetails/>
            <DetailsCards/>
            <MostRequestedAreas/>
            <MostRatedProperties/>
            <MostRatedTourist/>
            {(isLoading ? (<Spinner/>) : null)}
        </div>

    )
}
export default DashboardPage
