import {create} from 'zustand';

const usePropertyContractOpenStore = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({isOpen}),
}));

export default usePropertyContractOpenStore;
