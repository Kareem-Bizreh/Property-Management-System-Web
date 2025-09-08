import {create} from 'zustand';

const useTouristStore = create((set) => ({
    tourist: null,
    setTourist: (tourist) => set({tourist}),

    newImages: [],
    setNewImages: (file) => set((state) => ({
        newImages: [...state.newImages, file],
    })),

    deletedImages: [],
    setDeletedImages: (id) => set((state) => ({
        deletedImages: [...state.deletedImages, id],
    })),

    resetImageTracking: () => set({newImages: [], deletedImages: []}),
}));

export default useTouristStore;
