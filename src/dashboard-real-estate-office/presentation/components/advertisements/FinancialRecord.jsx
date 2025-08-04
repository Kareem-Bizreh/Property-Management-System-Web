import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import {formatDate} from "../../../shared/utils/formatDate.js";
import {formatPrice} from "../../../shared/utils/formatPrice.js";
import Button from "@mui/material/Button";

const FinancialRecord = ({
                             record: {
                                 advertisement_id, type, paid_date,
                                 day_period, amount, advertisement_status, document
                             }
                         }) => {
    function onPress() {
        if (document && document.length > 0) {
            window.open(document, '_blank');
        }
    }

    return (
        <div
            className="h-auto min-h-[85px] flex flex-row flex-wrap justify-between items-center gap-6 mt-2 py-6 rounded-[25px]"
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
            <span className="min-w-[73px] h-[20px]">{advertisement_id}</span>
            <span className="min-w-[110px] h-[20px]">{formatDate(paid_date) || "----"}</span>
            <span className="min-w-[140px] h-[20px]">{type}</span>
            <span className="min-w-[140px] h-[20px]">{day_period} أيام</span>
            <span className="min-w-[110px] h-[20px]">{formatPrice(amount)} $</span>
            <span className="min-w-[120px] h-[20px]"
                  style={{
                      color: (advertisement_status === 'قيد الانتظار' ? TEXT_COLORS.reserved :
                          (advertisement_status === 'مدفوع' ? TEXT_COLORS.sold : TEXT_COLORS.cancelled))
                  }}>
                {advertisement_status}
            </span>
            <div className="min-w-[140px] h-[20px] flex items-center">
                <Button variant="contained"
                        disabled={advertisement_status !== 'مدفوع' || !document}
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
