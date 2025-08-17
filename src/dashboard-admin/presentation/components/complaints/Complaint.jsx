import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import {formatDate} from "../../../../shared/shared/utils/formatDate.js";
import Button from "@mui/material/Button";
import ConfirmActionModalWithMUI from "../../../../shared/presentation/components/ConfirmActionModal.jsx";
import {useState} from "react";

const Complaint = ({id, type, date, name, phone, reason, onAccept, onReject}) => {
    const [acceptModel, setAcceptModel] = useState(false);
    const [rejectModel, setRejectModel] = useState(false);

    return (
        <div
            className="w-full min-h-[90px] flex flex-row flex-wrap items-center justify-between gap-6 rounded-[15px] py-4"
            style={{
                backgroundColor: BACKGROUND_COLORS.filter,
                color: TEXT_COLORS.primary,
                fontFamily: 'Cairo',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '1.4',
                letterSpacing: '3%',
                textAlign: 'center'
            }}
            key={type + id}
        >
            <span className="w-[120px]">{formatDate(date)}</span>
            <span className="w-[140px]">{name}</span>
            <span className="w-[140px]">{phone}</span>
            <span className="w-[400px]">{reason}</span>
            <div className="flex flex-col items-center gap-3 w-[180px]">
                <Button variant="contained"
                        onClick={() => setAcceptModel(true)}
                        sx={{backgroundColor: BACKGROUND_COLORS.accept, ...statusSx}}
                >
                    قبول
                </Button>
                <Button
                    variant="contained"
                    onClick={() => setRejectModel(true)}
                    sx={{backgroundColor: BACKGROUND_COLORS.delete, ...statusSx}}
                >
                    رفض
                </Button>
            </div>
            <ConfirmActionModalWithMUI
                open={acceptModel}
                onClose={() => setAcceptModel(false)}
                onConfirm={onAccept}
                type={"القبول"}
                withReason={false}
            />
            <ConfirmActionModalWithMUI
                open={rejectModel}
                onClose={() => setRejectModel(false)}
                onConfirm={onReject}
                type={"الرفض"}
                withReason={false}
            />
        </div>
    )
}
export default Complaint
const statusSx = {
    width: 150,
    height: 30,
    borderRadius: '25px',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '100%',
    letterSpacing: '3%',
    textAlign: 'center'
};