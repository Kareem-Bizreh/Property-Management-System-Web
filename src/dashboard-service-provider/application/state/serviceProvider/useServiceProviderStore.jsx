import {create} from 'zustand';

const useServiceProviderStore = create((set) => ({
    serviceProvider: null,
    setServiceProvider: (serviceProvider) => set({serviceProvider}),
}));

export default useServiceProviderStore;
