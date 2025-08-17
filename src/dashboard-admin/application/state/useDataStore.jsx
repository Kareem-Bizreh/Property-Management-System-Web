import {create} from 'zustand';

const useTabDataStore = create((set) => ({
    data: {},

    setDataForTab: (tabIndex, response) => set(state => ({data: {...state.data, [tabIndex]: response}})),
}));

export default useTabDataStore;
