import {BACKGROUND_COLORS, DASHBOARD_CARDS_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import star from '../../../assets/shared/star.svg';
import phone from '../../../assets/services/phone.svg';
import locationIcon from '../../../assets/services/location.svg';

const Service = ({service: {id, name, location, userPhone, career, logo, avgRate, openTime, closeTime}}) => {
    return (
        <div
            className="flex flex-row flex-wrap justify-around items-center rounded-[12px] min-h-[112px] gap-6 p-4"
            key={id}
            style={{
                color: TEXT_COLORS.primary,
                backgroundColor: BACKGROUND_COLORS.secondary2,
                fontFamily: 'Cairo',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
            }}
        >
            {/*logo*/}
            <div className="flex flex-row justify-between items-center w-[230px] h-[85px]">
                <div
                    className="w-[85px] h-[85px] rounded-full flex-shrink-0 bg-[#C3DFED] border-[3px]"
                    style={{borderColor: DASHBOARD_CARDS_COLORS.earnings}}
                >
                    {logo && (
                        <img
                            src={logo}
                            alt="profile"
                            className="w-full h-full rounded-full object-cover"
                        />
                    )}
                </div>
                <div className="flex flex-col justify-around items-start w-[120px] h-full">
                    <span style={{fontWeight: 700, color: TEXT_COLORS.post}}>{name}</span>
                    <div className="flex flex-row gap-1 w-full">
                        <img src={locationIcon} className="w-[14px] h-[14px]"/>
                        <span style={{fontWeight: 400, fontSize: '14px'}}>{location}</span>
                    </div>
                </div>
            </div>

            {/*service type*/}
            <span className="w-[150px]">{career}</span>

            {/*open and close time*/}
            <div className="flex flex-col justify-around h-[60px] w-[130px]">
                <span>{openTime}</span>
                <span>{closeTime}</span>
            </div>

            {/*rate*/}
            <div className="flex flex-row justify-around items-center w-[48px]">
                <img src={star} className="w-[14px] h-[14px]"/>
                <span style={{fontFamily: 'Montserrat', fontWeight: 700, fontSize: '14px',}}>{avgRate}</span>
            </div>

            {/*communication*/}
            <div className="flex flex-row justify-around items-center w-[200px]">
                <span>{userPhone}</span>
                <img src={phone} className="w-[30px] h-[30px]"/>
            </div>
        </div>
    )
}
export default Service
