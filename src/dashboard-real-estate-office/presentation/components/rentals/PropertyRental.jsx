import Button from "@mui/material/Button";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import Header from "../shared/Header.jsx";
import {formatPrice} from "../../../shared/utils/formatPrice.js";
import Popup from "reactjs-popup";
import usePropertyRentalOpenStore from "../../../application/state/rental/usePropertyRentalOpenStore.jsx";
import usePropertySelectionOpenStore from "../../../application/state/shared/usePropertySelectionOpenStore.jsx";
import usePropertyStore from "../../../application/state/property/usePropertyStore.jsx";
import useLoadingStore from "../../../../shared/application/state/loadingStore.jsx";
import {useEffect, useRef} from "react";
import SelectProperty from "../shared/SelectProperty.jsx";
import PropertyCard from "../shared/PropertyCard.jsx";
import {useForm} from "react-hook-form";
import useRentalDetailsStore from "../../../application/state/rental/useRentalDetailsStore.jsx";
import {getOfficeCommission} from "../../../application/useCases/office/getCommissionUseCase.jsx";
import {addUserPropertyInvoice} from "../../../application/useCases/rentals/addRentalUseCase.jsx";

const PropertyRental = () => {
    const {setIsOpen, isOpen} = usePropertyRentalOpenStore();
    const {setIsOpen: setSelectOpen} = usePropertySelectionOpenStore();
    const {property, setProperty} = usePropertyStore();
    const {setIsLoading} = useLoadingStore();
    const {register, handleSubmit, watch} = useForm();
    const {invoice_image, office_commission_amount, setRentalDetails, resetRentalDetails} = useRentalDetailsStore();
    const fileInputRef = useRef(null);
    const price = property?.rent_details?.rentalPrice || property?.rent_details?.price || 0;

    useEffect(() => {
        setIsLoading(true);
        const fetchCommission = async () => {
            const {success, response} = await getOfficeCommission();
            if (success) {
                setRentalDetails({office_commission_amount: response});
            } else {
                setRentalDetails({office_commission_amount: 0});
                alert(response);
            }
            setIsLoading(false);
        };
        fetchCommission();
        setProperty(null)
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setRentalDetails({
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

    const rent = async () => {
        if (!invoice_image) {
            alert("يرجى إدخال وثيقة الحجز")
            return;
        }
        if (!property) {
            alert("يرجى اختيار العقار")
            return;
        }
        setIsLoading(true);
        const {success, response} = await addUserPropertyInvoice(watch("phone"), watch("duration"), price,
            property.id, property.residentialId, invoice_image.file);
        if (success) {
            resetRentalDetails();
            alert("تم إيجار العقار");
            window.location.reload();
        } else {
            alert(response);
        }
        setIsLoading(false);
    }

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
                         // textAlign: 'center',
                     }}
                >
                    <div className="w-[200px] -mt-4 mr-8">
                        <Header title={'تأجير عقار'}/>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span>إختر العقار</span>
                        <div className="w-[383px] h-[120px] flex items-center justify-center">
                            {!property ? (
                                <>
                                    <Button
                                        variant="contained"
                                        onClick={() => setSelectOpen(true)}
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
                                    <SelectProperty listingType={'أجار'}/>
                                </>
                            ) : (
                                <PropertyCard property={property}/>
                            )}
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-3 mt-2 px-6">
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
                        <div className="flex flex-col items-center gap-4 mt-4">
                            <span className="ml-10">مدة الإيجار</span>
                            <div className="flex flex-row items-center justify-center gap-6 mr-6">
                                <input
                                    type='number'
                                    min={0}
                                    inputMode="numeric"
                                    {...register("duration", {
                                        required: true,
                                        pattern: {
                                            value: /^[0-9]*$/,
                                            message: "يرجى إدخال أرقام فقط"
                                        }
                                    })}
                                    className="rounded-[15px] border-[1px] min-h-[50px] pl-4 pr-4 max-w-[160px] w-full text-center"
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
                                <span style={{fontSize: '16px'}}>{property?.rent_details?.rental_period}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mt-2" style={{fontSize: '16px'}}>
                            <div className="flex flex-row gap-8">
                                <span
                                    className="w-[200px]">{`سعر إيجار العقار ${property?.rent_details?.rental_period || ''} :`}</span>
                                <span>{formatPrice(price)} $</span>
                            </div>
                            <div className="flex flex-row gap-8">
                                <span className="w-[200px]">عمولة المكتب :</span>
                                <span>{formatPrice(office_commission_amount * price)} $</span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-around items-center mt-6">
                            <div className="flex flex-col gap-8 items-center">
                                <span>سعر الإجمالي :</span>
                                <span
                                    style={{
                                        fontSize: '24px',
                                        color: TEXT_COLORS.primary
                                    }}>{formatPrice(Number(office_commission_amount * price) + Number(price))} $</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Button variant="contained"
                                        onClick={handleUploadClick}
                                        sx={{
                                            width: 115,
                                            height: 46,
                                            backgroundColor: BACKGROUND_COLORS.card,
                                            color: TEXT_COLORS.white,
                                            borderRadius: '15px',
                                            fontWeight: 700,
                                            fontSize: '16px',
                                            lineHeight: '100%',
                                            letterSpacing: '3%',
                                            textAlign: 'center'
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
                    <div className="flex flex-row items-center gap-6 mt-10 mb-2">
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
                                onClick={handleSubmit(rent)}
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
                            إيجار
                        </Button>
                    </div>
                </div>
            )}
        </Popup>
    )
}
export default PropertyRental
