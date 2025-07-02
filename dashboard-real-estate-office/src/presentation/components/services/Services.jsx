import Service from "./Service.jsx";

const Services = () => {
    const services = [
        {
            id: 1,
            name: "أبو النور",
            location: 'دمشق, ميدان',
            userPhone: "0912345678",
            career: 'كهربائي - صيانة',
            logo: '',
            avgRate: 4.75,
            openTime: '10:00AM',
            closeTime: '08:00PM'
        },
        {
            id: 2,
            name: "ورشة النجم",
            location: 'دمشق, برزة',
            userPhone: "0998765432",
            career: 'ميكانيكي سيارات',
            logo: '',
            avgRate: 4.5,
            openTime: '09:00AM',
            closeTime: '07:00PM'
        },
        {
            id: 3,
            name: "زهرة الشام",
            location: 'دمشق, ركن الدين',
            userPhone: "0944112233",
            career: 'نجار أثاث',
            logo: '',
            avgRate: 4.9,
            openTime: '08:00AM',
            closeTime: '05:00PM'
        },
        {
            id: 4,
            name: "اليد الذهبية",
            location: 'دمشق, باب توما',
            userPhone: "0933221100",
            career: 'سباك',
            logo: '',
            avgRate: 4.3,
            openTime: '07:00AM',
            closeTime: '03:00PM'
        },
        {
            id: 5,
            name: "المهندس السريع",
            location: 'دمشق, المزة',
            userPhone: "0955667788",
            career: 'فني تكييف وتبريد',
            logo: '',
            avgRate: 4.8,
            openTime: '11:00AM',
            closeTime: '09:00PM'
        }
    ]


    return (
        <div className="flex flex-col px-10 py-4 gap-4">
            {services.map((service) => (
                <Service service={service}/>
            ))}
        </div>
    )
}
export default Services
