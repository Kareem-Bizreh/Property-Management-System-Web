import {create} from 'zustand';

const useMeterPriceStore = create((set) => ({
    meterPrice: null,
    setMeterPrice: (meterPrice) => set({meterPrice}),
}));

export default useMeterPriceStore;
