import ReservationRepository from "../../../domain/repositories/reservationsRepository.jsx";
import {Reservation} from "../../../domain/entities/Reservation.jsx";
import {SyrianGovernorates} from "../../../../shared/shared/constants/syrianGovernorates.jsx";

export const getFilterReservation = async (city, region, status) => {
    try {
        const cityObj = SyrianGovernorates.find((gov) => gov.name === city);
        const cityId = cityObj ? cityObj.id : null;

        const regionObj = cityObj?.regions.find((reg) => reg.name === region);
        const regionId = regionObj ? regionObj.id : null;

        const response = await ReservationRepository.filters(cityId, regionId, status);
        response.data = response.data.map((item) => new Reservation(item));

        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}