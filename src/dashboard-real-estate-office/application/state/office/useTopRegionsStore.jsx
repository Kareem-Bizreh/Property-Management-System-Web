import {create} from 'zustand';

const useTopRegionsStore = create((set) => ({
    topRegions: null,
    setTopRegions: (topRegions) => set({topRegions}),
}));

export default useTopRegionsStore;
