// usePropertyStore.jsx
import { create } from 'zustand';

const usePropertyStore = create((set) => ({
    property: [],
    setProperty: (property) => set({ property }),

    newImages: [],
    setNewImages: (file) => set((state) => ({
        newImages: [...state.newImages, file],
    })),

    deletedImages: [],
    setDeletedImages: (id) => set((state) => ({
        deletedImages: [...state.deletedImages, id],
    })),

    resetImageTracking: () => set({ newImages: [], deletedImages: [] }),
}));

export default usePropertyStore;
