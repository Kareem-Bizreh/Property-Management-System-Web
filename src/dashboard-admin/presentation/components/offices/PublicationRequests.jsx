import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import property_rent from "../../../../shared/assets/cards/property_rent.png"
import map from "../../../../shared/assets/cards/map.svg";
import {formatPrice} from "../../../../shared/shared/utils/formatPrice.js";
import Button from "@mui/material/Button";
import locationIcon from "../../../../shared/assets/cards/location.svg";

const PublicationRequests = ({
                                 type, postTitle, location, officeLocation, duration,
                                 officeName, image, amount, onAccept, onReject
                             }) => {
    return (
        <div
            className="w-full min-h-[160px] flex flex-row flex-wrap items-center justify-between gap-6 rounded-[25px] px-3 py-2"
            style={{
                backgroundColor: BACKGROUND_COLORS.filter,
                color: TEXT_COLORS.primary,
                fontFamily: 'Cairo',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '3%',
                textAlign: 'center'
            }}
        >
            <img alt="image" src={image || property_rent} className="w-[150px] h-[140px] object-cover rounded-[18px]"/>
            <div className="w-[140px] flex flex-col items-start gap-5" style={{fontFamily: 'Tajawal'}}>
                <span style={{color: TEXT_COLORS.black, fontSize: '18px'}}>{postTitle}</span>
                <div className="flex flex-row items-center gap-1">
                    <img className="w-[21px] h-[21px]" src={locationIcon} alt="location"/>
                    <span style={{fontFamily: 'Tajawal', fontWeight: '400'}}>{location}</span>
                </div>
            </div>
            <span className="w-[70px]" style={{fontSize: '16px'}}>{type}</span>
            <div className="w-[220px] flex flex-col items-center justify-between gap-4">
                <span>{officeName}</span>
                <div className="flex flex-row items-center gap-2">
                    <img className="w-[18px] h-[18px]" src={map} alt="map"/>
                    <span style={{color: TEXT_COLORS.primary, fontWeight: '400'}}>{officeLocation}</span>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 w-[100px]">
                <span style={{fontSize: '18px', fontFamily: 'Montserrat', fontWeight: 600}}>
                    {formatPrice(amount)} $
                </span>
                <span style={{fontWeight: 500}}>{duration}</span>
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
export default PublicationRequests

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