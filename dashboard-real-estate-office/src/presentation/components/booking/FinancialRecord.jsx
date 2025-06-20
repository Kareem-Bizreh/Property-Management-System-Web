import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";
import {formatDate} from "../../../shared/utils/formatDate.js";
import {formatPrice} from "../../../shared/utils/formatPrice.js";
import Button from "@mui/material/Button";

const FinancialRecord = ({record: {id, type, date, paymentType, price, status, document}}) => {
    function onPress() {
        if (document && document.length > 0) {
            window.open(document, '_blank');
        }
    }

    return (
        <div
            className="min-h-[85px] h-auto rounded-[25px] flex flex-row flex-wrap justify-between items-center gap-6 py-4"
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
            <span className="min-w-[110px] h-[20px]">{status !== 'قيد الإنتظار' ? formatDate(date) : '----'}</span>
            <span className="min-w-[170px] h-[20px]">{type}</span>
            <span className="min-w-[170px] h-[20px]">{status !== 'قيد الإنتظار' ? paymentType : '----'}</span>
            <span className="min-w-[110px] h-[20px]">{formatPrice(price)} $</span>
            <div className="flex flex-row items-center justify-center gap-2 px-4 w-[300px]">
                <div className="flex flex-col items-center justify-center h-[56px] min-w-[144px] gap-4">
                    <span
                        style={{
                            color: (status === 'قيد الإنتظار' ? TEXT_COLORS.reserved :
                                (status === 'تم الدفع' ? TEXT_COLORS.sold : TEXT_COLORS.cancelled))
                        }}>
                        {status}
                    </span>
                    {status === 'قيد الإنتظار' && <span>{formatDate(date)}</span>}
                </div>
                {status !== 'لم يتم الدفع' && <Button variant="contained"
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
                </Button>}
            </div>
        </div>
    )
}
export default FinancialRecord
