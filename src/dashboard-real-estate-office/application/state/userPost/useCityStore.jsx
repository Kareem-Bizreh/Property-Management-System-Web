import {create} from "zustand";

const useCityStore = create((set) => ({
    city: null,
    setCity: (city) => set({city}),
}));

export default useCityStore;