import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import property_tourist from "../../../../shared/assets/cards/property_tourist.jpg";
import map from "../../../../shared/assets/cards/map.svg";
import star from "../../../../shared/assets/shared/star.svg";
import alert from "../../../assets/complaints/alert.svg";
import {Link} from "react-router";

const OfficeCard = ({image, type, name, location, rate, id, complaints, officeType}) => {

    return (
        <Link to={`/admin/offices/${id}?officeType=${officeType}`}>
            <div className="w-[245px] flex flex-col items-center p-4 rounded-[25px] gap-4"
                 style={{
                     backgroundColor: BACKGROUND_COLORS.secondary1,
                     fontFamily: 'Cairo',
                     fontWeight: '700',
                     fontSize: '14px',
                     lineHeight: '16px',
                     letterSpacing: '3%',
                     textAlign: 'center',
                 }}
                 key={officeType + id}
            >
                <div className="flex flex-col items-center">
                    <img src={image || property_tourist} alt="image"
                         className="w-[180px] h-[175px] rounded-full object-cover object-center"
                    />
                    <span
                        className="rounded-[5px] z-1 w-[110px] min-h-[22px] -mt-5"
                        style={{
                            backgroundColor: BACKGROUND_COLORS.card,
                            borderColor: 'white',
                            borderWidth: '1px',
                            color: TEXT_COLORS.white,
                            lineHeight: '1.4',
                        }}
                    >
                    {type}
                </span>
                </div>
                <span style={{color: TEXT_COLORS.primary}}>{name}</span>
                <div className="flex flex-row items-center gap-2">
                    <img className="w-[18px] h-[18px]" src={map} alt="map"/>
                    <span style={{color: TEXT_COLORS.primary, fontWeight: '400'}}>{location}</span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <img className="w-[23px] h-[23px] mb-1" src={complaints !== undefined ? alert : star}/>
                    <span
                        style={{
                            color: TEXT_COLORS.primary,
                            fontFamily: 'Montserrat',
                            fontSize: '16px',
                            lineHeight: '8px',
                            verticalAlign: 'center',
                        }}
                    >
                        {complaints !== undefined ? complaints : rate}
                    </span>
                </div>
            </div>
        </Link>
    )
}
export default OfficeCard
