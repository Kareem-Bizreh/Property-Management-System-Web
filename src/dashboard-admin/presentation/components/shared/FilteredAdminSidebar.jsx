import {SIDEBAR_ITEMS} from "../../../shared/constants/sidebarContent.jsx";
import useUserStore from "../../../../shared/application/state/useUserStore.jsx";
import Sidebar from "../../../../shared/presentation/components/Sidebar.jsx";

export const FilteredAdminSidebar = () => {
    const {user} = useUserStore();

    const filteredItems = SIDEBAR_ITEMS.filter((item) => {
        if (item.onlyManager) {
            return user.role === 'مدير';
        }
        if (item.permissions.length === 0) {
            return true;
        }
        for (const permission of item.permissions) {
            if (user?.permissions?.includes(permission)) {
                return true;
            }
        }
        return false;
    });

    return <Sidebar items={filteredItems}/>;
};
