import DetailsCard from "./DetailsCard.jsx";
import RealEstatePlaces from "./realEstatePlaces.jsx";
import warning from "../../../assets/dashboard/warning.svg";
import earning from "../../../assets/dashboard/earning.svg";
import tourist_places from "../../../assets/dashboard/tourist_places.svg";
import realEstate_places from "../../../assets/dashboard/realEstate_places.svg";
import {DASHBOARD_CARDS_COLORS} from "../../../../shared/colors.jsx";

const DetailsCards = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center md:flex-row-reverse md:justify-around gap-2">
            <div className="w-[250px] flex-shrink-1">
                <DetailsCard
                    icon={warning}
                    title="عدد الإنذارات"
                    color={DASHBOARD_CARDS_COLORS['warnings']}
                    bgColor={DASHBOARD_CARDS_COLORS['bg_warnings']}
                    number={0}
                />
            </div>
            <div className="w-[250px] flex-shrink-1">
                <DetailsCard
                    icon={earning}
                    title="الأرباح"
                    color={DASHBOARD_CARDS_COLORS['earnings']}
                    bgColor={DASHBOARD_CARDS_COLORS['bg_earnings']}
                    number={'$10000'}
                />
            </div>
            <div className="w-[250px] flex-shrink-1">
                <DetailsCard
                    icon={tourist_places}
                    title="عدد الأماكن السياحية"
                    color={DASHBOARD_CARDS_COLORS['tourist_places']}
                    bgColor={DASHBOARD_CARDS_COLORS['bg_tourist_places']}
                    number={5}
                />
            </div>
            <div className="w-[280px] flex-shrink-1">
                <RealEstatePlaces
                    icon={realEstate_places}
                    title="عدد العقارات"
                    color={DASHBOARD_CARDS_COLORS['realEstate_places']}
                    bgColor={DASHBOARD_CARDS_COLORS['bg_realEstate_places']}
                    number={0}
                />
            </div>
        </div>
    )
}
export default DetailsCards
