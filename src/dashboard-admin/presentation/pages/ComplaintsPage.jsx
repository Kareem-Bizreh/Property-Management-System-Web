import {useState} from "react";
import Header from "../../../shared/presentation/components/Header.jsx";
import {CustomTabPanel, Tabs} from "../../../shared/presentation/components/Tabs.jsx";
import OfficeCard from "../components/shared/OfficeCard.jsx";
import TableHead from "../components/shared/TableHead.jsx";
import Complaint from "../components/complaints/Complaint.jsx";

const ComplaintsPage = () => {
    const tabs = ['الشكاوي', 'طلبات الشكوى'];
    const [tab, setTab] = useState(0);

    const complaints = [
        {id: 1, type: 'سياحي', name: 'كريم البزرة', location: 'دمشق, المزة', complaints: 1},
        {id: 2, type: 'سياحي', name: 'ليلى حداد', location: 'حمص, الحمراء', complaints: 0},
        {id: 3, type: 'سياحي', name: 'سامر خليل', location: 'حلب, الشيخ مقصود', complaints: 3},
        {id: 4, type: 'سياحي', name: 'رنا يعقوب', location: 'اللاذقية, الكازية', complaints: 2},
        {id: 5, type: 'سياحي', name: 'أنس الزعيم', location: 'دير الزور, غويران', complaints: 1},
    ];

    const complaintRequests = [
        {
            date: "2025-08-10",
            name: "كريم البزرة",
            phone: "0999123456",
            reason: "تأخير في الرد على الاستفسارات."
        },
        {
            date: "2025-08-08",
            name: "ليلى حداد",
            phone: "0987654321",
            reason: "عدم توفر معلومات كافية عن المنتج."
        },
        {
            date: "2025-08-05",
            name: "سامر خليل",
            phone: "0976543210",
            reason: "خدمة العملاء لم تكن متعاونة."
        },
        {
            date: "2025-07-30",
            name: "رنا يعقوب",
            phone: "0965432109",
            reason: "تأخير في عملية التوصيل."
        },
        {
            date: "2025-07-25",
            name: "أنس الزعيم",
            phone: "0954321098",
            reason: "مشكلة في جودة المنتج المستلم."
        }
    ];


    return (
        <div className="flex flex-col">
            <Header title={'المكاتب الوسيطة'}/>
            <Tabs tabs={tabs} minWidth={"50px"} border={false} tab={tab} setTab={setTab}
                  tabHeight={'45px'} bgHeight={'65px'} borderRadius={'15px'}/>

            <div className="p-1 w-full h-full">
                {/*الشكاوي*/}
                <CustomTabPanel value={tab} index={0}>
                    <div className="flex flex-row flex-wrap items-center gap-6 p-4">
                        {complaints.map(({type, name, location, id, complaints}) => (
                            <OfficeCard type={type} name={name} location={location} id={id} complaints={complaints}/>
                        ))}
                    </div>
                </CustomTabPanel>

                {/*طلبات الشكوى*/}
                <CustomTabPanel value={tab} index={1}>
                    <div className="p-2 flex flex-col gap-2">
                        <TableHead titles={titles}/>
                        <div className="flex flex-col gap-4">
                            {complaintRequests.map(({date, name, phone, reason}) => (
                                <Complaint name={name} date={date} phone={phone} reason={reason}/>
                            ))}
                        </div>
                    </div>
                </CustomTabPanel>
            </div>
        </div>
    )
}
export default ComplaintsPage
const titles = [
    {name: 'تاريخ البلاغ', width: '120px'},
    {name: 'الوسيط', width: '140px'},
    {name: 'رقم المستخدم', width: '140px'},
    {name: 'سبب البلاغ', width: '400px'},
    {name: 'التحكم', width: '180px'},
];