import Logo from "../components/officeInfo/Logo.jsx";
import PaymentMethod from "../components/officeInfo/PaymentMethod.jsx";
import GeneralDetails from "../components/officeInfo/GeneralDetails.jsx";
import Fees from "../components/officeInfo/Fees.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";

const OfficeInfoPage = () => {
    const {isLoading} = useLoadingStore()
    return (
        <div className="flex flex-col px-4 pt-4 gap-5">
            <div className="flex flex-row flex-wrap gap-5 h-auto">
                <div className="flex-5">
                    <GeneralDetails/>
                </div>
                <div className="flex flex-col gap-4 w-[290px] flex-2">
                    <Logo/>
                    <PaymentMethod/>
                </div>
            </div>
            <Fees/>
            {(isLoading ? (<Spinner/>) : null)}
        </div>
    )
}
export default OfficeInfoPage
