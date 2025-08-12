import {create} from 'zustand';

const useAddAdminOpenStore = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({isOpen}),
}));

export default useAddAdminOpenStore;
