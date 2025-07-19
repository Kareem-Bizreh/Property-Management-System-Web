import Header from "../components/shared/Header.jsx";
import Filter from "../components/userRequests/Filter.jsx";
import Requests from "../components/userRequests/Requests.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";

const UserRequestsPage = () => {
    const {isLoading} = useLoadingStore()
    return (
        <div className="flex flex-col">
            <Header title={'طلبات المستخدمين'} />
            <Filter />
            <Requests />
            {(isLoading ? (<Spinner/>) : null)}
        </div>
    )
}
export default UserRequestsPage
