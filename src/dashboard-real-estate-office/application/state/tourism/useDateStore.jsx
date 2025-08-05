import {create} from 'zustand';

const useDateStore = create((set) => ({
    date: Date.now(),
    setDate: (date) => set({date}),

    highlightedDays: [],
    setHighlightedDays: (highlightedDays) => set({highlightedDays}),
}));

export default useDateStore;
