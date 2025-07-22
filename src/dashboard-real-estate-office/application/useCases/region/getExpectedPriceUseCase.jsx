import RegionRepository from "../../../domain/repositories/regionRepository.jsx";

export const getMeterPrice = async (regionId) => {
    try {
        const response = await RegionRepository.getMeterPrice(regionId);

        return {success: true, response: response.data.meter_price};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}