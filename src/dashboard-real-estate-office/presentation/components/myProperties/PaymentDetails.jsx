import Header2 from "../addProperty/Header2.jsx";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import SelectInput from "../shared/SelectInput.jsx";
import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {useForm} from "react-hook-form";
import {LISTING_TYPE_OPTIONS} from "../../../shared/constants/listingTypeOptions.jsx";
import useCommissionStore from "../../../application/state/office/useCommissionStore.jsx";
import useMeterPriceStore from "../../../application/state/residentialOffice/useMeterPriceStore.jsx";
import {formatPrice} from "../../../shared/utils/formatPrice.js";
import usePropertyStore from "../../../application/state/Property/usePropertyStore.jsx";

const PaymentDetails = ({readOnly = false}) => {
    const {property, setProperty} = usePropertyStore();
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
                onChange={(listing_type) => setProperty({...property, listing_type})}
            />
        </div>
    );
};

export default PaymentDetails;

const TypeCard = ({listing_type = 'بيع', details = {}, readOnly = false, onChange}) => {
    const {property, setProperty} = usePropertyStore();
    const {commission} = useCommissionStore();
    const {meterPrice} = useMeterPriceStore();

    const isSell = listing_type === 'بيع';

    const [option, setOption] = useState(
        isSell
            ? (details.installment_allowed ? 'نعم' : 'لا')
            : details.rental_period || 'شهري'
    );

    const {register, watch} = useForm({
        defaultValues: {
            installment_duration: isSell && details.installment_allowed ? details.installment_duration : 0,
            price: isSell ? details.selling_price : details.price,
        }
    });

    const watchInstallmentDuration = watch("installment_duration");
    const watchPrice = Number(watch("price") || 0);

    useEffect(() => {
        if (isSell) {
            // Remove rent_details when switching to sell
            const {rent_details, ...rest} = property;

            setProperty({
                ...rest,
                sell_details: {
                    ...property.sell_details,
                    installment_allowed: option === 'نعم',
                    installment_duration: option === 'نعم' ? Number(watchInstallmentDuration) : 0,
                    selling_price: Number(watchPrice)
                }
            });
        } else {
            // Remove sell_details when switching to rent
            const {sell_details, ...rest} = property;

            setProperty({
                ...rest,
                rent_details: {
                    ...property.rent_details,
                    rental_period: option,
                    price: Number(watchPrice)
                }
            });
        }

    }, [option, watchInstallmentDuration, watchPrice]);

    return (
        <div className="flex flex-col gap-4 justify-center">
            {/* Type Selector */}
            <div className="flex flex-wrap gap-4 items-center w-full">
                <span style={styles} className="min-w-[120px]">نوع</span>
                <SelectInput
                    readOnly={readOnly}
                    options={LISTING_TYPE_OPTIONS}
                    height={'50px'}
                    title={listing_type}
                    maxWidth={'210px'}
                    onChange={(value) => {
                        onChange(value);
                        setOption(value === 'بيع' ? 'لا' : 'شهري');
                    }}
                    style={{
                        borderWidth: '1px',
                        fontWeight: 600,
                        color: TEXT_COLORS.primary,
                        fontSize: '18px'
                    }}
                />
            </div>

            {/* التقسيط or نوع الإيجار */}
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
                    onChange={setOption}
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
                            {...register('installment_duration')}
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
                        {...register('price')}
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
                    ${formatPrice(watchPrice + (watchPrice * commission / 100))}
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