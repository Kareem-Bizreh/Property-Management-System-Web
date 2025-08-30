import {useEffect, useState} from "react";
import Header from "../../../shared/presentation/components/Header.jsx";
import {CustomTabPanel, Tabs} from "../../../shared/presentation/components/Tabs.jsx";
import OfficeCard from "../components/shared/OfficeCard.jsx";
import TableHead from "../components/shared/TableHead.jsx";
import JoinRequest from "../components/offices/JoinRequest.jsx";
import PublicationRequests from "../components/offices/PublicationRequests.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import useDataStore from "../../application/state/useDataStore.jsx";
import {getOffices} from "../../application/useCases/partnersManagement/getOfficesUseCase.jsx";
import {getServiceProviders} from "../../application/useCases/partnersManagement/getServiceProvidersUseCase.jsx";
import {getJoinRequests} from "../../application/useCases/partnersManagement/getJoinRequestsUseCase.jsx";
import {getPropertyPosts} from "../../application/useCases/partnersManagement/getPropertyPostsUseCase.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";
import {
    sendJoinRequestsRespond
} from "../../application/useCases/partnersManagement/sendJoinRequestsRespondUseCase.jsx";
import {
    sendPropertyPostsRespond
} from "../../application/useCases/partnersManagement/sendPropertyPostsRespondUseCase.jsx";

const OfficesPage = () => {
    const tabs = ['مكتب وسيط', 'مزود خدمة', 'طلبات انضمام', 'طلبات النشر'];
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
                    result = await getOffices();
                    break;
                case 1:
                    result = await getServiceProviders();
                    break;
                case 2:
                    result = await getJoinRequests();
                    break;
                case 3:
                    result = await getPropertyPosts();
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

    const onAccept = async (tap, id) => {
        setIsLoading(true);
        let result;
        switch (tap) {
            case 2:
                result = await sendJoinRequestsRespond(id, true, "");
                break;
            case 3:
                result = await sendPropertyPostsRespond(id, true, "");
                break;
        }
        if (result.success) {
            setDataForTab(tab, data[tap].filter((item) => item.id !== id));
            notifySuccess("تم القبول بنجاح");
        } else {
            notifyError(result.response);
        }
        setIsLoading(false);
    }

    const onReject = async (tap, id, reason) => {
        setIsLoading(true);
        let result;
        switch (tap) {
            case 2:
                result = await sendJoinRequestsRespond(id, false, reason);
                break;
            case 3:
                result = await sendPropertyPostsRespond(id, false, reason);
                break;
        }
        if (result.success) {
            setDataForTab(tab, data[tap].filter((item) => item.id !== id));
            notifySuccess("تم الرفض بنجاح");
        } else {
            notifyError(result.response);
        }
        setIsLoading(false);
    }

    return (
        <div className="flex flex-col">
            <Header title={'المكاتب الوسيطة'}/>
            <Tabs tabs={tabs} minWidth={"100px"} border={false} tab={tab} setTab={setTab}
                  tabHeight={'45px'} bgHeight={'65px'} borderRadius={'15px'}/>

            {(isLoading || !data) ? <Spinner/> :
                <div className="p-2 w-full h-full">
                    {/*مكتب وسيط*/}
                    <CustomTabPanel value={tab} index={0}>
                        <div className="flex flex-row flex-wrap items-center gap-6 p-4">
                            {data[0]?.map(({id, logo, name, type, location, rate}) => (
                                <OfficeCard id={id} name={name} image={logo} location={location} type={type}
                                            rate={rate?.avgRate?? 0} officeType={"real-estate"}/>
                            ))}
                        </div>
                    </CustomTabPanel>

                    {/*مزود خدمة*/}
                    <CustomTabPanel value={tab} index={1}>
                        <div className="flex flex-row flex-wrap items-center gap-6 p-4">
                            {data[1]?.map(({id, logo, name, career, location, avgRate}) => (
                                <OfficeCard id={id} name={name} image={logo} location={location} type={career}
                                            rate={avgRate} officeType={"service-provider"}/>
                            ))}
                        </div>
                    </CustomTabPanel>

                    {/*طلبات انضمام*/}
                    <CustomTabPanel value={tab} index={2}>
                        <div className="flex flex-col gap-4 px-4">
                            <TableHead titles={titles}/>
                            {data[2]?.map((item) => (
                                <JoinRequest id={item.id} name={item.full_name} type={item.agent_type}
                                             location={{lng: item.longitude, lat: item.latitude}}
                                             document={item.proof_document} date={item.created_at}
                                             onAccept={onAccept} onReject={onReject}/>
                            ))}
                        </div>
                    </CustomTabPanel>

                    {/*طلبات النشر*/}
                    <CustomTabPanel value={tab} index={3}>
                        <div className="flex flex-col gap-4 px-4">
                            {data[3]?.map((item) => (
                                <PublicationRequests
                                    id={item.id} type={item.type} location={item.location} officeName={item.office_name}
                                    officeLocation={item.office_location} image={item.image} postTitle={item.title}
                                    duration={item.rental_period} listing_type={item.listing_type} onAccept={onAccept}
                                    amount={item.price || item.selling_price || item.rental_price} onReject={onReject}/>
                            ))}
                        </div>
                    </CustomTabPanel>
                </div>}
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