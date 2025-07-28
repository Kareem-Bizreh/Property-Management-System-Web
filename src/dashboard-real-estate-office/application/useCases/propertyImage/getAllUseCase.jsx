import PropertyImagesRepository from "../../../domain/repositories/propertyImagesRepository.jsx";

export const getAll = async (propertyId) => {
    try {
        const response = await PropertyImagesRepository.getAll(propertyId);
        return { success: true, response };
    } catch (error) {
        return { success: false, response: error?.response?.data?.message || error.message };
    }
};