import Header from "../../../shared/presentation/components/Header.jsx";
import PostDetails from "../components/shared/PostDetails.jsx";
import PropertyImages from "../components/shared/PropertyImages.jsx";
import PropertyDetails from "../components/myProperties/PropertyDetails.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import {PropertyTags} from "../../shared/constants/propertyPostTag.jsx";
import {useEffect} from "react";
import usePropertyStore from "../../application/state/property/usePropertyStore.jsx";
import useCommissionStore from "../../application/state/office/useCommissionStore.jsx";
import {getOfficeCommission} from "../../application/useCases/office/getCommissionUseCase.jsx";
import useMeterPriceStore from "../../application/state/residentialOffice/useMeterPriceStore.jsx";
import {Property} from "../../domain/entities/Property.jsx";
import {getMeterPrice} from "../../application/useCases/region/getExpectedPriceUseCase.jsx";
import {useForm, FormProvider} from "react-hook-form";
import {add} from "../../application/useCases/residentialOffice/addResidentialUseCase.jsx";
import {upload} from "../../application/useCases/propertyImage/uploadUseCase.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";


const AddPropertyPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {property, setProperty, newImages, resetImageTracking, setNewImages, setDeletedImages} = usePropertyStore();
    const {setCommission} = useCommissionStore();
    const {setMeterPrice} = useMeterPriceStore();
    const {notifySuccess, notifyError, notifyWarning} = useNotification();

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
                    notifyError(response);
                }
            };

            const fetchMeterPrice = async (regionId) => {
                const {success, response} = await getMeterPrice(regionId);
                if (success) {
                    setMeterPrice(response);
                } else {
                    setMeterPrice(null);
                    notifyError(response);
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

    const onSubmit = async () => {
        if(!property.coordinates.lng) {
            notifyWarning("يرجى تحديد موقع العقار");
            return;
        }
        if(!property.postImage) {
            notifyWarning("يرجى ادخال صورة المنشور");
            return;
        }
        setIsLoading(true);

        try {
            // 1. add the property
            const {success, response} = await add(property);

            if (!success) {
                notifyError(response);
                return;
            }

            // 2. Upload images (if any)
            if (newImages.length > 0) {
                const formData = new FormData();
                newImages.forEach((file) => formData.append("images", file));

                const uploadResponse = await upload(response.data.id, formData);
                if (!uploadResponse.success) {
                    notifyError("فشل في رفع الصور");
                }
            }

            // 3. Reset temporary tracking
            resetImageTracking();

            notifySuccess("تم إضافة العقار بنجاح");
        } catch (err) {
            notifyError("حدث خطأ أثناء الإضافة");
        } finally {
            setIsLoading(false);
        }
    };

    const methods = useForm();

    if (isLoading || !property) return <Spinner/>;

    return (
        <FormProvider {...methods}>
            <div className="flex flex-col gap-4">
                <div className="-mb-6">
                    <Header title={"إضافة عقار"}/>
                </div>
                <PostDetails options={PropertyTags} property={property} setProperty={setProperty}/>
                <div className="flex flex-row gap-4 mx-6 flex-wrap">
                    <div className="flex-5">
                        <PropertyDetails onClick={methods.handleSubmit(onSubmit)}/>
                    </div>
                    <div className="flex-2">
                        <PropertyImages setProperty={setProperty} property={property}
                                        setDeletedImages={setDeletedImages} setNewImages={setNewImages}/>
                    </div>
                </div>
            </div>
        </FormProvider>
    );
};
export default AddPropertyPage;
