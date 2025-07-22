import {create} from 'zustand';

const useRegionsStore = create((set) => ({
    regions: [],
    setRegions: (regions) => set({regions}),
}));

export default useRegionsStore;
