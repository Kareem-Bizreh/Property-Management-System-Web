import Header from "../components/shared/Header.jsx";
import PostDetails from "../components/shared/PostDetails.jsx";
import PropertyImages from "../components/shared/PropertyImages.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import {PropertyTags} from "../../shared/constants/propertyPostTag.jsx";
import {FormProvider, useForm} from "react-hook-form";
import useTouristStore from "../../application/state/tourism/useTouristStore.jsx";
import {useEffect} from "react";
import {Tourism} from "../../domain/entities/Tourism.jsx";
import TourismDetails from "../components/tourism/TourismDetails.jsx";

const AddTouristPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {tourist, setTourist, setDeletedImages, setNewImages, newImages, resetImageTracking} = useTouristStore();

    useEffect(() => {
        setIsLoading(true);
        setTourist(Tourism.createInitial());
        setIsLoading(false);
    }, []);

    const onSubmit = async () => {
        /*
        setIsLoading(true)

        try {
            // 1. add the tourist place
            const {success, response} = await add(tourist);

            if (!success) {
                alert(response);
                return;
            }

            // 2. Upload images (if any)
            if (newImages.length > 0) {
                const formData = new FormData();
                newImages.forEach((file) => formData.append("images", file));

                const uploadResponse = await upload(response.data.id, formData);
                if (!uploadResponse.success) {
                    alert("فشل في رفع الصور");
                }
            }

            // 3. Reset temporary tracking
            resetImageTracking();

            alert("تم إضافة المكان السياحي بنجاح");
        } catch (err) {
            alert("حدث خطأ أثناء الإضافة");
        } finally {
            setIsLoading(false);
        }
        */
    }

    const methods = useForm();

    if (isLoading || !tourist) return <Spinner/>;

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
