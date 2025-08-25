import {create} from 'zustand';
import {AdType} from "../../../shared/constants/AdType.jsx";

const useTypeStore = create((set) => ({
    type: AdType[0],
    setType: (type) => set({type}),
}));

export default useTypeStore;
