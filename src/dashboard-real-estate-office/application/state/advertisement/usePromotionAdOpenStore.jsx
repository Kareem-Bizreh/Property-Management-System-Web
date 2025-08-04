import {create} from 'zustand';

const usePromotionAdOpenStore = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({isOpen}),
}));

export default usePromotionAdOpenStore;
