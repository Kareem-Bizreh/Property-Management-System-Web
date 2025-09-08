import {create} from 'zustand';

const useServicePriceStore = create((set) => ({
    imagePrice: 0,
    promotionPrice: 0,
    setPromotionPrice: (promotionPrice) => set({promotionPrice}),
    setImagePrice: (imagePrice) => set({imagePrice}),
}));

export default useServicePriceStore;
