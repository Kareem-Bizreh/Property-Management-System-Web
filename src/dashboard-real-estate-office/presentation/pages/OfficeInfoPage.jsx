import Logo from "../components/officeInfo/Logo.jsx";
import PaymentMethod from "../components/officeInfo/PaymentMethod.jsx";
import GeneralDetails from "../components/officeInfo/GeneralDetails.jsx";
import Fees from "../components/officeInfo/Fees.jsx";

const OfficeInfoPage = () => {
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
        </div>
    )
}
export default OfficeInfoPage
