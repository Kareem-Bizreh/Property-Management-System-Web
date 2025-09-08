import {create} from 'zustand';

const useQuestionAddOpenStore = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({isOpen}),
}));

export default useQuestionAddOpenStore;
