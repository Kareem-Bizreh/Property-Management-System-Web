import {create} from 'zustand';

const useStatusStore = create((set) => ({
    status: null,
    setStatus: (status) => set({status}),
}));

export default useStatusStore;
