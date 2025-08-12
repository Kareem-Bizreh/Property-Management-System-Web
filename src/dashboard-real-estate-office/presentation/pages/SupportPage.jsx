import Header from "../../../shared/presentation/components/Header.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";

const SupportPage = () => {
    const {isLoading} = useLoadingStore()
    return (
        <div className="flex flex-col">
            <Header title={'مركز الدعم'} />
            {(isLoading ? (<Spinner/>) : null)}
        </div>
    )
}
export default SupportPage
