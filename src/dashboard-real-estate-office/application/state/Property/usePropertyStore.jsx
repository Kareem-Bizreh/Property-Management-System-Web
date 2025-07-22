import {create} from 'zustand';

const usePropertyStore = create((set) => ({
    property: [],
    setProperty: (property) => set({property}),
}));

export default usePropertyStore;
