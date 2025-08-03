import {useEffect} from "react";
import Header from "../components/shared/Header.jsx";
import Filter from "../components/userRequests/Filter.jsx";
import Requests from "../components/userRequests/Requests.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import useUserPostsStore from "../../application/state/userPost/useUserPostsStore.jsx";
import useRegionStore from "../../application/state/userPost/useRegionStore.jsx";
import useTypeStore from "../../application/state/userPost/useTypeStore.jsx";
import useCityStore from "../../application/state/rental/useCityStore.jsx";
import {SyrianGovernorates} from "../../shared/constants/syrianGovernorates.jsx";
import {getFilterUserPosts} from "../../application/useCases/userPost/getFilterUserPostsUseCase.jsx";

const UserRequestsPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore()
    const {setUserPosts} = useUserPostsStore();
    const {region, setRegions} = useRegionStore();
    const {city, setCity} = useCityStore();
    const {type} = useTypeStore();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const {success, response} = await getFilterUserPosts(city, region, type);
            if (success) {
                setUserPosts(response.posts);
                setCity(response.officeCityId);
                const selectedGovernorate = SyrianGovernorates.find((gov) => gov.id === response.officeCityId);
                setRegions(selectedGovernorate?.regions || []);
            } else {
                setUserPosts([]);
                alert(response);
            }
            setIsLoading(false);
        }

        fetchData();
    }, [region, type]);

    return (
        <div className="flex flex-col">
            <Header title={'طلبات المستخدمين'}/>
            <Filter/>
            <Requests/>
            {(isLoading ? (<Spinner/>) : null)}
        </div>
    )
}
export default UserRequestsPage
