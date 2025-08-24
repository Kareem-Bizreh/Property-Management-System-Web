import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import Header from "./Header.jsx";
import CreditCard from "../../../../shared/presentation/components/financial/CreditCard.jsx";
import coinHand from "../../../../shared/assets/office-info/coin-hand.svg"
import {Checkbox} from "@mui/material";
import useOfficeStore from "../../../application/state/office/useOfficeStore.jsx";

const PaymentMethod = () => {
    const {office, setOffice} = useOfficeStore();
    const paymentMethod = office?.payment_method;

    return (
        <div className="flex flex-col flex-1 items-center rounded-[25px] p-4 justify-around"
             style={{
                 backgroundColor: BACKGROUND_COLORS.secondary2,
                 color: TEXT_COLORS.primary,
                 fontFamily: 'Cairo',
                 fontWeight: 700,
                 fontSize: '16px',
                 lineHeight: '100%',
                 letterSpacing: '3%',
                 textAlign: 'center',

             }}
        >
            <Header title={'طريقة الدفع'} fontSize={'18px'}/>
            <div className="grid grid-cols-[auto_auto_1fr] grid-rows-2 place-items-center gap-2">
                <Checkbox
                    checked={paymentMethod === "both" || paymentMethod === "دفع يدوي"}
                    onChange={(e) => {
                        if (e.target.checked) {
                            setOffice({
                                ...office,
                                payment_method: paymentMethod === "دفع الكتروني" ? "both" : "دفع يدوي"
                            })
                        } else {
                            setOffice({
                                ...office,
                                payment_method: paymentMethod === "both" ? "دفع الكتروني" : ""
                            })
                        }
                    }}
                    sx={{'&.Mui-checked': {color: BACKGROUND_COLORS.button}}}
                />
                <img
                    src={coinHand}
                    alt="دفع يدوي"
                />
                <span>الدفع اليدوي</span>
                <Checkbox
                    checked={paymentMethod === "both" || paymentMethod === "دفع الكتروني"}
                    onChange={(e) => {
                        if (e.target.checked) {
                            setOffice({
                                ...office,
                                payment_method: paymentMethod === "دفع يدوي" ? "both" : "دفع الكتروني"
                            })
                        } else {
                            setOffice({
                                ...office,
                                payment_method: paymentMethod === "both" ? "دفع يدوي" : ""
                            })
                        }
                    }}
                    sx={{'&.Mui-checked': {color: BACKGROUND_COLORS.button}}}
                />
                <img
                    src={coinHand}
                    alt="دفع الالكتروني"
                />
                <span>الدفع الالكتروني</span>
            </div>
            <CreditCard/>
        </div>
    )
}
export default PaymentMethod
