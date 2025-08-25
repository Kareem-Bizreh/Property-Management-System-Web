import OfficeRepository from "../../../domain/repositories/officeRepository.jsx";

export const editOfficeDetails = async (office) => {
    try {
        const payload = new FormData();
        if (office.image instanceof File) {
            payload.append("logo", office.image);
        }
        payload.append("name", office.name);
        payload.append("phone", office.phone);
        payload.append("type", office.type);
        payload.append("commission", office.commission);
        payload.append("booking_period", office.booking_period);
        payload.append("deposit_per_m2", office.deposit_per_m2);
        payload.append("tourism_deposit", office.tourism_deposit);
        payload.append("payment_method", office.payment_method);
        payload.append("opening_time", office.opening_time);
        payload.append("closing_time", office.closing_time);
        payload.append("region_id", office.region.id);
        payload.append("latitude", office.coordinates.lat);
        payload.append("longitude", office.coordinates.lng);
        office.socials.filter((social) => social.link && social.link.length > 0).forEach((social, index) => {
            payload.append(`socials[${index}][id]`, social.id);
            payload.append(`socials[${index}][link]`, social.link);
        })

        const response = await OfficeRepository.editDetails(payload);
        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error.response.data.message};
    }
}