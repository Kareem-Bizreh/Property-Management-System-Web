import {create} from 'zustand';

const useAdminStore = create((set) => ({
    admin: {},
    setAdmin: (admin) => set({admin}),
}));

export default useAdminStore;
