import {create} from 'zustand';

const usePropertiesStore = create((set) => ({
    properties: [],
    setProperties: (properties) => set({properties}),
}));

export default usePropertiesStore;
