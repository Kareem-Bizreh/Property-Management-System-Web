import Header from "../components/shared/Header.jsx";
import Filter from "../components/userRequests/Filter.jsx";
import Requests from "../components/userRequests/Requests.jsx";

const UserRequestsPage = () => {
    return (
        <div className="flex flex-col">
            <Header title={'طلبات المستخدمين'} />
            <Filter />
            <Requests />
        </div>
    )
}
export default UserRequestsPage
