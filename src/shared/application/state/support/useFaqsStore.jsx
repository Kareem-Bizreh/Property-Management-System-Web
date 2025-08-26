import {create} from 'zustand';

const useFaqsStore = create((set) => ({
    faqs: [],
    setFaqs: (faqs) => set({faqs}),
}));

export default useFaqsStore;
