import {create} from 'zustand';

const useTapStore = create((set) => ({
    tap: 0,
    setTap: (tap) => set({tap}),
}));

export default useTapStore;
