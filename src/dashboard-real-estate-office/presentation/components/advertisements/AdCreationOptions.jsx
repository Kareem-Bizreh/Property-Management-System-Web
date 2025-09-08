import PromotionAd from "./PromotionAd.jsx";
import ImageAd from "./ImageAd.jsx";
import seller from "../../../assets/ads/seller.svg";
import {DASHBOARD_CARDS_COLORS} from "../../../../shared/colors.jsx";
import ButtonCard from "./ButtonCard.jsx";
import officer from "../../../assets/ads/marketing-officer.svg";
import useImageAdOpenStore from "../../../application/state/advertisement/useImageAdOpenStore.jsx";
import usePromotionAdOpenStore from "../../../application/state/advertisement/usePromotionAdOpenStore.jsx";

const AdCreationOptions = () => {
    const {setIsOpen: setImageAdOpen, isOpen: imageOpen} = useImageAdOpenStore();
    const {setIsOpen: setPromotionAdOpen, isOpen: promotionOpen} = usePromotionAdOpenStore();

    return (
        <div className="w-full min-h-[174px] flex flex-row flex-wrap gap-6 justify-around px-12 mb-4">
            {/*إعلان صوري*/}
            <>
                <ButtonCard
                    onClick={() => setImageAdOpen(true)}
                    icon={seller}
                    title={'إنشاء إعلان'}
                    color={DASHBOARD_CARDS_COLORS.warnings}
                    bgColor={DASHBOARD_CARDS_COLORS.bg_warnings}
                />
                {imageOpen && <ImageAd/>}
            </>

            {/*إعلان ترويجي*/}
            <>
                <ButtonCard
                    onClick={() => setPromotionAdOpen(true)}
                    icon={officer}
                    title={'ترويج'}
                    color={DASHBOARD_CARDS_COLORS.realEstate_places}
                    bgColor={DASHBOARD_CARDS_COLORS.bg_tourist_places}
                />
                {promotionOpen && <PromotionAd/>}
            </>
        </div>
    )
}
export default AdCreationOptions
