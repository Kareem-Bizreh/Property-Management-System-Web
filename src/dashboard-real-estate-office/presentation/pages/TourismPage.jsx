import {useEffect} from "react";
import {useParams} from "react-router";
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
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";
import {getTourismReservations} from "../../application/useCases/tourism/getTourismReservationsUseCase.jsx";
import useReservationsStore from "../../application/state/tourism/useReservationsStore.jsx";
import useDateStore from "../../application/state/tourism/useDateStore.jsx";
import PropertyRate from "../components/shared/PropertyRate.jsx";

const TourismPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {
        tourist, setTourist, newImages, deletedImages,
        resetImageTracking, setNewImages, setDeletedImages
    } = useTouristStore();
    const {setReservations} = useReservationsStore();
    const {year, setHighlightedDays} = useDateStore();
    const {id} = useParams();
    const {notifyError, notifySuccess, notifyWarning} = useNotification();
    const {tab, setTab} = useTabStore();
    const tabs = ['تفاصيل المكان', 'الحجوزات والسجل المالي'];

    useEffect(() => {
        setIsLoading(true);
        const loadTourist = async () => {
            let result;
            switch (tab) {
                case 0:
                    result = await getTourism(id);
                    if (result.success) {
                        const data = result.response.data;
                        setTourist(data);
                    } else {
                        setTourist(null);
                        notifyError(result.response);
                    }
                    break;
                case 1:
                    result = await getTourismReservations(id, year);
                    if (result.success) {
                        const data = result.response.data;
                        const days = [];
                        data?.forEach(({records}) => records?.forEach(({startDate, endDate}) => {
                                const start = new Date(startDate);
                                const end = new Date(endDate);
                                for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
                                    days.push(new Date(d));
                                }
                            }
                        ))

                        setHighlightedDays(days);
                        setReservations(data);
                    } else {
                        setReservations([]);
                        notifyError(result.response);
                    }
                    break;
            }
            setIsLoading(false);
        }
        loadTourist();
    }, [tab, year]);

    const onSubmit = async () => {
        if (!tourist.postImage) {
            notifyWarning("يرجى ادخال صورة المنشور");
            return;
        }
        setIsLoading(true);

        try {
            // 1. Update the main tourism
            const {success, response} = await editTourism(tourist, id);

            if (!success) {
                notifyError(response);
                return;
            }

            // 2. Upload new images (if any)
            if (newImages.length > 0) {
                const formData = new FormData();
                newImages.forEach((file) => formData.append("images", file));

                const uploadResponse = await upload(id, formData);
                if (!uploadResponse.success) {
                    notifyError("فشل في رفع الصور");
                    return;
                }
            }

            // 3. Delete removed images (if any)
            for (const imageId of deletedImages) {
                const deleteResponse = await deleteImage(id, imageId);
                if (!deleteResponse.success) {
                    notifyError('فشل في حذف الصورة');
                    return;
                }
            }

            // 4. Reset temporary tracking
            resetImageTracking();

            notifySuccess("تم حفظ التعديلات بنجاح");

        } catch (err) {
            notifyError("حدث خطأ أثناء التعديل");
        } finally {
            setIsLoading(false);
        }
    };

    const methods = useForm();

    if (isLoading || !tourist) return <Spinner/>;

    const readOnly = tourist.postStatus === "قيد الانتظار" || tourist.status === TouristicStatus[3];

    return (
        <Box>
            <Header title="عرض مكان سياحي"/>
            {/* Tabs */}
            <Tabs tabs={tabs} tabHeight={'70px'} borderRadius={'25px'} border={true}
                  bgHeight={'85px'} minWidth={"265px"} tab={tab} setTab={setTab}/>

            {/* Tab Panel 1 */}
            <CustomTabPanel value={tab} index={0}>
                <FormProvider {...methods}>
                    <div className="flex flex-col gap-4 pt-4">
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
                            <div className="flex-2 flex flex-col min-w-[300px] gap-4">
                                {tourist.rate !== undefined && <PropertyRate rate={tourist.rate}/>}
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
                <div className="flex flex-col items-center gap-8 p-4">
                    <Calendar/>
                    <FinancialRecords/>
                </div>
            </CustomTabPanel>
        </Box>
    )
}
export default TourismPage
