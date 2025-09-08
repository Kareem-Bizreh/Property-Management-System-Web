import {BACKGROUND_COLORS, TEXT_COLORS as TeXT_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import {formatDate} from "../../../../shared/shared/utils/formatDate.js";
import {formatPrice} from "../../../../shared/shared/utils/formatPrice.js";
import Button from "@mui/material/Button";
import {useState} from "react";
import ConfirmActionModalWithMUI from "../../../../shared/presentation/components/ConfirmActionModal.jsx";

const FinancialRecord = ({
                             record: {id, start_date, office_name, type, active_days, amount, image, title},
                             onAccept, onReject
                         }) => {
    function onPress() {
        if (image && image.length > 0) {
            window.open(image, '_blank');
        }
    }

    const [acceptModel, setAcceptModel] = useState(false);
    const [rejectModel, setRejectModel] = useState(false);

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
            <span className="w-[100px] min-h-[20px]">{formatDate(start_date) || "----"}</span>
            <span className="w-[200px] min-h-[20px]" style={{lineHeight: '1.4'}}>{office_name}</span>
            <span className="w-[110px] min-h-[20px]">{type}</span>
            <span className="w-[100px] min-h-[20px]">{active_days}</span>
            <span className="w-[100px] min-h-[20px]">{formatPrice(amount)} $</span>
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
                    <span className="p-2" style={{lineHeight: '24px'}}>{title}</span>
                }
            </div>
            {onAccept && onReject &&
                <div className="w-fit">
                    <div className="flex flex-col items-center gap-3">
                        <Button variant="contained"
                                onClick={() => setAcceptModel(true)}
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
                            onClick={() => setRejectModel(true)}
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
            <ConfirmActionModalWithMUI
                open={rejectModel}
                onClose={() => setRejectModel(false)}
                onConfirm={(reason) => onReject(id, reason)}
                type={"الرفض"}
            />
            <ConfirmActionModalWithMUI
                open={acceptModel}
                onClose={() => setAcceptModel(false)}
                onConfirm={() => onAccept(id)}
                type={"القبول"}
                withReason={false}
            />
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