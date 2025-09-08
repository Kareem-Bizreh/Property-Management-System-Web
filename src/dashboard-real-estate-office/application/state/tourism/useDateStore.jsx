import {create} from 'zustand';

const useDateStore = create((set) => ({
    date: Date.now(),
    setDate: (date) => set({date}),

    year: new Date().getFullYear(),
    setYear: (year) => set({year}),

    highlightedDays: [],
    setHighlightedDays: (highlightedDays) => set({highlightedDays}),
}));

export default useDateStore;
