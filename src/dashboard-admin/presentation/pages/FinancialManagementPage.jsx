import Header from "../../../shared/presentation/components/Header.jsx";
import {useEffect, useState} from "react";
import {Tabs, CustomTabPanel} from "../../../shared/presentation/components/Tabs.jsx";
import TableHead from "../components/shared/TableHead.jsx";
import FinancialRecord from "../components/financialManagement/FinancialRecord.jsx";
import CreditCard from "../../../shared/presentation/components/financial/CreditCard.jsx";
import useDataStore from "../../application/state/useDataStore.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import {getAdInvoices} from "../../application/useCases/financeAndAds/getAdInvoicesUseCase.jsx";
import useUserStore from "../../../shared/application/state/useUserStore.jsx";

const FinancialManagementPage = () => {
    const {user} = useUserStore();
    const tabs = ['السجلات المالية', ...(user.role === 'مدير' ? ['عرض المحفظة'] : [])];
    const [tab, setTab] = useState(0);
    const {isLoading, setIsLoading} = useLoadingStore();
    const {data, setDataForTab} = useDataStore();
    const {notifyError} = useNotification();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            let result;
            switch (tab) {
                case 0:
                    result = await getAdInvoices()
                    break;
                case 1:
                    result = {success: false, response: "لا يوجد بطاقة لعرضها بعد"}
                    break;
            }

            if (result.success) {
                setDataForTab(tab, result.response.data);
            } else {
                setDataForTab(tab, []);
                notifyError(result.response);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [tab]);

    return (
        <div className="flex flex-col">
            <Header title={'إدارة المالية'}/>
            <Tabs tabs={tabs} minWidth={"50px"} border={false} tab={tab} setTab={setTab}
                  tabHeight={'45px'} bgHeight={'65px'} borderRadius={'15px'}/>

            {(isLoading || !data) ? <Spinner/> :
                <div className="p-1 w-full h-full">
                    {/*السجلات المالية*/}
                    <CustomTabPanel value={tab} index={0}>
                        <TableHead titles={titles}/>
                        <div className="flex flex-col items-center gap-2 w-full">
                            {data[0]?.map((item) => (
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
                </div>}
        </div>
    )
}
export default FinancialManagementPage

const titles = [
    {name: 'تاريخ الدفع', width: '110px'},
    {name: 'الوسيط', width: '200px'},
    {name: 'نوع الإعلان', width: '120px'},
    {name: 'عدد الأيام', width: '110px'},
    {name: 'المبلغ', width: '110px'},
    {name: '', width: '140px'},
];