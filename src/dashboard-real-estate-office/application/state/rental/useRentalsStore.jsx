import {create} from 'zustand';

const useRentalsStore = create((set) => ({
    rentals: [],
    setRentals: (rentals) => set({rentals}),
}));

export default useRentalsStore;
