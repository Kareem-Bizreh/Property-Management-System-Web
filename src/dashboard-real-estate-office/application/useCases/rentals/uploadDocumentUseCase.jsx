import RentalRepository from "../../../domain/repositories/rentalRepository.jsx";

export const uploadRentalDocument = async (invoiceId, document) => {
    try {
        const formData = new FormData();
        formData.append("document", document);
        const response = await RentalRepository.uploadDocument(invoiceId, formData);
        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error?.response?.data?.message || "حدث خطأ"};
    }
};