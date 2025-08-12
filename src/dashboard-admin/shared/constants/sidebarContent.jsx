import dashboard from '../../../shared/assets/sidebar/dashboard.svg'
import users from '../../../shared/assets/sidebar/users.svg'
import ads from '../../../shared/assets/sidebar/ads.svg'
import office from '../../../shared/assets/sidebar/office.svg'
import notifications from '../../../shared/assets/sidebar/notifications.svg'
import support from '../../../shared/assets/sidebar/support.svg'
import logout from '../../../shared/assets/sidebar/logout.svg'

export const SIDEBAR_ITEMS = [
    { name: 'لوحة التحكم', icon: dashboard, href: 'dashboard' },
    { name: 'إدارة المستخدمين', icon: users, href: 'users' },
    { name: 'إدارة المالية', icon: dashboard, href: 'financial-management' },
    { name: 'إدارة الإعلانات', icon: ads, href: 'ads-management' },
    { name: 'المكاتب الوسيطة', icon: office, href: 'offices' },
    { name: 'المنشورات والطلبات', icon: dashboard, href: 'posts-requests' },
    { name: 'مركز الإشعارات', icon: notifications, href: 'notifications' },
    { name: 'الشكاوي', icon: notifications, href: 'complaints' },
    { name: 'مركز الدعم', icon: support, href: 'support' },
    { name: 'تسجيل الخروج', icon: logout, href: '/logout' },
];