import RentalRepository from "../../../domain/repositories/rentalRepository.jsx";

export const addUserPropertyInvoice = async (propertyId, phone, document) => {
    try {
        const formData = new FormData();
        formData.append("propertyId", propertyId);
        formData.append("phone", phone);
        formData.append("document", document);
        //
        const response = await RentalRepository.add(formData);
        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error?.response?.data?.message || "حدث خطأ"};
    }
};