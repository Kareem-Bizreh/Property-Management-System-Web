import PartnersManagementRepository from "../../../domain/repositories/partnersManagementRepository.jsx";
import {Tourism} from "../../../../dashboard-real-estate-office/domain/entities/Tourism.jsx";
import {Property} from "../../../../dashboard-real-estate-office/domain/entities/Property.jsx";

export const getOfficeProperties = async (id) => {
    try {
        const response = await PartnersManagementRepository.getOfficeProperties(id);
        if (response.data.length > 0 && response.data[0].residentialId) {
            response.data = response.data.map((item) => new Property(item));
        } else {
            response.data = response.data.map((item) => Tourism.cardData(item));
        }

        return {success: true, response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
};