import {create} from 'zustand';

const useRentalDetailsStore = create((set) => ({
    invoice_image: null,
    office_commission_amount: 0,

    setRentalDetails: (data) => set({...data}),
    resetRentalDetails: () => set({
        invoice_image: null,
    }),
}));

export default useRentalDetailsStore;
