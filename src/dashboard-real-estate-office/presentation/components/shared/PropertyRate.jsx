import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import Header1 from "../addProperty/Header1.jsx";
import star from "../../../../shared/assets/shared/star.svg";

const PropertyRate = ({rate}) => {
    return (
        <div
            className="relative rounded-[15px] flex flex-col items-center gap-6"
            style={{backgroundColor: BACKGROUND_COLORS.secondary2}}
        >
            <div className="mt-2 -mb-4">
                <Header1 title={"تقييم العقار"} align={"center"}/>
            </div>
            <div
                className="px-10 py-4 rounded-[16px]"
                style={{
                    color: TEXT_COLORS.primary,
                    fontFamily: 'Tajawal',
                    fontWeight: '700',
                    fontSize: '28px',
                    lineHeight: '18px',
                    letterSpacing: '3%',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                }}
            >
                <div className="flex items-center justify-center gap-2">
                    <img src={star} alt="star" className="w-8 h-8"/>
                    <span>{rate}</span>
                </div>
            </div>
        </div>
    )
}
export default PropertyRate
