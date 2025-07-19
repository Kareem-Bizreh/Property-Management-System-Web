import { create } from 'zustand';

const useUserStore = create((set) => ({
    user: null,
    accessToken: null,
    refreshToken: null,

    setUser: (user) => set({ user }),
    setAccessToken: (accessToken) => set({ accessToken }),
    setRefreshToken: (refreshToken) => set({ refreshToken }),

    logout: () => set({ user: null, accessToken: null, refreshToken: null }),
}));

export default useUserStore;
