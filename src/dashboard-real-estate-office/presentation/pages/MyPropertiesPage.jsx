import {useEffect} from "react";
import Header from "../../../shared/presentation/components/Header.jsx";
import Filter from "../components/myProperties/Filter.jsx";
import PropertiesList from "../components/myProperties/PropertiesList.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import usePropertiesStore from "../../application/state/property/usePropertiesStore.jsx";
import {useForm} from "react-hook-form";
import useCityStore from "../../application/state/residentialOffice/useCityStore.jsx";
import useRegionStore from "../../application/state/residentialOffice/useRegionStore.jsx";
import useListingTypeStore from "../../application/state/residentialOffice/useListingTypeStore.jsx";
import useStatusStore from "../../application/state/residentialOffice/useStatusStore.jsx";
import {getFilterProperties} from "../../application/useCases/residentialOffice/getFilterPropertiesUseCase.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";

const MyPropertiesPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore()
    const {setProperties} = usePropertiesStore();
    const {city} = useCityStore();
    const {region} = useRegionStore();
    const {listingType} = useListingTypeStore();
    const {status} = useStatusStore();
    const {register} = useForm();
    const {notifyError} = useNotification();


    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const {success, response} = await getFilterProperties({city, region, listingType, status});
            if (success) {
                setProperties(response.data);
            } else {
                setProperties([]);
                notifyError(response);
            }
            setIsLoading(false);
        }

        fetchData();
    }, [city, region, listingType, status]);

    if (isLoading) return <Spinner/>;

    return (
        <div className="flex flex-col">
            <Header title={'عقاراتي'}/>
            <Filter register={register}/>
            <PropertiesList/>
        </div>
    )
}

export default MyPropertiesPage;
