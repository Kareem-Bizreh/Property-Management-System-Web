import {create} from 'zustand';

const useNotificationsStore = create((set) => ({
    notifications: [],
    setNotifications: (notifications) => set({notifications}),
}));

export default useNotificationsStore;
