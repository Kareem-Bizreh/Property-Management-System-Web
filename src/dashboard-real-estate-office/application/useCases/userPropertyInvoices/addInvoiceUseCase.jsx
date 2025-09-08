import UserPropertyInvoiceRepository from "../../../domain/repositories/userPropertyInvoicesRepository.jsx";

export const addUserPropertyInvoice = async (propertyId, phone, document, installment_allowed) => {
    try {
        const formData = new FormData();
        formData.append("propertyId", propertyId);
        formData.append("phone", phone);
        formData.append("document", document);
        formData.append("installment", installment_allowed);
        const response = await UserPropertyInvoiceRepository.addInvoice(formData);
        return {success: true, response: response};
    } catch (error) {
        return {success: false, response: error?.response?.data?.message || "حدث خطأ"};
    }
};