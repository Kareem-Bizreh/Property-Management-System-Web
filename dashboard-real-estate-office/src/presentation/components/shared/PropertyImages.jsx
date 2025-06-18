import { BACKGROUND_COLORS } from "../../../shared/constants/colors.jsx";
import UploadImage from "./UploadImage.jsx";
import Header1 from "../addProperty/Header1.jsx";
import Images from "../addProperty/Images.jsx";

const PropertyImages = ({ images = null, readOnly = false }) => {
  return (
    <div
      className="relative rounded-[15px] flex flex-col items-center gap-6"
      style={{ backgroundColor: BACKGROUND_COLORS.secondary2 }}
    >
      <div className="mt-2 -mb-4">
        <Header1 title={"صور العقار"} align={"center"} />
      </div>
      <UploadImage readOnly={readOnly} />
      <Images images={images} readOnly={readOnly} />
    </div>
  );
};
export default PropertyImages;
