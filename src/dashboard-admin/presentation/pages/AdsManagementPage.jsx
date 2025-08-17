import Header from "../../../shared/presentation/components/Header.jsx";
import {useEffect, useState} from "react";
import {Tabs, CustomTabPanel} from "../../../shared/presentation/components/Tabs.jsx";
import FinancialRecord from "../components/adsManagement/FinancialRecord.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import useDataStore from "../../application/state/useDataStore.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import {getApprovedAds} from "../../application/useCases/financeAndAds/getApprovedAdsUseCase.jsx";
import {getAdRequests} from "../../application/useCases/financeAndAds/getAdRequestsUseCase.jsx";
import {respondToAdRequest} from "../../application/useCases/financeAndAds/respondToAdRequestUseCase.jsx";

const AdsManagementPage = () => {
    const tabs = ['الإعلانات الحالية', 'طلبات الإعلانات'];
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
                    result = await getApprovedAds();
                    break;
                case 1:
                    result = await getAdRequests();
                    break;
            }

            if (result.success) {
                setDataForTab(tab, result.response.data);
                console.log(result.response);
            } else {
                setDataForTab(tab, []);
                notifyError(result.response);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [tab]);

    const onAccept = async (id) => {
        setIsLoading(true);
        const {success, response} = await respondToAdRequest(id, true, "");
        if (success) {
            setDataForTab(tab, data[1].filter((item) => item.id !== id));
            notifySuccess("تم القبول بنجاح");
        } else {
            notifyError(response);
        }
        setIsLoading(false);
    }

    const onReject = async (id, reason) => {
        setIsLoading(true);
        const {success, response} = await respondToAdRequest(id, false, reason);
        if (success) {
            setDataForTab(tab, data[1].filter((item) => item.id !== id));
            notifySuccess("تم الرفض بنجاح");
        } else {
            notifyError(response);
        }
        setIsLoading(false);
    }

    return (
        <div className="flex flex-col">
            <Header title={'إدارة الإعلانات'}/>
            <Tabs tabs={tabs} minWidth={"50px"} border={false} tab={tab} setTab={setTab}
                  tabHeight={'45px'} bgHeight={'65px'} borderRadius={'15px'}/>

            {(isLoading || !data) ? <Spinner/> :
                <div className="p-1 w-full h-full">
                    {/*الإعلانات الحالية*/}
                    <CustomTabPanel value={tab} index={0}>
                        <div className="flex flex-col items-center gap-2 w-full">
                            {data[0]?.map((item) => (
                                <FinancialRecord record={item}/>
                            ))}
                        </div>
                    </CustomTabPanel>

                    {/*طلبات الإعلانات*/}
                    <CustomTabPanel value={tab} index={1}>
                        <div className="flex flex-col items-center gap-2 w-full">
                            {data[1]?.map((item) => (
                                <FinancialRecord record={item} onAccept={onAccept} onReject={onReject}/>
                            ))}
                        </div>
                    </CustomTabPanel>
                </div>}
        </div>
    )
}
export default AdsManagementPage
