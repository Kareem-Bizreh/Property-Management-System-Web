import Header from "../components/shared/Header.jsx";
import PostDetails from "../components/shared/PostDetails.jsx";
import {useParams} from "react-router";
import PropertyDetails from "../components/myProperties/PropertyDetails.jsx";
import PropertyImages from "../components/shared/PropertyImages.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import {PropertyTags} from "../../shared/constants/propertyPostTag.jsx";
import {useEffect} from "react";
import usePropertyStore from "../../application/state/Property/usePropertyStore.jsx";
import {getProperty} from "../../application/useCases/residentialOffice/getPropertyUseCase.jsx";
import useCommissionStore from "../../application/state/office/useCommissionStore.jsx";
import {getOfficeCommission} from "../../application/useCases/office/getCommissionUseCase.jsx";
import useMeterPriceStore from "../../application/state/residentialOffice/useMeterPriceStore.jsx";
import {getMeterPrice} from "../../application/useCases/region/getExpectedPriceUseCase.jsx";

const PropertyPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {property, setProperty} = usePropertyStore();
    const {setCommission} = useCommissionStore();
    const {setMeterPrice} = useMeterPriceStore();
    const {id} = useParams();

    useEffect(() => {
        const loadAllData = async () => {
            setIsLoading(true);

            const fetchProperty = async () => {
                const {success, response} = await getProperty(id);
                if (success) {
                    const data = response.data;
                    setProperty(data);
                    await fetchMeterPrice(data.region.id);
                } else {
                    setProperty(null);
                    alert(response);
                }
            };

            const fetchCommission = async () => {
                const {success, response} = await getOfficeCommission();
                if (success) {
                    setCommission(response);
                } else {
                    setCommission(null);
                    alert(response);
                }
            };

            const fetchMeterPrice = async (regionId) => {
                const {success, response} = await getMeterPrice(regionId);
                if (success) {
                    setMeterPrice(response);
                } else {
                    setMeterPrice(null);
                    alert(response);
                }
            };

            await Promise.all([
                fetchProperty(),
                fetchCommission()
            ]);

            setIsLoading(false);
        };

        loadAllData();
    }, []);

    if (isLoading)
        return <Spinner/>;

    const readOnly = property.status === "قيد الإنتظار";

    return (
        <div className="flex flex-col gap-4">
            <div className="-mb-6">
                <Header title={"عرض عقار"}/>
            </div>
            <PostDetails readOnly={readOnly} options={PropertyTags}/>
            <div className="flex flex-row gap-4 mx-6 flex-wrap">
                <div className="flex-5">
                    <PropertyDetails readOnly={readOnly}/>
                </div>
                <div className="flex-2">
                    <PropertyImages readOnly={readOnly}/>
                </div>
            </div>
        </div>
    );
};
export default PropertyPage;
