import Header2 from "../addProperty/Header2.jsx";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import {useFormContext} from "react-hook-form";
import {useEffect} from "react";
import useTouristStore from "../../../application/state/tourism/useTouristStore.jsx";

const PaymentDetails = ({readOnly}) => {
    const {register, setValue, watch} = useFormContext();
    const {tourist, setTourist} = useTouristStore();

    useEffect(() => {
        setValue("price", tourist.price);
    }, [])

    const price = Number(watch("price") ?? 0);

    useEffect(() => {
        setTourist({...tourist, price});
    }, [price]);

    return (
        <div className='flex flex-col gap-4 mt-4'>
            <Header2 title={'تفاصيل الدفع:'}/>
            {/* السعر */}
            <div className="flex flex-wrap gap-8 items-center w-full">
                <span style={styles} className="min-w-[120px]">سعر العقار</span>
                <div className="relative w-full max-w-[210px]">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 select-none" style={styles}>$</span>
                    <input
                        min={0}
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

                <span style={styles} className="mr-10">باليوم</span>
            </div>
        </div>
    )
}
export default PaymentDetails

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