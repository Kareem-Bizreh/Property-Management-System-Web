import Header2 from "../addProperty/Header2.jsx";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";
import SelectInput from "../shared/SelectInput.jsx";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {useForm} from "react-hook-form";

const PaymentDetails = ({listing_type = 'بيع', details = {}, readOnly = false}) => {
    return (
        <div className='flex flex-col gap-4 mt-4'>
            <Header2 title={'تفاصيل الدفع:'}/>
            <TypeCard listing_type={listing_type} details={details} readOnly={readOnly}/>
        </div>
    )
}
export default PaymentDetails

const TypeCard = ({listing_type = 'بيع', details = {}, readOnly = false}) => {
    const [type, setType] = useState(listing_type);
    const [option, setOption] = useState((details.installment_allowed ? 'نعم' : 'لا'));
    const { register } = useForm({
        defaultValues: {
            installment_duration: (details.installment_allowed ? details.installment_duration : 0),
            price: (details.installment_allowed ? details.selling_price : details.price),
        }
    });
    return (
        <div className="flex flex-col gap-4 justify-center">
            {/* Type Selector */}
            <div className="flex flex-wrap gap-4 items-center w-full">
                <span style={styles} className="min-w-[120px]">نوع</span>
                <SelectInput
                    readOnly={readOnly}
                    options={['بيع', 'إيجار']}
                    height={'50px'}
                    title={type}
                    maxWidth={'210px'}
                    onChange={(value) => {
                        setType(value);
                    }}
                    style={{
                        borderWidth: '1px',
                        fontWeight: 600,
                        color: TEXT_COLORS.primary,
                        fontSize: '18px'
                    }}
                />
            </div>

            {/* Conditional Selector */}
            <motion.div
                key={type}
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -10}}
                transition={{duration: 0.3}}
                className="flex flex-wrap gap-4 items-center w-full"
            >
                <span style={styles} className="min-w-[120px]">
                    {type === 'بيع' ? 'التقسيط' : 'نوع الإيجار'}
                </span>
                <SelectInput
                    readOnly={readOnly}
                    options={type === 'بيع' ? ['نعم', 'لا'] : ['شهري', 'سنوي']}
                    height={'50px'}
                    maxWidth={'210px'}
                    title={option}
                    onChange={(value) => setOption(value)}
                    style={{
                        borderWidth: '1px',
                        fontWeight: 600,
                        color: TEXT_COLORS.primary,
                        fontSize: '18px'
                    }}
                />
            </motion.div>

            {/* تقسيط section (animated) */}
            <AnimatePresence>
                {type === 'بيع' && option === 'نعم' && (
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

            {/* Price Section */}
            <div className="flex flex-wrap gap-4 items-center w-full">
                <span style={styles} className="min-w-[120px]">سعر العقار</span>
                <div className="relative w-full max-w-[210px]"
                     style={{
                         fontFamily: "Cairo",
                         fontWeight: "400",
                         fontSize: "18px",
                         lineHeight: "130%",
                         textAlign: "center",
                     }}
                >
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 select-none"
                          style={{color: TEXT_COLORS.primary}}>
                        $
                    </span>
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
                    <span>${'25000'}</span>
                </div>
            </div>

            {/* Fixed Summary Info */}
            <div className="flex flex-wrap gap-4 h-[40px] items-center w-full">
                <span style={styles} className="min-w-[120px]">رسوم المكتب</span>
                <span style={styles} className="min-w-[100px]">${'35000'}</span>
            </div>
            <div className="flex flex-wrap gap-4 h-[40px] items-center w-full">
                <span style={styles} className="min-w-[120px]">السعر الكامل</span>
                <span style={styles} className="min-w-[100px]">${'45000'}</span>
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