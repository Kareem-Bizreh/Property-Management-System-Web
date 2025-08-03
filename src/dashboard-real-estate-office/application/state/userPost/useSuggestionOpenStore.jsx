import {create} from 'zustand';

const useSuggestionOpenStore = create((set) => ({
    postId: null,
    isOpen: false,
    setIsOpen: (isOpen) => set({isOpen}),
    setPostId: (postId) => set({postId}),
}));

export default useSuggestionOpenStore;
