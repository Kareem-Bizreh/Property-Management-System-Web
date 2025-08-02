import {useRef} from "react";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import {formatDate} from "../../../shared/utils/formatDate.js";
import {formatPrice} from "../../../shared/utils/formatPrice.js";
import Button from "@mui/material/Button";
import {uploadInvoiceDocument} from "../../../application/useCases/userPropertyInvoices/uploadDocumentUseCase.jsx";

const FinancialRecord = ({
                             record: {
                                 id, reason, belling_period_start, paymentMethod,
                                 amount, status, invoiceImage, deadline
                             }
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

        const {success, response} = await uploadInvoiceDocument(id, file);
        if (success) {
            alert("تم رفع الوثيقة بنجاح");
            window.location.reload();
        } else {
            alert(response);
        }
    };

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
            <span
                className="min-w-[110px] h-[20px]">{status !== 'قيد الانتظار' ? formatDate(belling_period_start) : '----'}</span>
            <span className="min-w-[170px] h-[20px]">{reason}</span>
            <span className="min-w-[170px] h-[20px]">{status !== 'قيد الانتظار' ? paymentMethod : '----'}</span>
            <span className="min-w-[110px] h-[20px]">{formatPrice(amount)} $</span>
            <div className="flex flex-row items-center justify-center gap-2 px-4 w-[300px]">
                <div className="flex flex-col items-center justify-center h-[56px] min-w-[144px] gap-4">
                    <span
                        style={{
                            color: (status === 'قيد الانتظار' ? TEXT_COLORS.reserved :
                                (status === 'تم الدفع' ? TEXT_COLORS.sold : TEXT_COLORS.cancelled))
                        }}>
                        {status}
                    </span>
                    {status === 'قيد الانتظار' && <span>{formatDate(deadline)}</span>}
                </div>
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
