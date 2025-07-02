import Header from "../components/shared/Header.jsx";
import Filter from "../components/services/Filter.jsx";
import Services from "../components/services/Services.jsx";

const ServicesPage = () => {
    return (
        <div className="flex flex-col">
            <Header title={'الخدمات'} />
            <Filter />
            <Services/>
        </div>
    )
}
export default ServicesPage
