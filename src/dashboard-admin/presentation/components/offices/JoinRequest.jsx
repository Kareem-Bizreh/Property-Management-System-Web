import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import {formatDate} from "../../../../shared/shared/utils/formatDate.js";
import Button from "@mui/material/Button";
import map from "../../../../shared/assets/cards/map.svg";

const JoinRequest = ({date, type, name, location, document, onAccept, onReject}) => {
    function onPress() {
        window.open(document, '_blank');
    }

    return (
        <div
            className="w-full min-h-[90px] flex flex-row flex-wrap items-center justify-between gap-6 rounded-[15px] py-4"
            style={{
                backgroundColor: BACKGROUND_COLORS.filter,
                color: TEXT_COLORS.primary,
                fontFamily: 'Cairo',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '3%',
                textAlign: 'center'
            }}
        >
            <span className="w-[120px]">{formatDate(date)}</span>
            <span className="w-[120px]">{type}</span>
            <span className="w-[140px]">{name}</span>
            <div className="w-[150px] flex justify-center">
                <Button
                    variant="contained"
                    sx={buttonSx}
                >
                    <span>عرض الموقع</span>
                    <img className="w-[18px] h-[18px] mr-2" src={map} alt="map"/>
                </Button>
            </div>
            <div className="w-[150px] flex justify-center">
                <Button
                    variant="contained"
                    onClick={onPress}
                    sx={buttonSx}
                >
                    عرض الوثيقة
                </Button>
            </div>
            <div className="flex flex-col items-center gap-3 w-[200px]">
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
export default JoinRequest

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

const buttonSx = {
    backgroundColor: BACKGROUND_COLORS.app,
    color: TEXT_COLORS.primary,
    width: 140,
    height: 40,
    borderRadius: '15px',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: '3%',
    textAlign: 'center',
};
