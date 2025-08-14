import {create} from 'zustand';

const useNotificationSendOpenStore = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({isOpen}),
}));

export default useNotificationSendOpenStore;
