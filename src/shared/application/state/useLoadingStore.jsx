import {create} from 'zustand';

const useLoadingStore = create((set) => ({
    isLoading: false,
    setIsLoading: (isLoading) => set({isLoading}),
}));

export default useLoadingStore;
