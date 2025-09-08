import {create} from 'zustand';

const usePropertyRentalOpenStore = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({isOpen}),
}));

export default usePropertyRentalOpenStore;
