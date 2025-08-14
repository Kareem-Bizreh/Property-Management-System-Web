import Popup from "reactjs-popup";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import Button from "@mui/material/Button";
import Header from "../../../../shared/presentation/components/Header.jsx";
import {formatPrice} from "../../../../shared/shared/utils/formatPrice.js";
import {useForm} from "react-hook-form";
import useReservationDetailsStore from "../../../application/state/reservation/useReservationDetailsStore.jsx";
import SelectProperty from "../shared/SelectProperty.jsx";
import {Checkbox, FormControlLabel} from "@mui/material";
import usePropertyStore from "../../../application/state/property/usePropertyStore.jsx";
import {useEffect, useRef} from "react";
import PropertyCard from "../shared/PropertyCard.jsx";
import {addUserPropertyInvoice} from "../../../application/useCases/userPropertyInvoices/addInvoiceUseCase.jsx";
import useLoadingStore from "../../../../shared/application/state/useLoadingStore.jsx";
import usePropertyReservationOpenStore
    from "../../../application/state/reservation/usePropertyReservationOpenStore.jsx";
import usePropertySelectionOpenStore from "../../../application/state/shared/usePropertySelectionOpenStore.jsx";
import {
    getPropertyRentalInformation
} from "../../../application/useCases/reservations/getPropertyRentalInformationUseCase.jsx";

const PropertyReservation = () => {
    const {
        residential_selling_price, office_commission_amount, total_deposit, resetReservationDetails,
        final_price, installment_allowed, setReservationDetails, invoice_image
    } = useReservationDetailsStore();
    const {register, handleSubmit, watch} = useForm();
    const {property, setProperty} = usePropertyStore();
    const {setIsLoading} = useLoadingStore();
    const {isOpen, setIsOpen} = usePropertyReservationOpenStore();
    const {setIsOpen: setSelectionOpen} = usePropertySelectionOpenStore();

    const fileInputRef = useRef(null);

    useEffect(() => setProperty(null), []);

    const loadPropertyReservationInformation = async (propertyId) => {
        setIsLoading(true);
        setReservationDetails({installment_allowed: false});
        const {success, response} = await getPropertyRentalInformation(propertyId);
        setIsLoading(false);
        if (success) {
            setReservationDetails(response);
        } else {
            resetReservationDetails()
            setProperty(null)
            alert(response);
        }
    };

    const reserve = async () => {
        if (!invoice_image) {
            alert("يرجى إدخال وثيقة الحجز")
            return;
        }
        if (!property) {
            alert("يرجى اختيار العقار")
            return;
        }
        setIsLoading(true)
        const {
            success,
            response
        } = await addUserPropertyInvoice(property.id, watch("phone"), invoice_image.file, installment_allowed);
        if (success) {
            alert("تم حجز العقار بنجاح");
            window.location.reload();
            resetReservationDetails();
        } else {
            alert(response);
        }
        setIsLoading(false);
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setReservationDetails({
                invoice_image: {
                    file: file,
                    name: file.name,
                }
            });
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <Popup
            open={isOpen}
            onClose={() => setIsOpen(false)}
            modal
            nested
            closeOnDocumentClick
            contentStyle={{
                width: '550px',
                height: 'auto',
                borderRadius: '90px',
                backgroundColor: BACKGROUND_COLORS.app,
                padding: '20px',
            }}
        >
            {(close) => (
                <div className="flex flex-col items-center"
                     style={{
                         color: TEXT_COLORS.secondary,
                         fontFamily: 'Cairo',
                         fontWeight: 700,
                         fontSize: '18px',
                         lineHeight: '100%',
                         letterSpacing: '3%',
                     }}
                >
                    <div className="w-[200px] -mt-5 mr-8 -mb-3">
                        <Header title={'حجز عقار'}/>
                    </div>
                    <div className="flex flex-col items-center gap-2 z-1">
                        <span>إختر العقار</span>
                        <div className="w-[383px] h-[120px] flex items-center justify-center">
                            {!property ? (
                                <>
                                    <Button
                                        variant="contained"
                                        onClick={() => setSelectionOpen(true)}
                                        sx={{
                                            width: 123,
                                            height: 40,
                                            backgroundColor: BACKGROUND_COLORS.button,
                                            borderRadius: '6px',
                                            ...sharedSx
                                        }}>
                                        اختيار
                                    </Button>
                                    <SelectProperty onSelect={loadPropertyReservationInformation} listingType={'بيع'}/>
                                </>
                            ) : (
                                <PropertyCard property={property}/>
                            )}
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-3 mt-3 px-6">
                        <span style={{textAlign: 'right'}}>رقم هاتف المستخدم</span>
                        <div className="flex flex-row items-center gap-6">
                            <input
                                type="text"
                                inputMode="numeric"
                                {...register("phone", {
                                    required: true,
                                    pattern: {
                                        value: /^[0-9]*$/,
                                        message: "يرجى إدخال أرقام فقط"
                                    }
                                })}
                                className='rounded-[15px] border-[1px] min-h-[50px] px-4 w-full max-w-[260px]'
                                style={{
                                    color: TEXT_COLORS.black,
                                    backgroundColor: BACKGROUND_COLORS.app,
                                    borderColor: TEXT_COLORS.select,
                                    fontWeight: 400,
                                }}
                            />
                        </div>

                        <div className="flex flex-col gap-2.5 mt-2" style={{fontSize: '16px'}}>
                            <div className="flex flex-row gap-2">
                                <span className="w-[150px]">سعر العقار :</span>
                                <span>{formatPrice(residential_selling_price)} $</span>
                            </div>
                            <div className="flex flex-row gap-2">
                                <span className="w-[150px]">عمولة المكتب :</span>
                                <span>{formatPrice(office_commission_amount)} $</span>
                            </div>
                            <div className="flex flex-row gap-2">
                                <span className="w-[150px]">السعر الاجمالي :</span>
                                <span>{formatPrice(final_price)} $</span>
                            </div>
                            {property?.sell_details?.installment_allowed &&
                                <>
                                    {installment_allowed &&
                                        <>
                                            <div className="flex flex-row gap-2">
                                                <span className="w-[150px]">سعر التقسيط :</span>
                                                <span>{formatPrice(final_price / property.sell_details.installment_duration)} $</span>
                                            </div>
                                            <div className="flex flex-row gap-2">
                                                <span className="w-[150px]">مدة التقسيط :</span>
                                                <span>{property.sell_details.installment_duration}</span>
                                            </div>
                                        </>}
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={installment_allowed}
                                                onChange={(e) =>
                                                    setReservationDetails({installment_allowed: e.target.checked})
                                                }
                                                sx={{'&.Mui-checked': {color: BACKGROUND_COLORS.button}}}
                                            />
                                        }
                                        label="تقسيط"
                                    />
                                </>
                            }
                        </div>

                        <div className="flex flex-col items-center justify-center mt-5 gap-2">
                            <div className="flex flex-row gap-8 items-center justify-center">
                                <div className="flex flex-col gap-2 items-center">
                                    <span>سعر العربون :</span>
                                    <span style={{
                                        fontSize: '24px',
                                        color: TEXT_COLORS.primary
                                    }}>{formatPrice(total_deposit)} $</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Button
                                        variant="contained"
                                        onClick={handleUploadClick}
                                        sx={{
                                            width: 115,
                                            height: 46,
                                            backgroundColor: BACKGROUND_COLORS.card,
                                            color: TEXT_COLORS.white,
                                            borderRadius: '15px',
                                            ...sharedSx
                                        }}>
                                        رفع وثيقة
                                    </Button>
                                    {invoice_image?.name && (
                                        <span
                                            style={{
                                                fontSize: '12px',
                                                color: TEXT_COLORS.secondary,
                                                marginTop: '4px',
                                                maxWidth: '150px',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            {invoice_image?.name}
                                        </span>
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*,application/pdf"
                                        className="hidden"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center gap-6 mt-10 mb-2">
                        <Button variant="contained"
                                onClick={close}
                                sx={{
                                    width: 160,
                                    height: 47,
                                    color: BACKGROUND_COLORS.primary,
                                    backgroundColor: BACKGROUND_COLORS.secondary1,
                                    borderRadius: '25px',
                                    ...sharedSx
                                }}>
                            إلغاء
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleSubmit(reserve)}
                            sx={{
                                width: 160,
                                height: 47,
                                color: BACKGROUND_COLORS.app,
                                backgroundColor: BACKGROUND_COLORS.primary,
                                borderRadius: '25px',
                                ...sharedSx
                            }}>
                            حجز
                        </Button>
                    </div>
                </div>
            )}
        </Popup>
    );
};

export default PropertyReservation;

const sharedSx = {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '3%',
    textAlign: 'center'
};
