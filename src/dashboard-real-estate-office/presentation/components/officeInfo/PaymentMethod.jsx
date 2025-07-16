import {BACKGROUND_COLORS} from "../../../../shared/colors.jsx";
import Header from "./Header.jsx";
import Button from "@mui/material/Button";
import CreditCard from "./CreditCard.jsx";
import coinHand from "../../../assets/office-info/coin-hand.svg"

const PaymentMethod = () => {
    return (
        <div className="flex flex-col flex-1 justify-around items-center rounded-[25px] px-4 min-h-[300px]"
             style={{backgroundColor: BACKGROUND_COLORS.secondary2}}
        >
            <Header title={'طريقة الدفع'} fontSize={'18px'}/>
            <CreditCard/>
            <Button variant="contained"
                // onClick={onPress}
                    sx={{
                        width: 160,
                        height: 47,
                        color: BACKGROUND_COLORS.app,
                        backgroundColor: BACKGROUND_COLORS.primary,
                        borderRadius: '25px',
                        fontWeight: 700,
                        fontSize: '16px',
                        lineHeight: '100%',
                        letterSpacing: '3%',
                        textAlign: 'center'
                    }}>
                تعديل
            </Button>
        </div>
    )
}
export default PaymentMethod
