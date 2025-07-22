import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import {Link} from "react-router";
import property_sale from "../../../assets/cards/property_sale.jpg"
import property_tourist from "../../../assets/cards/property_tourist.jpg"
import map from "../../../assets/cards/map.svg"
import spaceIcon from "../../../assets/cards/space.svg"
import {formatPrice} from "../../../shared/utils/formatPrice.js";

const CardPropertySaleTourist = ({
                                     property: {id, status, title, location, area, sell_details = {}, postImage}, type
                                 }) => {
    const image = {
        'property_tourist': property_tourist,
        'property_sale': property_sale,
    }

    return (
        <Link to={`/real-estate-office/${type === 'sale' ? 'my-properties' : 'tourism'}/${id}`}>
            <div className="relative w-[212px] h-[363px] rounded-[25px]"
                 style={{backgroundColor: BACKGROUND_COLORS.secondary1}}>
                <div
                    className="absolute w-[189px] h-[177px] top-[8px] rounded-[18px] right-1/2 transform translate-x-1/2 overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src={(postImage && postImage.length > 0) ? postImage : image[`property_${type}`]}
                        alt="image"
                    />
                </div>
                <span
                    className="absolute w-[111px] h-[22px] top-[159px] right-[80px] rounded-[5px] z-1"
                    style={{
                        backgroundColor: (status === 'متوفر' ? BACKGROUND_COLORS.card :
                            (status !== 'قيد الإنتظار' ? BACKGROUND_COLORS.unavailable : BACKGROUND_COLORS.pending)),
                        borderColor: 'white',
                        borderWidth: (type !== 'sale' ? '1px' : '0px'),
                        fontFamily: 'Cairo',
                        fontWeight: '700',
                        fontSize: '14px',
                        lineHeight: '18px',
                        letterSpacing: '3%',
                        textAlign: 'center',
                        color: TEXT_COLORS.white,
                    }}
                >
                    {status}
            </span>
                {type === 'sale' && (
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
                    للبيع
            </span>
                )}
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
                {title}
            </span>
                <div className="absolute flex flex-row top-[250px] mr-5 gap-0.5">
                    <img
                        className="w-[18px] h-[18px]"
                        src={map}
                        alt="map"
                    />
                    <span
                        style={{
                            color: TEXT_COLORS.primary,
                            fontFamily: 'Cairo',
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '0%'
                        }}
                    >
                {location}
                </span>
                </div>
                <div className="absolute flex flex-row top-[280px] mr-5 gap-1">
                    <img
                        className="w-[18px] h-[18px]"
                        src={spaceIcon}
                        alt="space"
                    />
                    <span className="pt-1"
                          style={{
                              color: TEXT_COLORS.primary,
                              fontFamily: 'Montserrat',
                              fontWeight: '700',
                              fontSize: '14px',
                              lineHeight: '100%',
                              letterSpacing: '0%'
                          }}
                    >
                     {area}
                </span>
                    <span className="pt-1"
                          style={{
                              color: TEXT_COLORS.primary,
                              fontFamily: 'Cairo',
                              fontWeight: '400',
                              fontSize: '14px',
                              lineHeight: '100%',
                              letterSpacing: '0%'
                          }}
                    >
                     متر
                </span>

                </div>
                <span
                    className="absolute top-[325px] right-1/2 transform translate-x-1/2 whitespace-nowrap"
                    style={{
                        color: TEXT_COLORS.primary,
                        fontFamily: 'Montserrat',
                        fontWeight: '600',
                        fontSize: '20px',
                        lineHeight: '100%',
                        letterSpacing: '3%'
                    }}
                >
                {formatPrice(sell_details.selling_price)} $
            </span>
            </div>
        </Link>

    )
}
export default CardPropertySaleTourist
