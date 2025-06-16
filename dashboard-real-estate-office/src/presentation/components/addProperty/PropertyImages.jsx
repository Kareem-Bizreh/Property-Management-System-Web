import {BACKGROUND_COLORS} from "../../../shared/constants/colors.jsx";
import UploadImage from "../shared/UploadImage.jsx";
import Header1 from "./Header1.jsx";
import Images from "./Images.jsx";

const PropertyImages = () => {
    return (
        <div
            className="relative min-h-[708px] rounded-[15px] flex flex-col items-center gap-6"
            style={{backgroundColor: BACKGROUND_COLORS.secondary2}}
        >
            <div className="mt-2 -mb-4">
                <Header1 title={"صور العقار"} align={'center'}/>
            </div>
            <UploadImage/>
            <Images/>
        </div>
    )
}
export default PropertyImages
