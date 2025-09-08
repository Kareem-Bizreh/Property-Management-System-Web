import {create} from 'zustand';

const useImageAdOpenStore = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({isOpen}),
}));

export default useImageAdOpenStore;
