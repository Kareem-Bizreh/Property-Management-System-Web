import Header from "../../../shared/presentation/components/Header.jsx";
import {useState} from "react";
import {Tabs, CustomTabPanel} from "../../../shared/presentation/components/Tabs.jsx";
import TableHead from "../components/shared/TableHead.jsx";
import FinancialRecord from "../components/financialManagement/FinancialRecord.jsx";
import CreditCard from "../../../shared/presentation/components/financial/CreditCard.jsx";

const FinancialManagementPage = () => {
    const tabs = ['السجلات المالية', 'عرض المحفظة'];
    const [tab, setTab] = useState(0);

    const fakeData = [
        {
            id: 1,
            paid_date: '2025-01-01',
            mid: 'ابو احمد',
            type: 'إعلان صوري',
            day_period: 5,
            amount: 3000,
            advertisement_status: 'مدفوع',
            document: 'https://fakeurl.com/doc1.pdf',
        },
        {
            id: 2,
            paid_date: '2025-06-15',
            mid: 'سامي العلي',
            type: 'إعلان ترويجي',
            day_period: 10,
            amount: 6000,
            advertisement_status: 'قيد الانتظار',
            document: 'https://fakeurl.com/doc2.pdf',
        },
        {
            id: 3,
            paid_date: '2025-07-20',
            mid: 'ليلى حسن',
            type: 'إعلان صوري',
            day_period: 7,
            amount: 4200,
            advertisement_status: 'لم يتم الدفع',
            document: '',
        },
        {
            id: 4,
            paid_date: '2025-08-05',
            mid: 'محمد الزهراني',
            type: 'إعلان ترويجي',
            day_period: 14,
            amount: 12000,
            advertisement_status: 'مدفوع',
            document: 'https://fakeurl.com/doc4.pdf',
        },
        {
            id: 5,
            paid_date: '2025-08-10',
            mid: 'نور الطائي',
            type: 'إعلان صوري',
            day_period: 3,
            amount: 1800,
            advertisement_status: 'قيد الانتظار',
            document: '',
        },
        {
            id: 6,
            paid_date: '2025-08-12',
            mid: 'سعيد الجبوري',
            type: 'إعلان ترويجي',
            day_period: 30,
            amount: 25000,
            advertisement_status: 'مدفوع',
            document: 'https://fakeurl.com/doc6.pdf',
        },
    ];

    return (
        <div className="flex flex-col">
            <Header title={'إدارة المالية'}/>
            <Tabs tabs={tabs} minWidth={"50px"} border={false} tab={tab} setTab={setTab}
                  tabHeight={'45px'} bgHeight={'65px'} borderRadius={'15px'}/>

            <div className="p-1 w-full h-full">
                {/*السجلات المالية*/}
                <CustomTabPanel value={tab} index={0}>
                    <TableHead titles={titles}/>
                    <div className="flex flex-col items-center gap-2 w-full">
                        {fakeData.map((item) => (
                            <FinancialRecord record={item}/>
                        ))}
                    </div>
                </CustomTabPanel>

                {/*المحفظة*/}
                <CustomTabPanel value={tab} index={1}>
                    <div className="flex items-center justify-center w-full h-full p-8">
                        <CreditCard/>
                    </div>
                </CustomTabPanel>
            </div>
        </div>
    )
}
export default FinancialManagementPage

const titles = [
    {name: 'تاريخ الدفع', width: '110px'},
    {name: 'الوسيط', width: '140px'},
    {name: 'نوع الإعلان', width: '120px'},
    {name: 'عدد الأيام', width: '110px'},
    {name: 'المبلغ', width: '110px'},
    {name: 'الحالة', width: '120px'},
    {name: '', width: '140px'},
];