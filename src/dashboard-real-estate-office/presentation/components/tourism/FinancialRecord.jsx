import {useRef} from "react";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import {formatDate} from "../../../../shared/shared/utils/formatDate.js";
import {formatPrice} from "../../../../shared/shared/utils/formatPrice.js";
import Button from "@mui/material/Button";

const FinancialRecord = ({
                             record: {
                                 id, reason, startDate, endDate, phone,
                                 paymentMethod, amount, status, invoiceImage
                             }, upload
                         }) => {
    const fileInputRef = useRef(null);

    const onPress = () => {
        if (status !== 'قيد الانتظار') {
            window.open(invoiceImage, "_blank");
        } else {
            fileInputRef.current?.click();
        }
    };

    const handleFileChange = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const {success, response} = await upload(id, file);
        if (success) {
            alert("تم رفع الوثيقة بنجاح");
            window.location.reload();
        } else {
            alert(response);
        }
    };

    return (
        <div
            className="min-h-[85px] w-full h-auto rounded-[25px] flex flex-row flex-wrap justify-between items-center py-4"
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
            <div className="flex flex-col items-center justify-center h-[56px] min-w-[144px] gap-4">
                <span>{formatDate(startDate)}</span>
                <span>{formatDate(endDate)}</span>
            </div>
            <span className="min-w-[170px] h-[20px]">{phone}</span>
            <span className="min-w-[170px] h-[20px]">{reason}</span>
            <span className="min-w-[170px] h-[20px]">{status !== 'قيد الانتظار' ? paymentMethod : '----'}</span>
            <span className="min-w-[110px] h-[20px]">{formatPrice(amount)} $</span>
            <div className="flex flex-row items-center justify-center px-4 w-[300px]">
                <span className="min-w-[140px] h-[20px]"
                    style={{
                        color: (status === 'قيد الانتظار' ? TEXT_COLORS.reserved :
                            (status === 'تم الدفع' ? TEXT_COLORS.sold : TEXT_COLORS.cancelled))
                    }}
                >
                        {status}
                    </span>
                {status !== 'لم يتم الدفع' &&
                    <>
                        <Button
                            variant="contained"
                            onClick={onPress}
                            disabled={status === 'قيد الانتظار' && paymentMethod === 'دفع الكتروني'}
                            sx={{
                                width: 115,
                                height: 46,
                                backgroundColor: status === 'قيد الانتظار' ? BACKGROUND_COLORS.card : BACKGROUND_COLORS.sidebar,
                                color: status === 'قيد الانتظار' ? TEXT_COLORS.white : TEXT_COLORS.primary,
                                borderRadius: '15px',
                                fontWeight: 700,
                                fontSize: '16px',
                                lineHeight: '100%',
                                letterSpacing: '3%',
                                textAlign: 'center'
                            }}
                        >
                            {status === 'قيد الانتظار' ? 'رفع وثيقة' : 'عرض وثيقة'}
                        </Button>

                        <input
                            type="file"
                            accept="image/*,application/pdf"
                            className="hidden"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                    </>
                }
            </div>
        </div>
    )
}
export default FinancialRecord
