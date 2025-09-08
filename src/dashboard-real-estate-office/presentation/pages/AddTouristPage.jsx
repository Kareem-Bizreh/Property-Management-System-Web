import Header from "../../../shared/presentation/components/Header.jsx";
import PostDetails from "../components/shared/PostDetails.jsx";
import PropertyImages from "../components/shared/PropertyImages.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import {PropertyTags} from "../../shared/constants/propertyPostTag.jsx";
import {FormProvider, useForm} from "react-hook-form";
import useTouristStore from "../../application/state/tourism/useTouristStore.jsx";
import {useEffect} from "react";
import {Tourism} from "../../domain/entities/Tourism.jsx";
import TourismDetails from "../components/tourism/TourismDetails.jsx";
import {addTourism} from "../../application/useCases/tourism/addTourismUseCase.jsx";
import {upload} from "../../application/useCases/propertyImage/uploadUseCase.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";

const AddTouristPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {tourist, setTourist, setDeletedImages, setNewImages, newImages, resetImageTracking} = useTouristStore();
    const {notifyError, notifySuccess, notifyWarning} = useNotification();

    useEffect(() => {
        setIsLoading(true);
        setTourist(Tourism.createInitial());
        setIsLoading(false);
    }, []);

    const onSubmit = async () => {
        if(!tourist.coordinates.lng) {
            notifyWarning("يرجى تحديد موقع العقار");
            return;
        }
        if(!tourist.postImage) {
            notifyWarning("يرجى ادخال صورة المنشور");
            return;
        }
        setIsLoading(true)

        try {
            // 1. add the tourist place
            const {success, response} = await addTourism(tourist);

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

            notifySuccess("تم إضافة المكان السياحي بنجاح");
        } catch (err) {
            notifyError("حدث خطأ أثناء الإضافة");
        } finally {
            setIsLoading(false);
        }
    }

    const methods = useForm();


    if (isLoading || !tourist || tourist.id) return <Spinner/>;

    return (
        <FormProvider {...methods}>
            <div className="flex flex-col gap-4">
                <div className="-mb-6">
                    <Header title={"إضافة مكان سياحي"}/>
                </div>
                <PostDetails options={PropertyTags} property={tourist} setProperty={setTourist}/>
                <div className="flex flex-row gap-4 mx-6 flex-wrap">
                    <div className="flex-5">
                        <TourismDetails onClick={methods.handleSubmit(onSubmit)}/>
                    </div>
                    <div className="flex-2">
                        <PropertyImages setProperty={setTourist} property={tourist}
                                        setDeletedImages={setDeletedImages} setNewImages={setNewImages}/>
                    </div>
                </div>
            </div>
        </FormProvider>
    )
}
export default AddTouristPage
