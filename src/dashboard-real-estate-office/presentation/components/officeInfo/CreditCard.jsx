import chip from "../../../assets/office-info/chip.svg"
import wallet from "../../../assets/office-info/wallet.svg"
import calendar from "../../../assets/office-info/calendar.svg"
import {useForm} from "react-hook-form";

const CreditCard = () => {
    const {register} = useForm();

    return (
        <div className="relative w-[245px] h-[150px] rounded-[24px] bg-[radial-gradient(circle,_#30B0C7,_#2790A3)]">
            <img src={chip} alt="chip" className="absolute top-[10px] left-[15px]"/>

            <div className="relative w-[40px] h-[40px] top-[118px] right-[10px]">
                <div className="absolute left-[14px] top-0 w-[23px] h-[23px] rounded-full bg-blue-300 opacity-50 z-1" />
                <div className="absolute left-0 top-0 w-[23px] h-[23px] rounded-full bg-white" />
            </div>
        </div>
    )
}
export default CreditCard
