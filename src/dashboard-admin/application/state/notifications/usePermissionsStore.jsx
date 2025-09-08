import {create} from 'zustand';

const usePermissionsStore = create((set) => ({
    users: false,
    admins: false,
    offices: false,

    setPermission: (name, value) => set({[name]: value}),
    resetPermissions: () =>
        set({
            users: false,
            admins: false,
            offices: false,
        }),
}));

export default usePermissionsStore;
