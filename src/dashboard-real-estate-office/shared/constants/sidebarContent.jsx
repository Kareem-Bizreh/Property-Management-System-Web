import dashboard from '../../assets/sidebar/dashboard.svg'
import myProperties from '../../assets/sidebar/my-properties.svg'
import tourism from '../../assets/sidebar/tourism.svg'
import booking from '../../assets/sidebar/booking.svg'
import rentals from '../../assets/sidebar/rentals.svg'
import users from '../../assets/sidebar/users.svg'
import ads from '../../assets/sidebar/ads.svg'
import office from '../../assets/sidebar/office.svg'
import services from '../../assets/sidebar/services.svg'
import notifications from '../../assets/sidebar/notifications.svg'
import support from '../../assets/sidebar/support.svg'
import logout from '../../assets/sidebar/logout.svg'

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