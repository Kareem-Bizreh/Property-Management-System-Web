import {create} from 'zustand';

const useOfficeStore = create((set) => ({
    office: null,
    setOffice: (office) => set({office}),
}));

export default useOfficeStore;
