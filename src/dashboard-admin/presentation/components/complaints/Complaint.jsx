import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import {formatDate} from "../../../../shared/shared/utils/formatDate.js";
import Button from "@mui/material/Button";

const Complaint = ({date, name, phone, reason, onAccept, onReject}) => {
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
        >
            <span className="w-[120px]">{formatDate(date)}</span>
            <span className="w-[140px]">{name}</span>
            <span className="w-[140px]">{phone}</span>
            <span className="w-[400px]">{reason}</span>
            <div className="flex flex-col items-center gap-3 w-[180px]">
                <Button variant="contained"
                        onClick={onAccept}
                        sx={{backgroundColor: BACKGROUND_COLORS.accept, ...statusSx}}
                >
                    قبول
                </Button>
                <Button
                    variant="contained"
                    onClick={onReject}
                    sx={{backgroundColor: BACKGROUND_COLORS.delete, ...statusSx}}
                >
                    رفض
                </Button>
            </div>
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