import Header from "../components/shared/Header.jsx";
import PostDetails from "../components/shared/PostDetails.jsx";
import PropertyImages from "../components/shared/PropertyImages.jsx";
import PropertyDetails from "../components/myProperties/PropertyDetails.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import {PropertyTags} from "../../shared/constants/propertyPostTag.jsx";
import {useEffect} from "react";
import usePropertyStore from "../../application/state/Property/usePropertyStore.jsx";
import useCommissionStore from "../../application/state/office/useCommissionStore.jsx";
import {getOfficeCommission} from "../../application/useCases/office/getCommissionUseCase.jsx";
import useMeterPriceStore from "../../application/state/residentialOffice/useMeterPriceStore.jsx";
import {Property} from "../../domain/entities/Property.jsx";
import {getMeterPrice} from "../../application/useCases/region/getExpectedPriceUseCase.jsx";


const AddPropertyPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {setProperty} = usePropertyStore();
    const {setCommission} = useCommissionStore();
    const {setMeterPrice} = useMeterPriceStore();

    useEffect(() => {
        const loadAllData = async () => {
            setIsLoading(true);

            const fetchProperty = async () => {
                setProperty(Property.createInitial());
                await fetchMeterPrice(1);
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

    if (isLoading) return <Spinner/>;

    return (
        <div className="flex flex-col gap-4">
            <div className="-mb-6">
                <Header title={"إضافة عقار"}/>
            </div>
            <PostDetails options={PropertyTags}/>
            <div className="flex flex-row gap-4 mx-6 flex-wrap">
                <div className="flex-5">
                    <PropertyDetails/>
                </div>
                <div className="flex-2">
                    <PropertyImages/>
                </div>
            </div>
        </div>
    );
};
export default AddPropertyPage;
