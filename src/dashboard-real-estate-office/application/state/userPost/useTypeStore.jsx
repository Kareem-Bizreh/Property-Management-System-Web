import {create} from 'zustand';

const useTypeStore = create((set) => ({
    type: null,
    setType: (type) => set({type}),
}));

export default useTypeStore;
