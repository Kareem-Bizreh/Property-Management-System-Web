import {create} from 'zustand';

const useTouristsStore = create((set) => ({
    tourists: [],
    setTourists: (tourists) => set({tourists}),
}));

export default useTouristsStore;
