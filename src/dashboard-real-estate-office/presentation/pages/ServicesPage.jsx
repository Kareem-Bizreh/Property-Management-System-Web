import Header from "../../../shared/presentation/components/Header.jsx";
import Filter from "../components/services/Filter.jsx";
import Services from "../components/services/Services.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import {useForm} from "react-hook-form";
import useCityStore from "../../application/state/service-provider/useCityStore.jsx";
import useRegionStore from "../../application/state/service-provider/useRegionStore.jsx";
import useTypeStore from "../../application/state/service-provider/useTypeStore.jsx";
import {useEffect} from "react";
import useServiceProvidersStore from "../../application/state/service-provider/useServiceProvidersStore.jsx";
import {
    getFilterServiceProviders
} from "../../application/useCases/serviceProvider/getFilterServiceProvidersUseCase.jsx";

const ServicesPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore()
    const {register} = useForm()
    const {city} = useCityStore();
    const {region} = useRegionStore();
    const {type} = useTypeStore();
    const {setServiceProviders} = useServiceProvidersStore();

    useEffect(() => {
        setIsLoading(true)
        const loadServiceProviders = async () => {
            const {success, response} = await getFilterServiceProviders(city, region, type);
            if (success) {
                setServiceProviders(response);
            } else {
                setServiceProviders([]);
                alert(response);
            }
            setIsLoading(false)
        }
        loadServiceProviders()
    }, [city, region, type]);

    return (
        <div className="flex flex-col">
            <Header title={'الخدمات'}/>
            <Filter register={register}/>
            <Services/>
            {(isLoading ? (<Spinner/>) : null)}
        </div>
    )
}
export default ServicesPage
