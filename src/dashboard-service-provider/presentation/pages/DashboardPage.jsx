import GeneralDetails from "../../presentation/components/dashboard/GeneralDetails.jsx";
import Logo from "../../../shared/presentation/components/office/Logo.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import {FormProvider, useForm} from "react-hook-form";
import {useEffect} from "react";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useServiceProviderStore from "../../application/state/dashboard/useServiceProviderStore.jsx";
import ServiceStatus from "../components/dashboard/ServiceStatus.jsx";

const DashboardPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {serviceProvider, setServiceProvider} = useServiceProviderStore();
    const methods = useForm()

    useEffect(() => {
        setIsLoading(true);
        setServiceProvider({
            city: {
                id: 1,
                name: 'دمشق',
            },
            region: {
                id: 1,
                name: 'المزة'
            }
        });
        setIsLoading(false);
    }, [])

    if (isLoading || !serviceProvider) return <Spinner/>;

    return (
        <FormProvider {...methods}>
            <div className="flex flex-row flex-wrap gap-5 p-4">
                <div className="flex-5">
                    <GeneralDetails/>
                </div>
                <div className="flex flex-col gap-4 w-[290px] flex-2">
                    <Logo office={serviceProvider} setOffice={setServiceProvider} name="مزود الخدمة"/>
                    <ServiceStatus/>
                </div>
            </div>
        </FormProvider>
    )
}
export default DashboardPage
