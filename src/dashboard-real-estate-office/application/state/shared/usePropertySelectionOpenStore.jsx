import {create} from 'zustand';

const usePropertySelectionOpenStore = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({isOpen}),
}));

export default usePropertySelectionOpenStore;
