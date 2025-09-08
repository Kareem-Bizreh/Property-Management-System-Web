import {useEffect, useState} from "react";
import Header from "../../../shared/presentation/components/Header.jsx";
import {CustomTabPanel, Tabs} from "../../../shared/presentation/components/Tabs.jsx";
import OfficeCard from "../components/shared/OfficeCard.jsx";
import TableHead from "../components/shared/TableHead.jsx";
import Complaint from "../components/complaints/Complaint.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import useDataStore from "../../application/state/useDataStore.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";
import {getComplaints} from "../../application/useCases/complaints/getComplaintsUseCase.jsx";
import {getPendingComplaints} from "../../application/useCases/complaints/getPendingComplaintsUseCase.jsx";
import {respondToComplaints} from "../../application/useCases/complaints/respondToComplaintsUseCase.jsx";

const ComplaintsPage = () => {
    const tabs = ['الشكاوي', 'طلبات الشكوى'];
    const [tab, setTab] = useState(0);
    const {isLoading, setIsLoading} = useLoadingStore();
    const {data, setDataForTab} = useDataStore();
    const {notifyError, notifySuccess} = useNotification();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            let result;
            switch (tab) {
                case 0:
                    result = await getComplaints();
                    break;
                case 1:
                    result = await getPendingComplaints();
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

    const onRespond = async (id, approved, type) => {
        setIsLoading(true);
        const {success, response} = await respondToComplaints(id, approved, type);
        if (success) {
            setDataForTab(1, data[1].filter((item) => item.id !== id || item.type !== type));
            if (!approved) {
                notifySuccess("تم الرفض بنجاح");
            } else {
                notifySuccess("تم القبول بنجاح")
            }
        } else {
            notifyError(response);
        }
        setIsLoading(false);
    }

    return (
        <div className="flex flex-col">
            <Header title={'المكاتب الوسيطة'}/>
            <Tabs tabs={tabs} minWidth={"50px"} border={false} tab={tab} setTab={setTab}
                  tabHeight={'45px'} bgHeight={'65px'} borderRadius={'15px'}/>

            {(isLoading || !data) ? <Spinner/> :
                <div className="p-1 w-full h-full">
                    {/*الشكاوي*/}
                    <CustomTabPanel value={tab} index={0}>
                        <div className="flex flex-row flex-wrap items-center gap-6 p-4">
                            {data[0]?.map((item) => (
                                <OfficeCard id={item.id} officeType={item.type} name={item.name}
                                            location={item.location}
                                            image={item.logo} complaints={item.complaints_count}
                                            type={item.office_type || item.career}/>
                            ))}
                        </div>
                    </CustomTabPanel>

                    {/*طلبات الشكوى*/}
                    <CustomTabPanel value={tab} index={1}>
                        <div className="p-2 flex flex-col gap-2">
                            <TableHead titles={titles}/>
                            <div className="flex flex-col gap-4">
                                {data[1]?.map((item) => (
                                    <Complaint id={item.id} type={item.type} name={item.office_name}
                                               date={item.created_at}
                                               phone={item.user_mobile} reason={item.complaint}
                                               onReject={() => onRespond(item.id, false, item.type)}
                                               onAccept={() => onRespond(item.id, true, item.type)}/>
                                ))}
                            </div>
                        </div>
                    </CustomTabPanel>
                </div>}
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