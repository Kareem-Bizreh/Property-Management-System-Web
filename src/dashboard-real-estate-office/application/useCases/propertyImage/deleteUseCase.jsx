import PropertyImagesRepository from "../../../domain/repositories/propertyImagesRepository.jsx";

export const deleteImage = async (propertyId, imageId) => {
    try {
        const response = await PropertyImagesRepository.remove(propertyId, imageId);
        return { success: true, response };
    } catch (error) {
        return { success: false, response: error?.response?.data?.message || error.message };
    }
};