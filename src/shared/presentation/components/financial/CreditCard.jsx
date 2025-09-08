import chip from "../../../assets/office-info/chip.svg"
import wallet from "../../../assets/office-info/wallet.svg"
import {useFormContext} from "react-hook-form";
import {useEffect} from "react";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../colors.jsx";

const CreditCard = ({number}) => {
    const {register, setValue, watch} = useFormContext();
    useEffect(() => {
        setValue('creditCard', formatCardNumber(number))
    },[])
    const cardNumber = watch('creditCard') || '';

    const formatCardNumber = (value) => {
        const onlyNums = value.replace(/\D/g, '').slice(0, 16);
        return onlyNums.replace(/(.{4})/g, '$1 ').trim();
    };

    const onInput = (e) => {
        const formatted = formatCardNumber(e.target.value);
        setValue('creditCard', formatted);
        e.target.selectionStart = e.target.selectionEnd = formatted.length;
    };

    return (
        <div className="relative w-[245px] h-[150px] rounded-[24px] bg-[radial-gradient(circle,_#30B0C7,_#2790A3)] shadow-xl">
            <img src={chip} alt="chip" className="absolute top-[10px] left-[15px]"/>
            <input
                style={{
                    backgroundColor: BACKGROUND_COLORS.app,
                    color: TEXT_COLORS.black,
                    fontFamily: 'Cairo',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '3%',
                    textAlign: 'left',
                }}
                dir={'ltr'}
                {...register("creditCard")}
                value={cardNumber}
                onInput={onInput}
                maxLength={19} // 16 رقم + 3 فراغات
                placeholder="xxxx xxxx xxxx xxxx"
                inputMode="numeric"
                autoComplete="cc-number"
                spellCheck={false}
                className="absolute top-[60px] left-[15px] px-2 rounded-lg"
            />
            <img src={wallet} alt="wallet" className="absolute top-[64px] left-[180px]"/>
            <div className="absolute w-[40px] h-[40px] top-[118px] right-[10px]">
                <div className="absolute left-[14px] top-0 w-[23px] h-[23px] rounded-full bg-blue-300 opacity-50 z-1"/>
                <div className="absolute left-0 top-0 w-[23px] h-[23px] rounded-full bg-white"/>
            </div>
        </div>
    )
}
export default CreditCard
