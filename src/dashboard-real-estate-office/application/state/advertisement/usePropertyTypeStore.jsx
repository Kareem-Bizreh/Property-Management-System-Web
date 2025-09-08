import {create} from 'zustand';

const usePropertyTypeStore = create((set) => ({
    type: null,
    setType: (type) => set({type}),
}));

export default usePropertyTypeStore;
