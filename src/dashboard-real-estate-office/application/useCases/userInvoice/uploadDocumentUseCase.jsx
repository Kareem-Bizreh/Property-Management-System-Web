import {UserInvoiceRepository} from "../../../domain/repositories/userInvoiceRepository.jsx";

export const uploadDocument = async (invoiceId, document) => {
    try {
        const formData = new FormData();
        formData.append("document", document);
        const response = await UserInvoiceRepository.uploadDocument(invoiceId, formData);
        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error?.response?.data?.message || "حدث خطأ"};
    }
};