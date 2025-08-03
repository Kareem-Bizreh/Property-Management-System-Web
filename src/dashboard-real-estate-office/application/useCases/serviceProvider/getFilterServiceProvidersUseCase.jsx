import ServiceProviderRepository from "../../../domain/repositories/serviceProviderRepository.jsx";
import {SyrianGovernorates} from "../../../shared/constants/syrianGovernorates.jsx";

export const getFilterServiceProviders = async (city, region, career) => {
    try {
        const cityObj = SyrianGovernorates.find((gov) => gov.name === city);
        const cityId = cityObj ? cityObj.id : null;

        const regionObj = cityObj?.regions.find((reg) => reg.name === region);
        const regionId = regionObj ? regionObj.id : null;

        const response = await ServiceProviderRepository.filters(cityId, regionId, career);

        return {success: true, response: response.data};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}