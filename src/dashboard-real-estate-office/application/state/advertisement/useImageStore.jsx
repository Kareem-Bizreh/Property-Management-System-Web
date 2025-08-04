import {create} from "zustand";

const useImageStore = create((set) => ({
    image: null,
    setImage: (image) => set({image}),
}));

export default useImageStore;