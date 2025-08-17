import {DASHBOARD_CARDS_COLORS} from "../../../../shared/colors.jsx";
import DetailsCard from "../../../../shared/presentation/components/dashboard/DetailsCard.jsx";
import RealEstatePlaces from "../../../../shared/presentation/components/dashboard/RealEstatePlaces.jsx";
import ads from "../../../assets/dashboard/ads.svg"
import offices from "../../../assets/dashboard/offices.svg"
import realEstatePlaces from "../../../assets/dashboard/real-estates.svg"
import serviceProviders from "../../../assets/dashboard/service-providers.svg";
import tourists from "../../../assets/dashboard/tourists.svg"
import users from "../../../assets/dashboard/users.svg"

const DetailsCards = ({stats}) => {
    return (
        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-4 p-4 -mt-4">
            <div className="w-[250px] flex-shrink-1">
                <DetailsCard
                    icon={users}
                    title="عدد المستخدمين"
                    color={DASHBOARD_CARDS_COLORS['tourist_places']}
                    bgColor={DASHBOARD_CARDS_COLORS['bg_tourist_places']}
                    number={stats?.total_users}
                />
            </div>
            <div className="w-[250px] flex-shrink-1">
                <DetailsCard
                    icon={users}
                    title="عدد المشرفين"
                    color={DASHBOARD_CARDS_COLORS['tourist_places']}
                    bgColor={DASHBOARD_CARDS_COLORS['bg_tourist_places']}
                    number={stats?.total_admins}
                />
            </div>
            <div className="w-[250px] flex-shrink-1">
                <DetailsCard
                    icon={offices}
                    title="عدد المكاتب"
                    color={DASHBOARD_CARDS_COLORS['tourist_places']}
                    bgColor={DASHBOARD_CARDS_COLORS['bg_tourist_places']}
                    number={stats?.total_offices}
                />
            </div>
            <div className="w-[250px] flex-shrink-1">
                <DetailsCard
                    icon={serviceProviders}
                    title="عدد مزودي الخدمات"
                    color={DASHBOARD_CARDS_COLORS['tourist_places']}
                    bgColor={DASHBOARD_CARDS_COLORS['bg_tourist_places']}
                    number={stats?.total_service_providers}
                />
            </div>
            <div className="w-[280px] flex-shrink-1">
                <RealEstatePlaces
                    icon={realEstatePlaces}
                    title="عدد العقارات"
                    color={DASHBOARD_CARDS_COLORS['realEstate_places']}
                    bgColor={DASHBOARD_CARDS_COLORS['bg_realEstate_places']}
                    rent={stats?.rent_properties}
                    sale={stats?.sale_properties}
                />
            </div>
            <div className="w-[250px] flex-shrink-1">
                <DetailsCard
                    icon={tourists}
                    title="عدد الأماكن السياحية"
                    color={DASHBOARD_CARDS_COLORS['realEstate_places']}
                    bgColor={DASHBOARD_CARDS_COLORS['bg_realEstate_places']}
                    number={stats?.total_touristic}
                />
            </div>
            <div className="w-[250px] flex-shrink-1">
                <DetailsCard
                    icon={ads}
                    title="عدد الإعلانات"
                    color={DASHBOARD_CARDS_COLORS['warnings']}
                    bgColor={DASHBOARD_CARDS_COLORS['bg_warnings']}
                    number={stats?.total_ads}
                />
            </div>
        </div>
    )
}
export default DetailsCards
