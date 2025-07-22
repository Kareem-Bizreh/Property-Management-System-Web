import {create} from 'zustand';

const useCommissionStore = create((set) => ({
    commission: null,
    setCommission: (commission) => set({commission}),
}));

export default useCommissionStore;
