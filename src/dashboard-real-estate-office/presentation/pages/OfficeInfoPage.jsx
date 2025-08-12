import {useEffect} from "react";
import {FormProvider, useForm} from "react-hook-form";
import Logo from "../components/officeInfo/Logo.jsx";
import PaymentMethod from "../components/officeInfo/PaymentMethod.jsx";
import GeneralDetails from "../components/officeInfo/GeneralDetails.jsx";
import Fees from "../components/officeInfo/Fees.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import useOfficeStore from "../../application/state/office/useOfficeStore.jsx";

const OfficeInfoPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {office, setOffice} = useOfficeStore();
    const methods = useForm()

    useEffect(() => {
        setIsLoading(true);
        setOffice({
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
                <Fees/>
            </div>
        </FormProvider>
    )
}
export default OfficeInfoPage
