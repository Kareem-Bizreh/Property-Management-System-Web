import {useEffect} from "react";
import {useParams} from "react-router";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/colors.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import useTouristStore from "../../application/state/tourism/useTouristStore.jsx";
import {PropertyTags} from "../../shared/constants/propertyPostTag.jsx";
import {TouristicStatus} from "../../shared/constants/TouristicStatus.jsx";
import {getTourism} from "../../application/useCases/tourism/getTourismUseCase.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import {FormProvider, useForm} from "react-hook-form";
import Header from "../../../shared/presentation/components/Header.jsx";
import PostDetails from "../components/shared/PostDetails.jsx";
import TourismDetails from "../components/tourism/TourismDetails.jsx";
import PropertyImages from "../components/shared/PropertyImages.jsx";
import Calendar from '../components/tourism/Calender.jsx';
import Box from '@mui/material/Box';
import FinancialRecords from "../components/tourism/FinancialRecords.jsx";
import {upload} from "../../application/useCases/propertyImage/uploadUseCase.jsx";
import {deleteImage} from "../../application/useCases/propertyImage/deleteUseCase.jsx";
import {editTourism} from "../../application/useCases/tourism/editTourismUseCase.jsx";
import {Tabs} from "../../../shared/presentation/components/Tabs.jsx";
import {CustomTabPanel} from "../../../shared/presentation/components/Tabs.jsx";
import useTabStore from "../../application/state/tourism/useTabStore.jsx";

const TourismPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {
        tourist, setTourist, newImages, deletedImages,
        resetImageTracking, setNewImages, setDeletedImages
    } = useTouristStore();
    const {id} = useParams();

    useEffect(() => {
        setIsLoading(true);
        const loadTourist = async () => {
            const {success, response} = await getTourism(id);
            if (success) {
                const data = response.data;
                setTourist(data);
            } else {
                setTourist(null);
                alert(response);
            }
            setIsLoading(false);
        }
        loadTourist();
    }, []);

    const onSubmit = async () => {
        setIsLoading(true);

        try {
            // 1. Update the main tourism
            const {success, response} = await editTourism(tourist, id);

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

    const {tab, setTab} = useTabStore();

    if (isLoading || !tourist) return <Spinner/>;

    const readOnly = tourist.postStatus === "قيد الانتظار" || tourist.status === TouristicStatus[3];

    const tabs = ['تفاصيل المكان', 'الحجوزات والسجل المالي'];

    return (
        <Box>
            <Header title="عرض مكان سياحي"/>
            {/* Tabs */}
            <Tabs tabs={tabs} tabHeight={'70px'} borderRadius={'25px'} border={true}
            bgHeight={'85px'} minWidth={"265px"} tab={tab} setTab={setTab}/>

            {/* Tab Panel 1 */}
            <CustomTabPanel value={tab} index={0}>
                <FormProvider {...methods}>
                    <div className="flex flex-col gap-4">
                        <PostDetails
                            options={PropertyTags}
                            property={tourist}
                            setProperty={setTourist}
                            readOnly={readOnly}
                        />
                        <div className="flex flex-row gap-4 mx-6 flex-wrap">
                            <div className="flex-5 min-w-[300px]">
                                <TourismDetails
                                    onClick={methods.handleSubmit(onSubmit)}
                                    readOnly={readOnly}
                                />
                            </div>
                            <div className="flex-2 min-w-[300px]">
                                <PropertyImages
                                    readOnly={readOnly}
                                    setProperty={setTourist}
                                    property={tourist}
                                    setDeletedImages={setDeletedImages}
                                    setNewImages={setNewImages}
                                />
                            </div>
                        </div>
                    </div>
                </FormProvider>
            </CustomTabPanel>

            {/* Tab Panel 2 */}
            <CustomTabPanel value={tab} index={1}>
                <div className="flex flex-col items-center gap-8">
                    <Calendar/>
                    <FinancialRecords/>
                </div>
            </CustomTabPanel>
        </Box>
    )
}
export default TourismPage
