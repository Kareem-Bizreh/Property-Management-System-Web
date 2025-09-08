import {create} from 'zustand';

const useReservationStore = create((set) => ({
    reservation: null,
    setReservation: (reservation) => set({reservation}),
}));

export default useReservationStore;
