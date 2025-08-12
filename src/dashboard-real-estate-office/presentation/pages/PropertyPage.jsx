import Header from "../../../shared/presentation/components/Header.jsx";
import PostDetails from "../components/shared/PostDetails.jsx";
import {useParams} from "react-router";
import PropertyDetails from "../components/myProperties/PropertyDetails.jsx";
import PropertyImages from "../components/shared/PropertyImages.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import {PropertyTags} from "../../shared/constants/propertyPostTag.jsx";
import {useEffect} from "react";
import usePropertyStore from "../../application/state/property/usePropertyStore.jsx";
import {getProperty} from "../../application/useCases/residentialOffice/getPropertyUseCase.jsx";
import useCommissionStore from "../../application/state/office/useCommissionStore.jsx";
import {getOfficeCommission} from "../../application/useCases/office/getCommissionUseCase.jsx";
import useMeterPriceStore from "../../application/state/residentialOffice/useMeterPriceStore.jsx";
import {getMeterPrice} from "../../application/useCases/region/getExpectedPriceUseCase.jsx";
import {FormProvider, useForm} from "react-hook-form";
import {edit} from "../../application/useCases/residentialOffice/editResidentialUseCase.jsx"
import {deleteImage} from "../../application/useCases/propertyImage/deleteUseCase.jsx";
import {upload} from "../../application/useCases/propertyImage/uploadUseCase.jsx";
import {STATUS_OPTIONS} from "../../shared/constants/statusOptions.jsx";

const PropertyPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {
        property, setProperty, newImages, deletedImages,
        resetImageTracking, setNewImages, setDeletedImages
    } = usePropertyStore();
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

    const onSubmit = async () => {
        setIsLoading(true);

        try {
            // 1. Update the main property
            const {success, response} = await edit(property, id);

            if (!success) {
                alert(response);
                return;
            }

            // 2. Upload new images (if any)
            if (newImages.length > 0) {
                const formData = new FormData();
                newImages.forEach((file) => formData.append("images", file));

                const uploadResponse = await upload(id, formData);
                if (!uploadResponse.success) {
                    alert("فشل في رفع الصور");
                    return;
                }
            }

            // 3. Delete removed images (if any)
            for (const imageId of deletedImages) {
                const deleteResponse = await deleteImage(id, imageId);
                if (!deleteResponse.success) {
                    alert('فشل في حذف الصورة');
                    return;
                }
            }

            // 4. Reset temporary tracking
            resetImageTracking();

            alert("تم حفظ التعديلات بنجاح");

        } catch (err) {
            alert("حدث خطأ أثناء التعديل");
        } finally {
            setIsLoading(false);
        }
    };

    const methods = useForm();

    if (isLoading || !property) return <Spinner/>;

    const readOnly = property.postStatus === "قيد الانتظار" || STATUS_OPTIONS.findIndex(opt => opt === property.status) < 3;


    return (
        <FormProvider {...methods}>
            <div className="flex flex-col gap-4">
                <div className="-mb-6">
                    <Header title={"عرض عقار"}/>
                </div>
                <PostDetails readOnly={readOnly} options={PropertyTags} setProperty={setProperty} property={property}/>
                <div className="flex flex-row gap-4 mx-6 flex-wrap">
                    <div className="flex-5">
                        <PropertyDetails readOnly={readOnly} onClick={methods.handleSubmit(onSubmit)}/>
                    </div>
                    <div className="flex-2">
                        <PropertyImages readOnly={readOnly} setProperty={setProperty} property={property}
                                        setDeletedImages={setDeletedImages} setNewImages={setNewImages}/>
                    </div>
                </div>
            </div>
        </FormProvider>
    );
};
export default PropertyPage;
