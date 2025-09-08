import {create} from 'zustand';

const useAdvertisementsStore = create((set) => ({
    advertisements: [],
    setAdvertisements: (advertisements) => set({advertisements}),
}));

export default useAdvertisementsStore;
