import Header2 from "../addProperty/Header2.jsx";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import SelectInput from "../shared/SelectInput.jsx";
import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {useFormContext} from "react-hook-form";
import {LISTING_TYPE_OPTIONS} from "../../../shared/constants/listingTypeOptions.jsx";
import useCommissionStore from "../../../application/state/office/useCommissionStore.jsx";
import useMeterPriceStore from "../../../application/state/residentialOffice/useMeterPriceStore.jsx";
import {formatPrice} from "../../../shared/utils/formatPrice.js";
import usePropertyStore from "../../../application/state/Property/usePropertyStore.jsx";

const PaymentDetails = ({readOnly = false}) => {
    const {property} = usePropertyStore();
    const listingType = property.listing_type;
    const details = listingType === "بيع"
        ? property.sell_details || {}
        : property.rent_details || {};

    return (
        <div className='flex flex-col gap-4 mt-4'>
            <Header2 title={'تفاصيل الدفع:'}/>
            <TypeCard
                listing_type={listingType}
                details={details}
                readOnly={readOnly}
            />
        </div>
    );
};

export default PaymentDetails;

const TypeCard = ({listing_type = 'بيع', details = {}, readOnly = false}) => {
    const {property, setProperty} = usePropertyStore();
    const {commission} = useCommissionStore();
    const {meterPrice} = useMeterPriceStore();

    const isSell = listing_type === 'بيع';

    const [option, setOption] = useState(
        isSell
            ? (details.installment_allowed ? 'نعم' : 'لا')
            : details.rental_period || 'شهري'
    );

    const {register, setValue, getValues, watch} = useFormContext();

    useEffect(() => {
        setValue("price", isSell ? details.selling_price : (details.rentalPrice || details.price));
        setValue("installment_duration", isSell ? details.installment_duration : 1);
    }, [])

    const price = Number(watch("price") ?? 0);
    const installment_duration = Number(watch("installment_duration") ?? 1);

    useEffect(() => {
        setProperty({
            ...property,
            ...(isSell ? {
                sell_details: {
                    ...property.sell_details,
                    selling_price: price,
                    installment_allowed: details.installment_allowed,
                    installment_duration: installment_duration,
                },
            } : {
                rent_details: {
                    ...property.rent_details,
                    rentalPrice: price,
                },
            }),
        });
    }, [price, installment_duration, details.installment_allowed]);


    const handleListingTypeChange = (newType) => {
        const currentFormPrice = Number(getValues("price") || 0);

        if (newType === 'بيع') {
            setProperty({
                ...property,
                listing_type: newType,
                sell_details: {
                    selling_price: currentFormPrice,
                    installment_allowed: false,
                    installment_duration: 1
                },
                rent_details: {}
            });
            setOption('لا');
        } else {
            setProperty({
                ...property,
                listing_type: newType,
                rent_details: {
                    rentalPrice: currentFormPrice,
                    rental_period: 'شهري'
                },
                sell_details: {}
            });

            setOption('شهري');
        }
        setValue("price", currentFormPrice);
        setValue("installment_duration", 1);
    };

    return (
        <div className="flex flex-col gap-4 justify-center">
            {/* نوع */}
            <div className="flex flex-wrap gap-4 items-center w-full">
                <span style={styles} className="min-w-[120px]">نوع</span>
                <SelectInput
                    readOnly={readOnly}
                    options={LISTING_TYPE_OPTIONS}
                    height={'50px'}
                    title={listing_type}
                    maxWidth={'210px'}
                    onChange={handleListingTypeChange}
                    style={{
                        borderWidth: '1px',
                        fontWeight: 600,
                        color: TEXT_COLORS.primary,
                        fontSize: '18px'
                    }}
                />
            </div>

            {/* التقسيط او نوع الإيجار */}
            <motion.div
                key={listing_type}
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -10}}
                transition={{duration: 0.3}}
                className="flex flex-wrap gap-4 items-center w-full"
            >
                <span style={styles} className="min-w-[120px]">
                    {isSell ? 'التقسيط' : 'نوع الإيجار'}
                </span>
                <SelectInput
                    readOnly={readOnly}
                    options={isSell ? ['نعم', 'لا'] : ['شهري', 'سنوي']}
                    height={'50px'}
                    maxWidth={'210px'}
                    title={option}
                    onChange={(value) => {
                        setOption(value);
                        if (isSell) {
                            setProperty({
                                ...property,
                                sell_details: {
                                    ...property.sell_details,
                                    installment_allowed: value === 'نعم',
                                }
                            });
                            setValue("installment_duration", 1)
                        } else {
                            setProperty({
                                ...property,
                                rent_details: {
                                    ...property.rent_details,
                                    rental_period: value
                                }
                            });
                        }
                    }}
                    style={{
                        borderWidth: '1px',
                        fontWeight: 600,
                        color: TEXT_COLORS.primary,
                        fontSize: '18px'
                    }}
                />
            </motion.div>

            {/* مدة التقسيط */}
            <AnimatePresence>
                {isSell && option === 'نعم' && (
                    <motion.div
                        key="installment"
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        transition={{duration: 0.3}}
                        className="flex flex-wrap gap-4 items-center w-full"
                    >
                        <span style={styles} className="min-w-[120px]">مدة التقسيط</span>
                        <input
                            type='number'
                            readOnly={readOnly}
                            {...register('installment_duration', {
                                required: "مدة التقسيط مطلوبة",
                                min: {
                                    value: 1,
                                    message: "مدة التقسيط يجب أن تكون على الأقل 1"
                                }
                            })}
                            className='rounded-[15px] border-[1px] min-h-[50px] px-4 w-full max-w-[210px]'
                            style={{
                                backgroundColor: BACKGROUND_COLORS.app,
                                borderColor: TEXT_COLORS.primary,
                                fontFamily: 'Cairo',
                                fontWeight: '400',
                                fontSize: '18px',
                                lineHeight: '130%',
                                textAlign: 'center'
                            }}
                        />
                        <span style={styles} className="min-w-[100px]">عدد الأشهر</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* السعر */}
            <div className="flex flex-wrap gap-4 items-center w-full">
                <span style={styles} className="min-w-[120px]">سعر العقار</span>
                <div className="relative w-full max-w-[210px]">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 select-none"
                          style={{color: TEXT_COLORS.primary}}>$</span>
                    <input
                        readOnly={readOnly}
                        {...register('price', {
                            required: `السعر مطلوب`,
                        })}
                        type="number"
                        className="rounded-[15px] border-[1px] min-h-[50px] pl-6 pr-4 w-full"
                        style={{
                            backgroundColor: BACKGROUND_COLORS.app,
                            borderColor: TEXT_COLORS.primary,
                            textAlign: "center",
                        }}
                    />
                </div>

                <div className="flex flex-col justify-center items-center gap-2 text-sm font-medium"
                     style={{...styles, fontSize: '16px'}}>
                    <span>السعر المتوقع</span>
                    <span>${formatPrice(meterPrice * property.area)}</span>
                </div>
            </div>

            {/* Summary Info */}
            <div className="flex flex-wrap gap-4 h-[40px] items-center w-full">
                <span style={styles} className="min-w-[120px]">رسوم المكتب</span>
                <span style={styles} className="min-w-[100px]">%{commission}</span>
            </div>
            <div className="flex flex-wrap gap-4 h-[40px] items-center w-full">
                <span style={styles} className="min-w-[120px]">السعر الكامل</span>
                <span style={styles} className="min-w-[100px]">
                    ${formatPrice(price + (price * commission / 100))}
                </span>
            </div>
        </div>
    )
}


const styles = {
    color: TEXT_COLORS.primary,
    fontFamily: 'Cairo',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '100%',
    letterSpacing: '0%',
    textAlign: 'center',
    verticalAlign: 'middle'
}