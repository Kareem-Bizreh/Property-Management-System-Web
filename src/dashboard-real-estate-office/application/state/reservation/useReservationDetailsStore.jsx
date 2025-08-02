import {create} from 'zustand';

const useReservationDetailsStore = create((set) => ({
    residential_selling_price: 0,
    office_commission_amount: 0,
    total_deposit: 0,
    final_price: 0,
    installment_allowed: false,
    invoice_image: null,

    setReservationDetails: (data) => set({...data}),
    resetReservationDetails: () => set({
        residential_selling_price: 0,
        office_commission_amount: 0,
        total_deposit: 0,
        final_price: 0,
        installment_allowed: false,
        invoice_image: null,
    }),
}));

export default useReservationDetailsStore;
