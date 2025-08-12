import ResidentialOfficeRepository from "../../../domain/repositories/residentialOfficeRepository.jsx";
import {Property} from "../../../domain/entities/Property.jsx";
import {SyrianGovernorates} from "../../../../shared/shared/constants/syrianGovernorates.jsx";

export const getFilterProperties = async ({city, region, listingType, status}) => {
    try {
        const cityObj = SyrianGovernorates.find((gov) => gov.name === city);
        const cityId = cityObj ? cityObj.id : null;

        const regionObj = cityObj?.regions.find((reg) => reg.name === region);
        const regionId = regionObj ? regionObj.id : null;

        const response = await ResidentialOfficeRepository.filters({cityId, regionId, listingType, status});
        response.data = response.data.map((item) => new Property(item));

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}