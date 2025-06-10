import OfficeDetails from "../components/dashboard/OfficeDetails.jsx";
import DetailsCards from "../components/dashboard/DetailsCards.jsx";
import MostRequestedAreas from "../components/dashboard/MostRequestedAreas.jsx";
import MostRatedProperties from "../components/dashboard/MostRatedProperties.jsx";
import MostRatedTourist from "../components/dashboard/MostRatedTourist.jsx";

const DashboardPage = () => {
    return (
        <div className="flex flex-col">
            <OfficeDetails/>
            <DetailsCards/>
            <MostRequestedAreas/>
            <MostRatedProperties/>
            <MostRatedTourist/>
        </div>

    )
}
export default DashboardPage
