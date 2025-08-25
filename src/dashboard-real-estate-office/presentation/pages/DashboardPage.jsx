import {useEffect} from "react";
import OfficeDetails from "../components/dashboard/OfficeDetails.jsx";
import DetailsCards from "../components/dashboard/DetailsCards.jsx";
import MostRequestedAreas from "../components/dashboard/MostRequestedAreas.jsx";
import MostRatedProperties from "../components/dashboard/MostRatedProperties.jsx";
import MostRatedTourist from "../components/dashboard/MostRatedTourist.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import {getDashboard} from "../../application/useCases/office/getDashboardUseCase.jsx";
import {getTopRegions} from "../../application/useCases/office/getTopRegionsUseCase.jsx";
import {getTopRatedProperties} from "../../application/useCases/office/getTopRatedPropertiesUseCase.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";
import useDashboardStore from "../../application/state/office/useDashboardStore.jsx";
import useTopRegionsStore from "../../application/state/office/useTopRegionsStore.jsx";
import useTopRatedPropertiesStore from "../../application/state/office/useTopRatedPropertiesStore.jsx";

const DashboardPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {dashboard, setDashboard} = useDashboardStore();
    const {topRegions, setTopRegions} = useTopRegionsStore();
    const {topRatedProperties, setTopRatedProperties} = useTopRatedPropertiesStore();
    const {notifyError} = useNotification();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {

            const getStats = async () => {
                const {success, response} = await getDashboard();
                if (!success) {
                    notifyError(response);
                    setDashboard(null);
                } else {
                    setDashboard(response.data);
                }
            }

            const topRegions = async () => {
                const {success, response} = await getTopRegions();
                if (!success) {
                    notifyError(response);
                    setTopRegions(null);
                } else {
                    setTopRegions(response);
                }
            }

            const topRatedProperties = async () => {
                try {
                    const [tourism, residential] = await Promise.all([
                        getTopRatedProperties("سياحي"),
                        getTopRatedProperties("عقاري")
                    ]);

                    if (!tourism.success) notifyError(tourism.response);
                    if (!residential.success) notifyError(residential.response);

                    setTopRatedProperties({
                        residential: residential.response instanceof Array ? residential.response : [],
                        tourism: tourism.response instanceof Array ? tourism.response : []
                    });
                } catch (error) {
                    notifyError("حدث خطأ غير متوقع");
                }
            };

            await Promise.all([
                getStats(),
                topRegions(),
                topRatedProperties()
            ]);
            setIsLoading(false);
        }

        fetchData();
    }, []);

    if (isLoading) return <Spinner/>;

    return (
        <div className="flex flex-col">
            <OfficeDetails {...dashboard}/>
            <DetailsCards complaints={dashboard?.complaints_count} profits={dashboard?.profits}
                          touristic={dashboard?.touristicCount} residentialSale={dashboard?.residentialSaleCount}
                          residentialRent={dashboard?.residentialRentCount}/>
            <MostRequestedAreas tourism={topRegions?.tourism ?? []} residential={topRegions?.residential ?? []}/>
            <MostRatedProperties properties={topRatedProperties?.residential}/>
            <MostRatedTourist properties={topRatedProperties?.tourism}/>
        </div>

    )
}
export default DashboardPage
