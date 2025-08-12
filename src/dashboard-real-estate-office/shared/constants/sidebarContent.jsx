import dashboard from '../../../shared/assets/sidebar/dashboard.svg'
import myProperties from '../../../shared/assets/sidebar/my-properties.svg'
import tourism from '../../../shared/assets/sidebar/tourism.svg'
import booking from '../../../shared/assets/sidebar/booking.svg'
import rentals from '../../../shared/assets/sidebar/rentals.svg'
import users from '../../../shared/assets/sidebar/users.svg'
import ads from '../../../shared/assets/sidebar/ads.svg'
import office from '../../../shared/assets/sidebar/office.svg'
import services from '../../../shared/assets/sidebar/services.svg'
import notifications from '../../../shared/assets/sidebar/notifications.svg'
import support from '../../../shared/assets/sidebar/support.svg'
import logout from '../../../shared/assets/sidebar/logout.svg'

export const SIDEBAR_ITEMS = [
    { name: 'لوحة التحكم', icon: dashboard, href: 'dashboard' },
    { name: 'عقاراتي', icon: myProperties, href: 'my-properties' },
    { name: 'سياحي', icon: tourism, href: 'tourism' },
    { name: 'حجز الأملاك', icon: booking, href: 'reservations' },
    { name: 'الإيجارات', icon: rentals, href: 'rentals' },
    { name: 'طلبات المستخدمين', icon: users, href: 'user-requests' },
    { name: 'الإعلانات', icon: ads, href: 'ads' },
    { name: 'معلومات المكتب', icon: office, href: 'office-info' },
    { name: 'الخدمات', icon: services, href: 'services' },
    { name: 'مركز الإشعارات', icon: notifications, href: 'notifications' },
    { name: 'مركز الدعم', icon: support, href: 'support' },
    { name: 'تسجيل الخروج', icon: logout, href: '/logout' },
];