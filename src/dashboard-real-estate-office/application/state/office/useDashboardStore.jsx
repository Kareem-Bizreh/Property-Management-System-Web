import {create} from 'zustand';

const useDashboardStore = create((set) => ({
    dashboard: null,
    setDashboard: (dashboard) => set({dashboard}),
}));

export default useDashboardStore;
