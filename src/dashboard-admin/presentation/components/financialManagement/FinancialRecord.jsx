import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import {formatDate} from "../../../../shared/shared/utils/formatDate.js";
import {formatPrice} from "../../../../shared/shared/utils/formatPrice.js";
import Button from "@mui/material/Button";

const FinancialRecord = ({record: {id, paid_date, office_name, type, day_period, amount, image}}) => {
    function onPress() {
        if (image && image.length > 0) {
            window.open(image, '_blank');
        }
    }

    return (
        <div
            key={id}
            className="h-auto min-h-[85px] flex flex-row flex-wrap justify-between items-center gap-6 mt-2 py-6 rounded-[25px] w-full"
            style={{
                backgroundColor: BACKGROUND_COLORS.filter,
                color: TEXT_COLORS.primary,
                fontFamily: 'Cairo',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '18px',
                letterSpacing: '3%',
                textAlign: 'center',
            }}
        >
            <span className="w-[110px] h-[20px]">{formatDate(paid_date) || "----"}</span>
            <span className="w-[200px] h-[20px] break-words">{office_name}</span>
            <span className="w-[120px] h-[20px]">{type}</span>
            <span className="w-[110px] h-[20px]">{day_period} أيام</span>
            <span className="w-[110px] h-[20px]">{formatPrice(amount)} $</span>
            <div className="w-[140px] h-[20px] flex items-center">
                <Button variant="contained"
                        onClick={onPress}
                        sx={{
                            width: 115,
                            height: 46,
                            backgroundColor: BACKGROUND_COLORS.sidebar,
                            color: TEXT_COLORS.primary,
                            borderRadius: '15px',
                            fontWeight: 700,
                            fontSize: '16px',
                            lineHeight: '100%',
                            letterSpacing: '3%',
                            textAlign: 'center'
                        }}
                >
                    عرض وثيقة
                </Button>
            </div>
        </div>
    )
}
export default FinancialRecord
