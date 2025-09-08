import PropertyImagesRepository from "../../../domain/repositories/propertyImagesRepository.jsx";

export const upload = async (propertyId, formData) => {
    try {
        const response = await PropertyImagesRepository.upload(propertyId, formData);
        return { success: true, response };
    } catch (error) {
        return { success: false, response: error?.response?.data?.message || error.message };
    }
};