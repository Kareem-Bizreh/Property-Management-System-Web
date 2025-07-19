import Header from "../components/shared/Header.jsx";
import Filter from "../components/advertisements/Filter.jsx";
import AdCreationOptions from "../components/advertisements/AdCreationOptions.jsx";
import FinancialRecords from "../components/advertisements/FinancialRecords.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";

const AdvertisementsPage = () => {
    const {isLoading} = useLoadingStore()

    return (
        <div className="flex flex-col">
            <Header title={'الإعلانات'} />
            <AdCreationOptions />
            <Filter />
            <FinancialRecords />
            {(isLoading ? (<Spinner/>) : null)}
        </div>
    )
}
export default AdvertisementsPage
