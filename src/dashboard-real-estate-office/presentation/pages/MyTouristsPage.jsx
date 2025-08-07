import {useEffect} from "react";
import Header from "../components/shared/Header.jsx";
import Filter from "../components/tourism/Filter.jsx"
import TouristList from "../components/tourism/TouristList.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import useCityStore from "../../application/state/tourism/useCityStore.jsx";
import useRegionStore from "../../application/state/tourism/useRegionStore.jsx";
import useStatusStore from "../../application/state/tourism/useStatusStore.jsx";
import useTouristsStore from "../../application/state/tourism/useTouristsStore.jsx";
import {useForm} from "react-hook-form";
import {getTourismFilters} from "../../application/useCases/tourism/getTourismFiltersUseCase.jsx";

const MyTouristsPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {city} = useCityStore();
    const {region} = useRegionStore();
    const {status} = useStatusStore();
    const {setTourists} = useTouristsStore();
    const {register} = useForm();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const {success, response} = await getTourismFilters(city, region, status);
            if (success) {
                setTourists(response.data);
            } else {
                setTourists([]);
                alert(response);
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
