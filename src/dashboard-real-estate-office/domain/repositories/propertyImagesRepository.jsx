import { upload, getAll, remove } from "../../infrastructure/api/propertyImagesApis.jsx";

const PropertyImagesRepository = {
    upload: async (propertyId, formData) => await upload(propertyId, formData),
    getAll: async (propertyId) => await getAll(propertyId),
    remove: async (propertyId, imageId) => await remove(propertyId, imageId)
};

export default PropertyImagesRepository;
