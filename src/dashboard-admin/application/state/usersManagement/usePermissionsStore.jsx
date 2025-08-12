import {create} from 'zustand';

const usePermissionsStore = create((set) => ({
    agentsManagement: false,
    financeAndAdsManagement: false,
    postsManagement: false,
    complaintsAndSupport: false,
    systemSupervisor: false,

    setPermission: (name, value) => set({[name]: value}),
    resetPermissions: () =>
        set({
            agentsManagement: false,
            financeAndAdsManagement: false,
            postsManagement: false,
            complaintsAndSupport: false,
            systemSupervisor: false,
        }),
}));

export default usePermissionsStore;
