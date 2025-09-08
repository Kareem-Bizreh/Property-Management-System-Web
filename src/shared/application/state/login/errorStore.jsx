import { create } from 'zustand';

const useErrorStore = create((set) => ({
    error: "",
    setError: (error) => set({ error }),
}));

export default useErrorStore;
