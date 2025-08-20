import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../colors.jsx";
import {useNavigate} from "react-router";
import star from '../../../assets/shared/star.svg'
import locationIcon from "../../../assets/cards/location.svg";
import property_rent from "../../../assets/cards/property_rent.png";
import {formatPrice} from "../../../shared/utils/formatPrice.js";

const PropertyRentCard = ({
                              property: {id, postTitle, rate, location, rent_details, postStatus, postImage, status},
                              onClick = true
                          }) => {
    const finalStatus = postStatus !== "مقبول" ? postStatus : status;
    const navigate = useNavigate();

    return (
        <div
            className={`${onClick ? 'cursor-pointer' : 'select-none'}`}
            onClick={() => {
                if (onClick) {
                    navigate(`/real-estate-office/my-properties/${id}`)
                }
            }}
            title={onClick ? `/real-estate-office/my-properties/${id}` : ''}
        >
            <div className="relative w-[212px] h-[363px] rounded-[25px]"
                 style={{backgroundColor: BACKGROUND_COLORS.secondary1}}>
                <div
                    className="absolute w-[189px] h-[177px] top-[8px] rounded-[18px] right-1/2 transform translate-x-1/2 overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src={(postImage && postImage.length > 0) ? postImage : property_rent}
                        alt="image"
                    />
                </div>
                <span
                    className="absolute w-[111px] h-[22px] top-[159px] right-[80px] rounded-[5px] z-1"
                    style={{
                        backgroundColor: (finalStatus === 'متوفر' ? BACKGROUND_COLORS.card :
                            (finalStatus !== "قيد الانتظار" ? BACKGROUND_COLORS.unavailable : BACKGROUND_COLORS.pending)),
                        fontFamily: 'Cairo',
                        fontWeight: '700',
                        fontSize: '14px',
                        lineHeight: '18px',
                        letterSpacing: '3%',
                        textAlign: 'center',
                        color: TEXT_COLORS.white,
                    }}
                >
                    {finalStatus}
            </span>
                <span
                    className="absolute w-[54px] h-[22px] top-[159px] right-[22px] rounded-[5px] z-1"
                    style={{
                        backgroundColor: BACKGROUND_COLORS.card,
                        fontFamily: 'Cairo',
                        fontWeight: '700',
                        fontSize: '14px',
                        lineHeight: '18px',
                        letterSpacing: '3%',
                        textAlign: 'center',
                        color: TEXT_COLORS.white,
                    }}
                >
                    للإيجار
            </span>
                <span
                    className="absolute w-[138px] h-[45px] top-[195px] mr-5"
                    style={{
                        fontFamily: 'Tajawal',
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '18px',
                        letterSpacing: '3%',
                        textAlign: 'right'
                    }}
                >
                    {postTitle}
                </span>
                <div className="absolute flex flex-row top-[250px] mr-5 gap-0.5">
                    <img
                        className="w-[21px] h-[21px]"
                        src={star}
                        alt="rate"
                    />
                    <span
                        style={{
                            color: TEXT_COLORS.primary,
                            fontFamily: 'Montserrat',
                            fontWeight: '700',
                            fontSize: '16px',
                            letterSpacing: '0%',
                            verticalAlign: 'center',
                        }}
                    >
                        {rate}
                    </span>
                </div>
                <div className="absolute flex flex-row top-[280px] mr-5 gap-1">
                    <img
                        className="w-[21px] h-[21px]"
                        src={locationIcon}
                        alt="location"
                    />
                    <span
                        style={{
                            color: TEXT_COLORS.primary,
                            fontFamily: 'Tajawal',
                            fontWeight: '400',
                            fontSize: '14px',
                            letterSpacing: '0%',
                        }}
                    >
                        {location}
                    </span>
                </div>
                <div
                    className="absolute flex flex-row w-full h-[22px] top-[325px] justify-center items-center whitespace-nowrap">
                    <span
                        style={{
                            color: TEXT_COLORS.primary,
                            fontFamily: 'Montserrat',
                            fontWeight: '600',
                            fontSize: '20px',
                            lineHeight: '100%',
                            letterSpacing: '3%',
                        }}
                    >
                        {formatPrice(rent_details.price)} $
                    </span>
                    <span className="mt-1 mr-2"
                          style={{
                              color: TEXT_COLORS.primary,
                              fontFamily: 'Cairo',
                              fontWeight: '500',
                              fontSize: '14px',
                              letterSpacing: '3%',
                          }}
                    >
                        {rent_details.rental_period}
                    </span>
                </div>
            </div>
        </div>

    )
}
export default PropertyRentCard
