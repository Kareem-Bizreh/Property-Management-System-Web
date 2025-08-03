import {create} from 'zustand';

const useUserPostsStore = create((set) => ({
    userPosts: [],
    setUserPosts: (userPosts) => set({userPosts}),
}));

export default useUserPostsStore;
