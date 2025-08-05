import TourismRepository from "../../../domain/repositories/tourismRepository.jsx";
import {Tourism} from "../../../domain/entities/Tourism.jsx";
import {SyrianGovernorates} from "../../../shared/constants/syrianGovernorates.jsx";

export const getFilterTourisms = async ({city, region, status}) => {
    try {
        const cityObj = SyrianGovernorates.find((gov) => gov.name === city);

        const regionObj = cityObj?.regions.find((reg) => reg.name === region);
        const regionId = regionObj ? regionObj.id : null;

        const response = await TourismRepository.filters(regionId, status);
        response.data = response.data.map((item) => new Tourism(item));

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}