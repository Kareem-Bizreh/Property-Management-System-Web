import ResidentialOfficeRepository from "../../../domain/repositories/residentialOfficeRepository.jsx";
import {Property} from "../../../domain/entities/Property.jsx";

export const add = async (property) => {
    try {
        const formData = Property.toFormData(property);
        // for (let pair of formData.entries()) {
        //     console.log(pair, pair);
        // }

        const response = await ResidentialOfficeRepository.add(formData);
        return {success: true, response};
    } catch (error) {
        return {success: false, response: error?.response?.data?.message || error.message};
    }
};
