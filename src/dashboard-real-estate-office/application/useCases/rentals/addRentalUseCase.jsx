import RentalRepository from "../../../domain/repositories/rentalRepository.jsx";

export const addUserPropertyInvoice = async (phone, duration, price, propertyId, residentialId, document) => {
    try {
        const formData = new FormData();
        formData.append("phone", phone);
        formData.append("duration", duration);
        formData.append("price", price);
        formData.append("propertyId", propertyId);
        formData.append("residentialId", residentialId);
        formData.append("document", document);
        const response = await RentalRepository.add(formData);
        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error?.response?.data?.message || "حدث خطأ"};
    }
};