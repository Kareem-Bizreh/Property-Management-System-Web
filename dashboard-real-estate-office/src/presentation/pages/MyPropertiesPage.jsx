import Header from "../components/shared/Header.jsx";
import Filter from "../components/myProperties/Filter.jsx";
import PropertiesList from "../components/myProperties/PropertiesList.jsx";

const MyPropertiesPage = () => {
    return (
        <div className="flex flex-col">
            <Header title={'عقاراتي'} />
            <Filter />
            <PropertiesList />
        </div>
    )
}
export default MyPropertiesPage
