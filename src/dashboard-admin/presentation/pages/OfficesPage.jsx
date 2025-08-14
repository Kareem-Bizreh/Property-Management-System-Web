import {useState} from "react";
import Header from "../../../shared/presentation/components/Header.jsx";
import {CustomTabPanel, Tabs} from "../../../shared/presentation/components/Tabs.jsx";
import OfficeCard from "../components/shared/OfficeCard.jsx";
import TableHead from "../components/shared/TableHead.jsx";
import JoinRequest from "../components/offices/JoinRequest.jsx";

const OfficesPage = () => {
    const tabs = ['مكتب وسيط', 'مزود خدمة', 'طلبات انضمام'];
    const [tab, setTab] = useState(0);

    const joinRequest = [
        {
            date: '2025-01-01',
            type: 'مزود خدمة',
            name: 'كريم',
            location: {latitude: 31.963158, longitude: 35.930359},
            document: ''
        },
        {
            date: '2025-01-02',
            type: 'مكتب وسيط',
            name: 'احمد',
            location: {latitude: 30.045915, longitude: 31.224349},
            document: ''
        },
        {
            date: '2025-01-10',
            type: 'مزود خدمة',
            name: 'سارة',
            location: {latitude: 29.979235, longitude: 31.134202},
            document: ''
        },
        {
            date: '2025-01-15',
            type: 'مكتب وسيط',
            name: 'محمد',
            location: {latitude: 32.559899, longitude: 35.721849},
            document: ''
        },
        {
            date: '2025-01-20',
            type: 'مزود خدمة',
            name: 'ليلى',
            location: {latitude: 31.768318, longitude: 35.213711},
            document: ''
        },
    ];


    return (
        <div className="flex flex-col">
            <Header title={'المكاتب الوسيطة'}/>
            <Tabs tabs={tabs} minWidth={"50px"} border={false} tab={tab} setTab={setTab}
                  tabHeight={'45px'} bgHeight={'65px'} borderRadius={'15px'}/>

            <div className="p-2 w-full h-full">
                {/*مكتب وسيط*/}
                <CustomTabPanel value={tab} index={0}>
                    <div className="flex flex-row flex-wrap items-center gap-6 p-4">
                        <OfficeCard type={'سياحي'} name={'كريم البزرة'} location={'دمشق, المزة'} rate={4.75} id={1}/>
                    </div>
                </CustomTabPanel>

                {/*مزود خدمة*/}
                <CustomTabPanel value={tab} index={1}>
                    <div className="flex flex-row flex-wrap items-center gap-6 p-4">
                        <OfficeCard type={'كهربائي'} name={'كريم البزرة'} location={'دمشق, المزة'} rate={4.75} id={2}/>
                    </div>
                </CustomTabPanel>

                {/*طلبات انضمام*/}
                <CustomTabPanel value={tab} index={2}>
                    <div className="flex flex-col gap-4">
                        <TableHead titles={titles}/>
                        {joinRequest.map(({date, type, name, location, document}) => (
                            <JoinRequest name={name} location={location} document={document} type={type} date={date}/>
                        ))}
                    </div>
                </CustomTabPanel>
            </div>
        </div>
    )
}
export default OfficesPage
const titles = [
    {name: 'تاريخ الطلب', width: '120px'},
    {name: 'نوع الطلب', width: '120px'},
    {name: 'اسم الوسيط', width: '140px'},
    {name: 'الموقع', width: '150px'},
    {name: 'الوثيقة', width: '150px'},
    {name: 'الحالة', width: '200px'},
];