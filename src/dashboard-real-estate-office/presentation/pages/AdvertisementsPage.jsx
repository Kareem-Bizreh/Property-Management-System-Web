import Header from "../../../shared/presentation/components/Header.jsx";
import Filter from "../components/advertisements/Filter.jsx";
import AdCreationOptions from "../components/advertisements/AdCreationOptions.jsx";
import FinancialRecords from "../components/advertisements/FinancialRecords.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import useTypeStore from "../../application/state/advertisement/useTypeStore.jsx";
import useAdvertisementsStore from "../../application/state/advertisement/useAdvertisementsStore.jsx";
import {useEffect} from "react";
import {getInvoices} from "../../application/useCases/advertisement/getInvoicesUseCase.jsx";

const AdvertisementsPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore()
    const {type} = useTypeStore()
    const {setAdvertisements} = useAdvertisementsStore()

    useEffect(() => {
        const loadAdvertisements = async () => {
            setIsLoading(true)
            const {success, response} = await getInvoices(type);
            if (success) {
                setAdvertisements(response.data);
            } else {
                setAdvertisements([])
                alert(response)
            }
            setIsLoading(false)
        }
        loadAdvertisements()
    }, [type])

    return (
        <div className="flex flex-col">
            <Header title={'الإعلانات'}/>
            <AdCreationOptions/>
            <Filter/>
            {isLoading ? <Spinner/> : <FinancialRecords/>}
        </div>
    )
}
export default AdvertisementsPage
