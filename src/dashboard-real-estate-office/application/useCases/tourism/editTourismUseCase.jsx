import TourismRepository from "../../../domain/repositories/tourismRepository.jsx";
import {Tourism} from "../../../domain/entities/Tourism.jsx";
import {SyrianGovernorates} from "../../../../shared/shared/constants/syrianGovernorates.jsx";

export const editTourism = async (tourism, id) => {
    try {
        const cityObj = SyrianGovernorates.find((gov) => gov.name === tourism.city.name);
        tourism.region = cityObj?.regions.find((reg) => reg.name === tourism.region.name);

        const formData = Tourism.toFormData(tourism);
        // for (let pair of formData.entries()) {
        //     console.log(pair);
        // }
        // return;

        const response = await TourismRepository.editTourism(id, formData);
        return {success: true, response};
    } catch (error) {
        return {success: false, response: error?.response?.data?.message || error.message};
    }
};