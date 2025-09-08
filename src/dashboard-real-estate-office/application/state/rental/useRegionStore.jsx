import {create} from 'zustand';

const useRegionStore = create((set) => ({
    regions: [],
    region: null,
    setRegions: (regions) => set({regions}),
    setRegion: (region) => set({region}),
}));

export default useRegionStore;
