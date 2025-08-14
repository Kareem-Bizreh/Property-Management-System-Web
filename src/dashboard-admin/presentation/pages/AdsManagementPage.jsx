import Header from "../../../shared/presentation/components/Header.jsx";
import {useState} from "react";
import {Tabs, CustomTabPanel} from "../../../shared/presentation/components/Tabs.jsx";
import FinancialRecord from "../components/adsManagement/FinancialRecord.jsx";

const AdsManagementPage = () => {
    const tabs = ['الإعلانات الحالية', 'طلبات الإعلانات'];
    const [tab, setTab] = useState(0);

    const fakeData = [
        {
            record: {
                id: 1,
                paid_date: '2025-01-02',
                mid: 'ابو احمد',
                type: 'إعلان صوري',
                day_period: 5,
                amount: 3000,
                advertisement_status: 'مدفوع',
                document: 'https://fakeurl.com/doc1.pdf',
            }
        },
        {
            record: {
                id: 2,
                paid_date: '2025-06-15',
                mid: 'سامي العلي',
                type: 'إعلان ترويجي',
                day_period: 10,
                amount: 6000,
                advertisement_status: 'قيد الانتظار',
                document: 'https://fakeurl.com/doc2.pdf',
            },
            propertyName: 'تيست تيست تيست تيست تيست تيست'
        },
    ];

    return (
        <div className="flex flex-col">
            <Header title={'إدارة الإعلانات'}/>
            <Tabs tabs={tabs} minWidth={"50px"} border={false} tab={tab} setTab={setTab}
                  tabHeight={'45px'} bgHeight={'65px'} borderRadius={'15px'}/>

            <div className="p-1 w-full h-full">
                {/*الإعلانات الحالية*/}
                <CustomTabPanel value={tab} index={0}>
                    <div className="flex flex-col items-center gap-2 w-full">
                        {fakeData.map((item) => (
                            <FinancialRecord record={item.record} control={false} propertyName={item.propertyName}/>
                        ))}
                    </div>
                </CustomTabPanel>

                {/*طلبات الإعلانات*/}
                <CustomTabPanel value={tab} index={1}>
                    <div className="flex flex-col items-center gap-2 w-full">
                        {fakeData.map((item) => (
                            <FinancialRecord record={item.record} control={true} propertyName={item.propertyName}/>
                        ))}
                    </div>
                </CustomTabPanel>
            </div>
        </div>
    )
}
export default AdsManagementPage
