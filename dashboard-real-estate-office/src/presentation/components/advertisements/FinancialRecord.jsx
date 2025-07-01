import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";
import {formatDate} from "../../../shared/utils/formatDate.js";
import {formatPrice} from "../../../shared/utils/formatPrice.js";
import Button from "@mui/material/Button";

const FinancialRecord = ({record: {id, type, date, number, price, status, document}}) => {
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
            <span className="min-w-[73px] h-[20px]">{id}</span>
            <span className="min-w-[110px] h-[20px]">{formatDate(date)}</span>
            <span className="min-w-[140px] h-[20px]">{type}</span>
            <span className="min-w-[140px] h-[20px]">{number} أيام</span>
            <span className="min-w-[110px] h-[20px]">{formatPrice(price)} $</span>
            <span className="min-w-[120px] h-[20px]"
                  style={{
                      color: (status === 'قيد الإنتظار' ? TEXT_COLORS.reserved :
                          (status === 'تم الدفع' ? TEXT_COLORS.sold : TEXT_COLORS.cancelled))
                  }}>
                {status}
            </span>
            <div className="min-w-[140px] h-[20px] flex items-center">
                {status !== 'لم يتم الدفع' ?
                    <Button variant="contained"
                            onClick={onPress}
                            sx={{
                                width: 115,
                                height: 46,
                                backgroundColor: document ? BACKGROUND_COLORS.sidebar : BACKGROUND_COLORS.card,
                                color: document ? TEXT_COLORS.primary : TEXT_COLORS.white,
                                borderRadius: '15px',
                                fontWeight: 700,
                                fontSize: '16px',
                                lineHeight: '100%',
                                letterSpacing: '3%',
                                textAlign: 'center'
                            }}>
                        {document ? 'عرض وثيقة' : 'رفع وثيقة'}
                    </Button> : null
                }
            </div>
        </div>
    )
}
export default FinancialRecord
