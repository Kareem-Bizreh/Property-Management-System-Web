import dashboard from '../../../shared/assets/sidebar/dashboard.svg'
import users from '../../../shared/assets/sidebar/users.svg'
import ads from '../../../shared/assets/sidebar/ads.svg'
import office from '../../../shared/assets/sidebar/office.svg'
import notifications from '../../../shared/assets/sidebar/notifications.svg'
import support from '../../../shared/assets/sidebar/support.svg'
import logout from '../../../shared/assets/sidebar/logout.svg'

export const SIDEBAR_ITEMS = [
    {name: 'لوحة التحكم', icon: dashboard, href: 'dashboard', permissions: ['مراقب النظام']},
    {name: 'إدارة المستخدمين', icon: users, href: 'users', permissions: [], onlyManager: true},
    {name: 'إدارة المالية', icon: dashboard, href: 'financial-management', permissions: ['إدارة المالية والإعلانات']},
    {name: 'إدارة الإعلانات', icon: ads, href: 'ads-management', permissions: ['إدارة المالية والإعلانات']},
    {name: 'المكاتب الوسيطة', icon: office, href: 'offices', permissions: ['إدارة الوسطاء']},
    {name: 'المنشورات والطلبات', icon: dashboard, href: 'posts-requests', permissions: ['إدارة المنشورات']},
    {name: 'مركز الإشعارات', icon: notifications, href: 'notifications', permissions: []},
    {name: 'الشكاوي', icon: notifications, href: 'complaints', permissions: ['إدارة الشكاوي والدعم']},
    {name: 'مركز الدعم', icon: support, href: 'support', permissions: ['إدارة الشكاوي والدعم']},
    {name: 'تسجيل الخروج', icon: logout, href: '/logout', permissions: []},
];