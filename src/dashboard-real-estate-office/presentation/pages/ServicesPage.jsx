import Header from "../components/shared/Header.jsx";
import Filter from "../components/services/Filter.jsx";
import Services from "../components/services/Services.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";

const ServicesPage = () => {
    const {isLoading} = useLoadingStore()
    return (
        <div className="flex flex-col">
            <Header title={'الخدمات'} />
            <Filter />
            <Services/>
            {(isLoading ? (<Spinner/>) : null)}
        </div>
    )
}
export default ServicesPage
