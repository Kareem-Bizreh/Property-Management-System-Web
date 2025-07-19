import ResidentialOfficeRepository from "../../../domain/repositories/residentialOfficeRepository.jsx";
import {Property} from "../../../domain/entities/Property.jsx";

export const getAll = async () => {
    try {
        const response = await ResidentialOfficeRepository.getAll();
        response.data = response.data.map((item) => new Property(item));

        return {success: true, response: response};
    } catch (error) {
        return { success: false, response: error.response.error };
    }
}