import {create} from 'zustand';

const useTopRatedPropertiesStore = create((set) => ({
    topRatedProperties: null,
    setTopRatedProperties: (topRatedProperties) => set({topRatedProperties}),
}));

export default useTopRatedPropertiesStore;
