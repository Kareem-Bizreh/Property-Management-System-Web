import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import Header from "../shared/Header.jsx";
import Button from "@mui/material/Button";
import Popup from "reactjs-popup";
import UploadImage from "../shared/UploadImage.jsx";
import {formatPrice} from "../../../shared/utils/formatPrice.js";
import {useForm} from "react-hook-form";
import useImageStore from "../../../application/state/advertisement/useImageStore.jsx";
import useImageAdOpenStore from "../../../application/state/advertisement/useImageAdOpenStore.jsx";
import {addImageAd} from "../../../application/useCases/advertisement/addImageAdUseCase.jsx";
import useLoadingStore from "../../../../shared/application/state/loadingStore.jsx";
import {useEffect} from "react";
import useServicePriceStore from "../../../application/state/advertisement/useServicePriceStore.jsx";
import {getServicePrice} from "../../../application/useCases/servicePrice/getServicePriceUseCase.jsx";
import {Spinner} from "../../../../shared/presentation/components/Spinner.jsx";

const ImageAd = () => {
    const {register, watch, handleSubmit, setValue} = useForm({defaultValues: {days: 1}});
    const {image, setImage} = useImageStore();
    const {setIsOpen, isOpen} = useImageAdOpenStore();
    const {imagePrice, setImagePrice} = useServicePriceStore();
    const {setIsLoading, isLoading} = useLoadingStore();

    useEffect(() => {
        const loadServicePrice = async () => {
            setIsLoading(true);
            const {success, response} = await getServicePrice('إعلان صوري');
            if (success) {
                setImagePrice(response.price);
            } else {
                alert(response);
                setIsOpen(false);
            }
            setIsLoading(false);
        }
        loadServicePrice();
    }, []);

    const pay = async () => {
        if(!image) {
            alert("يرجى ادخال صورة الإعلان");
            return;
        }
        setIsLoading(true);
        const {success, response} = await addImageAd(watch("days"), image);
        if (success) {
            alert("تم طلب اعلان صوري بنجاح");
            window.location.reload();
        } else {
            alert(response);
        }
        setIsLoading(false);
    }

    if (isLoading) return <Spinner/>

    return (
        <Popup
            open={isOpen}
            onClose={() => {
                setImage(null);
                setValue("days", 1);
                setIsOpen(false);
            }}
            modal
            nested
            closeOnDocumentClick
            contentStyle={{
                width: '550px',
                height: '700px',
                borderRadius: '90px',
                backgroundColor: BACKGROUND_COLORS.app,
                padding: '20px',
            }}
        >
            {(close) => (
                <div className="flex flex-col items-center justify-between h-full"
                     style={{
                         color: TEXT_COLORS.secondary,
                         fontFamily: 'Cairo',
                         fontWeight: 700,
                         fontSize: '18px',
                         lineHeight: '100%',
                         letterSpacing: '3%',
                         // textAlign: 'center',
                     }}
                >
                    <div className="w-[250px] -mt-4 mr-10">
                        <Header title={'إنشاء إعلان'}/>
                    </div>
                    <div className="h-fit">
                        <UploadImage title={"صورة الإعلان"} image={image} onChange={setImage}
                                     onDelete={() => setImage(null)}/>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-col items-center gap-5">
                            <span>عدد أيام عرض الإعلان</span>
                            <input
                                {...register('days', {required: true})}
                                min={1}
                                type="number"
                                className="rounded-[15px] border-[1px] min-h-[50px] pl-4 pr-4 max-w-[150px] w-full text-center"
                                style={{
                                    backgroundColor: BACKGROUND_COLORS.app,
                                    borderColor: TEXT_COLORS.primary,
                                    color: TEXT_COLORS.black,
                                    fontFamily: "Cairo",
                                    fontWeight: "400",
                                    fontSize: "18px",
                                    lineHeight: "130%",
                                    letterSpacing: "2%",
                                }}
                            />
                        </div>
                        <div className="flex flex-col items-center gap-4" style={{fontSize: '16px'}}>
                            <span>السعر باليوم</span>
                            <span>{formatPrice(imagePrice)} $</span>
                        </div>
                        <div className="flex flex-col items-center gap-6 mb-4" style={{fontSize: '16px'}}>
                            <span>السعر</span>
                            <span
                                style={{
                                    fontSize: '24px',
                                    color: TEXT_COLORS.primary
                                }}>{formatPrice(imagePrice * watch('days'))} $</span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-6 mb-2">
                        <Button variant="contained"
                                onClick={close}
                                sx={{
                                    width: 160,
                                    height: 47,
                                    color: BACKGROUND_COLORS.primary,
                                    backgroundColor: BACKGROUND_COLORS.secondary1,
                                    borderRadius: '25px',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    lineHeight: '100%',
                                    letterSpacing: '3%',
                                    textAlign: 'center'
                                }}>
                            إلغاء
                        </Button>
                        <Button variant="contained"
                                onClick={handleSubmit(pay)}
                                sx={{
                                    width: 160,
                                    height: 47,
                                    color: BACKGROUND_COLORS.app,
                                    backgroundColor: BACKGROUND_COLORS.primary,
                                    borderRadius: '25px',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    lineHeight: '100%',
                                    letterSpacing: '3%',
                                    textAlign: 'center'
                                }}>
                            دفع
                        </Button>
                    </div>
                </div>
            )}
        </Popup>
    )
}
export default ImageAd
