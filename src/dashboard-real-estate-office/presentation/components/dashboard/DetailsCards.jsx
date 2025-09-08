import DetailsCard from "../../../../shared/presentation/components/dashboard/DetailsCard.jsx";
import RealEstatePlaces from "../../../../shared/presentation/components/dashboard/RealEstatePlaces.jsx";
import warning from "../../../assets/dashboard/warning.svg";
import earning from "../../../assets/dashboard/earning.svg";
import tourist_places from "../../../assets/dashboard/tourist_places.svg";
import realEstate_places from "../../../assets/dashboard/realEstate_places.svg";
import {DASHBOARD_CARDS_COLORS} from "../../../../shared/colors.jsx";
import {formatPrice} from "../../../../shared/shared/utils/formatPrice.js";

const DetailsCards = ({complaints, profits, touristic, residentialSale, residentialRent}) => {
    return (
        <div className="w-full flex flex-row-reverse flex-wrap items-center justify-around gap-2">
            <div className="w-[250px] flex-shrink-1">
                <DetailsCard
                    icon={warning}
                    title="عدد الإنذارات"
                    color={DASHBOARD_CARDS_COLORS['warnings']}
                    bgColor={DASHBOARD_CARDS_COLORS['bg_warnings']}
                    number={complaints}
                />
            </div>
            <div className="w-[250px] flex-shrink-1">
                <DetailsCard
                    icon={earning}
                    title="الأرباح"
                    color={DASHBOARD_CARDS_COLORS['earnings']}
                    bgColor={DASHBOARD_CARDS_COLORS['bg_earnings']}
                    number={formatPrice(profits)}
                />
            </div>
            <div className="w-[250px] flex-shrink-1">
                <DetailsCard
                    icon={tourist_places}
                    title="عدد الأماكن السياحية"
                    color={DASHBOARD_CARDS_COLORS['tourist_places']}
                    bgColor={DASHBOARD_CARDS_COLORS['bg_tourist_places']}
                    number={touristic}
                />
            </div>
            <div className="w-[280px] flex-shrink-1">
                <RealEstatePlaces
                    icon={realEstate_places}
                    title="عدد العقارات"
                    color={DASHBOARD_CARDS_COLORS['realEstate_places']}
                    bgColor={DASHBOARD_CARDS_COLORS['bg_realEstate_places']}
                    sale={residentialSale} rent={residentialRent}
                />
            </div>
        </div>
    )
}
export default DetailsCards
