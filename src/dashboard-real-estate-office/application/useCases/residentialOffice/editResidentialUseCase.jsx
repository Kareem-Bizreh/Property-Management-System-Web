import ResidentialOfficeRepository from "../../../domain/repositories/residentialOfficeRepository.jsx";
import {Property} from "../../../domain/entities/Property.jsx";

export const edit = async (property, propertyId) => {
    try {
        const formData = Property.toFormData(property);

        const response = await ResidentialOfficeRepository.editResidential(propertyId, formData);
        return {success: true, response};
    } catch (error) {
        return {success: false, response: error?.response?.data?.message || error.message};
    }
}