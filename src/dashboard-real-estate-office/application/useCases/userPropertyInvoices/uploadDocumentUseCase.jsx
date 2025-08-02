import UserPropertyInvoiceRepository from "../../../domain/repositories/userPropertyInvoicesRepository.jsx";

export const uploadInvoiceDocument = async (invoiceId, document) => {
    try {
        const formData = new FormData();
        formData.append("document", document);
        const response = await UserPropertyInvoiceRepository.uploadDocument(invoiceId, formData);
        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error?.response?.data?.message || "حدث خطأ"};
    }
};