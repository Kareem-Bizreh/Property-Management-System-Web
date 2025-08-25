import {create} from 'zustand';

const useReservationsStore = create((set) => ({
    reservations: [],
    setReservations: (reservations) => set({reservations}),
}));

export default useReservationsStore;
