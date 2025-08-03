import RentalRepository from "../../../domain/repositories/rentalRepository.jsx";
import {SyrianGovernorates} from "../../../shared/constants/syrianGovernorates.jsx";

export const getFilterRentals = async (city, region, status) => {
    try {
        const cityObj = SyrianGovernorates.find((gov) => gov.name === city);
        const cityId = cityObj ? cityObj.id : null;

        const regionObj = cityObj?.regions.find((reg) => reg.name === region);
        const regionId = regionObj ? regionObj.id : null;

        const response = await RentalRepository.filters(cityId, regionId, status);
        // response.data = response.data.map((item) => new Rental(item));

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}