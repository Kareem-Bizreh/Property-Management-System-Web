import {useEffect} from "react";
import Header from "../../../shared/presentation/components/Header.jsx";
import Filter from "../components/tourism/Filter.jsx"
import TouristList from "../components/tourism/TouristList.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import useCityStore from "../../application/state/tourism/useCityStore.jsx";
import useRegionStore from "../../application/state/tourism/useRegionStore.jsx";
import useStatusStore from "../../application/state/tourism/useStatusStore.jsx";
import useTouristsStore from "../../application/state/tourism/useTouristsStore.jsx";
import {useForm} from "react-hook-form";
import {getTourismFilters} from "../../application/useCases/tourism/getTourismFiltersUseCase.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";

const MyTouristsPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {city} = useCityStore();
    const {region} = useRegionStore();
    const {status} = useStatusStore();
    const {setTourists} = useTouristsStore();
    const {register} = useForm();
    const {notifyError} = useNotification();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const {success, response} = await getTourismFilters(city, region, status);
            if (success) {
                setTourists(response.data);
            } else {
                setTourists([]);
                notifyError(response);
            }
            setIsLoading(false);
        }

        fetchData();
    }, [city, region, status]);

    return (
        <div className="flex flex-col">
            <Header title={'سياحي'}/>
            <Filter register={register}/>
            {(isLoading ? (<Spinner/>) : (<TouristList/>))}
        </div>
    )
}
export default MyTouristsPage
