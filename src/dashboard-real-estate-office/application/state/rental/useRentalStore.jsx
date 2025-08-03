import {create} from 'zustand';

const useRentalStore = create((set) => ({
    rental: null,
    setRental: (rental) => set({rental}),
}));

export default useRentalStore;
