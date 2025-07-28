import {BACKGROUND_COLORS} from "../../../../shared/colors.jsx";
import UploadImage from "./UploadImage.jsx";
import Header1 from "../addProperty/Header1.jsx";
import Images from "../addProperty/Images.jsx";
import usePropertyStore from "../../../application/state/Property/usePropertyStore.jsx";

const PropertyImages = ({readOnly = false}) => {
    const {property, setProperty, setNewImages, setDeletedImages} = usePropertyStore();

    const handleAddImage = (file) => {
        const id = Date.now(); // temporary local ID
        const imageUrl = URL.createObjectURL(file);

        const newImage = {
            id,
            file,
            image_url: imageUrl,
            isLocal: true,
        };

        setProperty({
            ...property,
            images: [...(property.images || []), newImage],
        });

        if(newImage.length === 20) {
            alert("لا يمكن اضافة اكثر من 20 صورة");
            return;
        }

        setNewImages(file);
    };

    const handleDeleteImage = (id) => {
        const imageToDelete = property.images.find((img) => img.id === id);

        // Track deleted if it's not local
        if (!imageToDelete?.isLocal) {
            setDeletedImages(imageToDelete.id);
        }

        const filtered = property.images.filter((img) => img.id !== id);
        setProperty({
            ...property,
            images: filtered,
        });
    };

    return (
        <div
            className="relative rounded-[15px] flex flex-col items-center gap-6"
            style={{backgroundColor: BACKGROUND_COLORS.secondary2}}
        >
            <div className="mt-2 -mb-4">
                <Header1 title={"صور العقار"} align={"center"}/>
            </div>
            <UploadImage readOnly={readOnly} onChange={handleAddImage}/>
            <Images images={property.images} readOnly={readOnly} onDelete={handleDeleteImage}/>
        </div>
    );
};
export default PropertyImages;
