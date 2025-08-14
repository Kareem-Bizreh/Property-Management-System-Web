import {BACKGROUND_COLORS, TEXT_COLORS as TeXT_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import {formatDate} from "../../../../shared/shared/utils/formatDate.js";
import {formatPrice} from "../../../../shared/shared/utils/formatPrice.js";
import Button from "@mui/material/Button";

const FinancialRecord = ({record: {id, paid_date, mid, type, day_period, amount, document}, propertyName, control}) => {
    function onPress() {
        if (document && document.length > 0) {
            window.open(document, '_blank');
        }
    }

    return (
        <div
            key={id}
            className="h-auto min-h-[85px] flex flex-row flex-wrap justify-between items-center gap-6 mt-2 py-6 px-3 rounded-[25px] w-full"
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
            <span className="min-w-[100px] h-[20px]">{formatDate(paid_date) || "----"}</span>
            <span className="min-w-[130px] h-[20px]">{mid}</span>
            <span className="min-w-[110px] h-[20px]">{type}</span>
            <span className="min-w-[100px] h-[20px]">{day_period} أيام</span>
            <span className="min-w-[100px] h-[20px]">{formatPrice(amount)} $</span>
            <div className="w-[180px] h-[20px] flex items-center justify-center">
                {type === 'إعلان صوري' ?
                    <Button variant="contained"
                            onClick={onPress}
                            sx={{
                                width: 120,
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
                        عرض الصورة
                    </Button> :
                    <span className="p-2" style={{lineHeight: '24px'}}>{propertyName}</span>
                }
            </div>
            {control &&
                <div className="w-fit">
                    <div className="flex flex-col items-center gap-3">
                        <Button variant="contained"
                                // onClick={close}
                                sx={{
                                    width: 150,
                                    height: 30,
                                    backgroundColor: BACKGROUND_COLORS.accept,
                                    borderRadius: '25px',
                                    ...sharedSx
                                }}>
                            قبول
                        </Button>
                        <Button
                            variant="contained"
                            // onClick={handleSubmit(onPress)}
                            sx={{
                                width: 150,
                                height: 30,
                                backgroundColor: BACKGROUND_COLORS.delete,
                                borderRadius: '25px',
                                ...sharedSx
                            }}>
                            رفض
                        </Button>
                    </div>
                </div>}
        </div>
    )
}
export default FinancialRecord

const sharedSx = {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '100%',
    letterSpacing: '3%',
    textAlign: 'center'
};