import {useEffect} from "react";
import {FormProvider, useForm} from "react-hook-form";
import Logo from "../../../shared/presentation/components/office/Logo.jsx";
import PaymentMethod from "../components/officeInfo/PaymentMethod.jsx";
import GeneralDetails from "../components/officeInfo/GeneralDetails.jsx";
import Fees from "../components/officeInfo/Fees.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import useOfficeStore from "../../application/state/office/useOfficeStore.jsx";
import {getOfficeDetails} from "../../application/useCases/office/getOfficeDetailsUseCase.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";
import {editOfficeDetails} from "../../application/useCases/office/editOfficeDetailsUseCase.jsx";

const OfficeInfoPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {office, setOffice} = useOfficeStore();
    const {notifySuccess, notifyError, notifyWarning} = useNotification();
    const methods = useForm()

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const {success, response} = await getOfficeDetails();
            if (success) {
                setOffice(response.data);
            } else {
                setOffice(null);
                notifyError(response);
            }
            setIsLoading(false);
        }
        fetchData()
    }, []);

    const onEdit = async () => {
        const creditCard = methods.watch("creditCard").replace(/\s+/g, "");
        setOffice({...office, creditCard});
        if (creditCard.length !== 16 && office.stripe_payment) {
            notifyWarning("يجب ان تكون بطاقة الدفع الالكتروني من 16 رقم");
            return;
        }
        setIsLoading(true);
        const {success, response} = await editOfficeDetails(office, creditCard);
        if (success) {
            notifySuccess("تم حفظ التعديلات بنجاح");
            if (office.image instanceof File) {
                setOffice({...office, image: URL.createObjectURL(office.image)});
            }
        } else {
            notifyError(response[0]);
        }
        setIsLoading(false);
    }

    if (isLoading || !office) return <Spinner/>;

    return (
        <FormProvider {...methods}>
            <div className="flex flex-col px-4 pt-4 gap-5">
                <div className="flex flex-row flex-wrap gap-5 h-auto">
                    <div className="flex-5">
                        <GeneralDetails/>
                    </div>
                    <div className="flex flex-col gap-4 w-[290px] flex-2">
                        <Logo office={office} setOffice={setOffice} name={'المكتب'}/>
                        <PaymentMethod/>
                    </div>
                </div>
                <Fees onEdit={onEdit}/>
            </div>
        </FormProvider>
    )
}
export default OfficeInfoPage
