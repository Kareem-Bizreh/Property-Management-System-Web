import {create} from 'zustand';

const usePropertyReservationOpenStore = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({isOpen}),
}));

export default usePropertyReservationOpenStore;
