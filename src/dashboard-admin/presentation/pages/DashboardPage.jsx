import Header from "../../../shared/presentation/components/Header.jsx";
import DetailsCards from "../../presentation/components/dashboard/DetailsCards.jsx";
import MostRatedOffices from "../components/dashboard/MostRatedOffices.jsx";
import MostRatedServiceProviders from "../components/dashboard/MostRatedServiceProviders.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import useDataStore from "../../application/state/useDataStore.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";
import {useEffect} from "react";
import {getPopular} from "../../application/useCases/stats/getPopularUseCase.jsx";
import {getPublicInfo} from "../../application/useCases/stats/getPublicInfoUseCase.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";

const DashboardPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {data, setDataForTab} = useDataStore();
    const {notifyError} = useNotification();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const result1 = await getPublicInfo();
            const result2 = await getPopular("مكتب");
            const result3 = await getPopular("مزود خدمة");
            if (result1.success && result2.success && result3.success) {
                setDataForTab(0, [{
                    public_info: result1.response.data,
                    offices: result2.response.data,
                    services: result3.response.data,
                }]);
            } else {
                setDataForTab(0, []);
                if (!result1.success) {
                    notifyError(result1.response);
                } else if (!result2.success) {
                    notifyError(result2.response);
                } else {
                    notifyError(result3.response);
                }
            }

            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col">
            <Header title={"لوحة التحكم"}/>
            {(isLoading || !data) ? <Spinner/> :
                <div className="flex flex-col p-2">
                    <DetailsCards stats={data[0]?.[0]?.public_info}/>
                    <MostRatedOffices popular={data[0]?.[0]?.offices}/>
                    <MostRatedServiceProviders popular={data[0]?.[0]?.services}/>
                </div>}
        </div>
    )
}
export default DashboardPage
