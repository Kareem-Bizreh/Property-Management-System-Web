import {uploadDocument, addInvoice} from "../../infrastructure/api/userPropertyInvoicesApis.jsx";

const UserPropertyInvoiceRepository = {
    uploadDocument: async (invoiceId, formData) => await uploadDocument(invoiceId, formData),
    addInvoice: async (formData) => await addInvoice(formData),
};

export default UserPropertyInvoiceRepository;
