import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import Header from "../../../../shared/presentation/components/Header.jsx";
import {formatPrice} from "../../../../shared/shared/utils/formatPrice.js";
import Button from "@mui/material/Button";
import Popup from "reactjs-popup";
import {useForm} from "react-hook-form";
import SelectInput from "../../../../shared/presentation/components/SelectInput.jsx";
import usePromotionAdOpenStore from "../../../application/state/advertisement/usePromotionAdOpenStore.jsx";
import usePropertyTypeStore from "../../../application/state/advertisement/usePropertyTypeStore.jsx";
import usePropertyStore from "../../../application/state/property/usePropertyStore.jsx";
import {PropertyType} from "../../../shared/constants/PropertyType.jsx";
import useServicePriceStore from "../../../application/state/advertisement/useServicePriceStore.jsx";
import useLoadingStore from "../../../../shared/application/state/useLoadingStore.jsx";
import {useEffect} from "react";
import {getServicePrice} from "../../../application/useCases/servicePrice/getServicePriceUseCase.jsx";
import {Spinner} from "../../../../shared/presentation/components/Spinner.jsx";

const PromotionAd = () => {
    const {register, watch, setValue, handleSubmit} = useForm({defaultValues: {days: 1}});
    const {setIsOpen, isOpen} = usePromotionAdOpenStore();
    const {type, setType} = usePropertyTypeStore();
    const {property, setProperty} = usePropertyStore();
    const {promotionPrice, setPromotionPrice} = useServicePriceStore();
    const {setIsLoading, isLoading} = useLoadingStore();

    useEffect(() => {
        setProperty(null)
        const loadServicePrice = async () => {
            setIsLoading(true);
            const {success, response} = await getServicePrice('إعلان ترويجي');
            if (success) {
                setPromotionPrice(response.price);
            } else {
                alert(response);
                setIsOpen(false);
            }
            setIsLoading(false);
        }
        loadServicePrice();
    }, []);

    const pay = async () => {
        if (!property) {
            alert("يرجى اختيار العقار")
        }
        console.log(watch("days"), property.id)
    }

    if (isLoading) return <Spinner/>

    return (
        <Popup
            open={isOpen}
            onClose={() => {
                setType(null);
                setProperty(null);
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
                    <div className="w-[160px] -mt-4 mr-10">
                        <Header title={'ترويج'}/>
                    </div>
                    <div className="flex flex-col items-center gap-6 w-full mb-4">
                        <span>النوع</span>
                        <SelectInput title={type || "نوع"} options={["إلغاء", ...PropertyType]} height={'46px'}
                                     maxWidth={'150px'} style={{borderWidth: '1px'}} onChange={setType}/>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span>إختر العقار</span>
                        <div className="w-[383px] h-[120px] flex items-center justify-center">
                            <Button variant="contained"
                                    sx={{
                                        width: 123,
                                        height: 40,
                                        backgroundColor: BACKGROUND_COLORS.button,
                                        borderRadius: '6px',
                                        fontWeight: 700,
                                        fontSize: '16px',
                                        lineHeight: '100%',
                                        letterSpacing: '3%',
                                        textAlign: 'center'
                                    }}>
                                اختيار
                            </Button>
                            {/*<div className="bg-[#EFF4F6] w-full h-full rounded-[8px]"/>*/}
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
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
                            <span>{formatPrice(promotionPrice)} $</span>
                        </div>
                        <div className="flex flex-col items-center gap-6 mb-4" style={{fontSize: '16px'}}>
                            <span>السعر</span>
                            <span
                                style={{
                                    fontSize: '24px',
                                    color: TEXT_COLORS.primary
                                }}>{formatPrice(promotionPrice * watch('days'))} $</span>
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
export default PromotionAd
