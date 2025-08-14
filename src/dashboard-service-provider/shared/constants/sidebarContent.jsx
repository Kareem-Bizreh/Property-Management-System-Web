import dashboard from '../../../shared/assets/sidebar/dashboard.svg'
import notifications from '../../../shared/assets/sidebar/notifications.svg'
import support from '../../../shared/assets/sidebar/support.svg'
import logout from '../../../shared/assets/sidebar/logout.svg'

export const SIDEBAR_ITEMS = [
    { name: 'لوحة التحكم', icon: dashboard, href: 'dashboard' },
    { name: 'مركز الإشعارات', icon: notifications, href: 'notifications' },
    { name: 'مركز الدعم', icon: support, href: 'support' },
    { name: 'تسجيل الخروج', icon: logout, href: '/logout' },
];