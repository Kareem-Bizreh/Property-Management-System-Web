import Header from "../../../shared/presentation/components/Header.jsx";
import DetailsCards from "../../presentation/components/dashboard/DetailsCards.jsx";
import MostRatedOffices from "../components/dashboard/MostRatedOffices.jsx";
import MostRatedServiceProviders from "../components/dashboard/MostRatedServiceProviders.jsx";

const DashboardPage = () => {
    return (
        <div className="flex flex-col">
            <Header title={"لوحة التحكم"}/>
            <div className="flex flex-col p-2">
                <DetailsCards/>
                <MostRatedOffices/>
                <MostRatedServiceProviders/>
            </div>
        </div>
    )
}
export default DashboardPage
