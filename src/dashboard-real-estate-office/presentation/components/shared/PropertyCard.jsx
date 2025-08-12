import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import locationIcon from "../../../assets/cards/location.svg";
import {formatPrice} from "../../../../shared/shared/utils/formatPrice.js";

const PropertyCard = ({property}) => {
    return (
        <div className="w-full h-full rounded-[8px] p-4 flex flex-row items-center gap-4"
             style={{
                 backgroundColor: BACKGROUND_COLORS.secondary2,
                 color: TEXT_COLORS.post,
                 fontFamily: 'Tajawal',
                 fontWeight: 700,
                 fontSize: '18px',
                 letterSpacing: '3%',
             }}
        >
            <div
                style={{backgroundImage: `url(${property.postImage})`}}
                className="w-[116px] h-[87px] rounded-[12px] p-2 flex flex-row items-end justify-start bg-cover bg-center"
            >
                <span
                    className="w-[50px] h-[20px] rounded-[5px]"
                    style={{
                        backgroundColor: BACKGROUND_COLORS.card,
                        color: TEXT_COLORS.white,
                        fontFamily: 'Cairo',
                        fontSize: '12px',
                        lineHeight: '18px',
                        textAlign: 'center',
                        leadingTrim: 'NONE',
                    }}
                >
                    {property.listing_type}
                </span>
            </div>
            <div className="flex flex-col items-start gap-2">
                <span style={{
                    leadingTrim: 'NONE',
                    lineHeight: '18px',
                }}>{property.postTitle}</span>
                <div className="flex flex-row gap-1">
                    <img
                        className="w-[21px] h-[21px]"
                        src={locationIcon}
                        alt="location"
                    />
                    <span
                        style={{
                            color: TEXT_COLORS.primary,
                            fontWeight: '400',
                            fontSize: '14px',
                            letterSpacing: '0%',
                        }}
                    >
                        {property.location}
                    </span>
                </div>
                <span className="mr-1" style={{
                    fontFamily: 'Montserrat',
                    fontWeight: 600,
                    fontSize: '20px',
                }}>{formatPrice(property.sell_details?.selling_price || property.rent_details?.rentalPrice || property.rent_details?.price)} $</span>
            </div>
        </div>
    )
}
export default PropertyCard
