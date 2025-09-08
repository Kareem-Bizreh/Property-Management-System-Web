import ResidentialOfficeRepository from "../../../domain/repositories/residentialOfficeRepository.jsx";
import {Property} from "../../../domain/entities/Property.jsx";

export const getProperty = async (propertyId) => {
    try {
        const response = await ResidentialOfficeRepository.getProperty(propertyId);
        response.data = new Property(response.data);

        return {success: true, response: response};
    } catch (error) {
        return { success: false, response: error.response.data.message };
    }
}