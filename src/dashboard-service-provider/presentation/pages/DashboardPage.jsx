import GeneralDetails from "../../presentation/components/dashboard/GeneralDetails.jsx";
import Logo from "../../../shared/presentation/components/office/Logo.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import {FormProvider, useForm} from "react-hook-form";
import {useEffect} from "react";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useServiceProviderStore from "../../application/state/serviceProvider/useServiceProviderStore.jsx";
import ServiceStatus from "../components/dashboard/ServiceStatus.jsx";
import {getServiceProvider} from "../../application/useCases/serviceProvider/getServiceProviderUseCase.jsx";
import {editServiceProvider} from "../../application/useCases/serviceProvider/editServiceProviderUseCase.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";

const DashboardPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {serviceProvider, setServiceProvider} = useServiceProviderStore();
    const {notifyError, notifySuccess, notifyWarning} = useNotification();
    const methods = useForm()

    useEffect(() => {
        setIsLoading(true);

        const fetchServiceProvider = async () => {
            const {success, response} = await getServiceProvider();

            if (success) {
                setServiceProvider(response.data);
            } else {
                notifyError(response);
                setServiceProvider(null);
            }
            setIsLoading(false);
        }
        fetchServiceProvider();
    }, []);

    const onEdit = async () => {
        if (!serviceProvider?.image) {
            notifyWarning("يجب رفع شعار مزود الخدمة");
            return;
        }
        setIsLoading(true);
        const {success, response} = await editServiceProvider(serviceProvider, setServiceProvider);
        if (success) {
            notifySuccess("تم التعديل بنجاح");
        } else {
            notifyError(response);
        }
        setIsLoading(false);
    }

    if (isLoading || !serviceProvider) return <Spinner/>;

    return (
        <FormProvider {...methods}>
            <div className="flex flex-row flex-wrap gap-5 p-4">
                <div className="flex-5">
                    <GeneralDetails onEdit={onEdit}/>
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
