import UserPostRepository from "../../../domain/repositories/userPostRepository.jsx";
import {SyrianGovernorates} from "../../../shared/constants/syrianGovernorates.jsx";

export const getFilterUserPosts = async (cityId, region, type) => {
    try {
        const cityObj = SyrianGovernorates.find((gov) => gov.id === cityId);

        const regionObj = cityObj?.regions.find((reg) => reg.name === region);
        const regionId = regionObj ? regionObj.id : null;

        const response = await UserPostRepository.filters(regionId, type);

        return {success: true, response: response.data};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}