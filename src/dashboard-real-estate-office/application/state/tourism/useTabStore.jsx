import {create} from 'zustand';

const useTabStore = create((set) => ({
    tab: 0,
    setTab: (tab) => set({tab}),
}));

export default useTabStore;
