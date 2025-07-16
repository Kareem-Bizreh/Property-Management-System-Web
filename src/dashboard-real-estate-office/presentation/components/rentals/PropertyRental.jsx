import Button from "@mui/material/Button";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import Header from "../shared/Header.jsx";
import {formatPrice} from "../../../shared/utils/formatPrice.js";
import Popup from "reactjs-popup";

const PropertyRental = () => {
    return (
        <Popup
            trigger={
                <Button variant="contained"
                        sx={{
                            width: 163,
                            height: 46,
                            backgroundColor: BACKGROUND_COLORS.card,
                            borderRadius: '15px',
                            fontWeight: 700,
                            fontSize: '16px',
                            lineHeight: '100%',
                            letterSpacing: '3%',
                            textAlign: 'center'
                        }}>
                    تأجير عقار
                </Button>
            }
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
                    <div className="w-full flex flex-col gap-3 mt-2 px-6">
                        <span style={{textAlign: 'right'}}>رقم هاتف المستخدم</span>
                        <div className="flex flex-row items-center gap-6">
                            <input
                                type="text"
                                pattern="[0-9]*"
                                inputMode="numeric"
                                className='rounded-[15px] border-[1px] min-h-[50px] px-4 w-full max-w-[260px]'
                                style={{
                                    color: TEXT_COLORS.black,
                                    backgroundColor: BACKGROUND_COLORS.app,
                                    borderColor: TEXT_COLORS.select,
                                    fontWeight: 400,
                                }}
                            />
                            <span style={{fontSize: '16px'}}>اسم المستخدم</span>
                        </div>
                        <div className="flex flex-col items-center gap-4 mt-4">
                            <span className="ml-10">مدة الإيجار</span>
                            <div className="flex flex-row items-center justify-center gap-6 mr-6">
                                <input
                                    type='number'
                                    // {...register(item.name)}
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
                                <span style={{fontSize: '16px'}}>{'بالشهر'}</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mt-2" style={{fontSize: '16px'}}>
                            <div className="flex flex-row gap-8">
                                <span className="w-[200px]">سعر إيجار العقار بالشهر :</span>
                                <span>{formatPrice('30000')} $</span>
                            </div>
                            <div className="flex flex-row gap-8">
                                <span className="w-[200px]">عمولة المكتب :</span>
                                <span>{formatPrice('100')} $</span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-around items-center mt-6">
                            <div className="flex flex-col gap-8 items-center">
                                <span>سعر الإجمالي :</span>
                                <span
                                    style={{
                                        fontSize: '24px',
                                        color: TEXT_COLORS.primary
                                    }}>{formatPrice('30100')} $</span>
                            </div>
                            <Button variant="contained"
                                // onClick={onPress}
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
                            // onClick={onPress}
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
