import {uploadDocument} from "../../infrastructure/api/userInvoiceApis.jsx";

export const UserInvoiceRepository = {
    uploadDocument: async (invoiceId, formData) => await uploadDocument(invoiceId, formData),
}