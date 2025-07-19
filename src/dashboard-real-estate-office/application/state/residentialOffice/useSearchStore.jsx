import {create} from "zustand";

const useSearchStore = create((set) => ({
    search: "",
    setSearch: (newSearch) => set({ search: newSearch }),
}));

export default useSearchStore;
