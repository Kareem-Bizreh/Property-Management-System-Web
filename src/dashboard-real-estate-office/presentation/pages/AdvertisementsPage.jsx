import Header from "../components/shared/Header.jsx";
import Filter from "../components/advertisements/Filter.jsx";
import AdCreationOptions from "../components/advertisements/AdCreationOptions.jsx";
import FinancialRecords from "../components/advertisements/FinancialRecords.jsx";

const AdvertisementsPage = () => {
    return (
        <div className="flex flex-col">
            <Header title={'الإعلانات'} />
            <AdCreationOptions />
            <Filter />
            <FinancialRecords />
        </div>
    )
}
export default AdvertisementsPage
