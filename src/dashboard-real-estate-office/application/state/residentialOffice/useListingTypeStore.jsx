import {create} from 'zustand';

const useListingTypeStore = create((set) => ({
    listingType: null,
    setListingType: (listingType) => set({ listingType }),
}));

export default useListingTypeStore;