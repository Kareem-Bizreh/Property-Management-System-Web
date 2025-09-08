import {create} from 'zustand';

const useServiceProvidersStore = create((set) => ({
    serviceProviders: [],
    setServiceProviders: (serviceProviders) => set({serviceProviders}),
}));

export default useServiceProvidersStore;
