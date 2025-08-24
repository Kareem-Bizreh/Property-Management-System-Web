import OfficeRepository from "../../../domain/repositories/officeRepository.jsx";
import {Tourism} from "../../../domain/entities/Tourism.jsx";
import {Property} from "../../../domain/entities/Property.jsx";

export const getTopRatedProperties = async (type) => {
    try {
        const response = await OfficeRepository.getTopRatedProperties(type);
        if (type === "سياحي") {
            response.data.results = response.data.results.map((item) => Tourism.cardData(item));
        } else {
            response.data.results = response.data.results.map((item) => new Property(item));
        }

        return {success: true, response: response.data.results};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}