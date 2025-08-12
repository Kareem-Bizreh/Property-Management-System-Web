import {create} from 'zustand';

const useEditAdminOpenStore = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({isOpen}),
}));

export default useEditAdminOpenStore;
