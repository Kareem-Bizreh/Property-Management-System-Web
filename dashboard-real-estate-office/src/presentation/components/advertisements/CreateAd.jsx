import ButtonCard from "./ButtonCard.jsx";
import seller from "../../../assets/ads/seller.svg";
import {BACKGROUND_COLORS, DASHBOARD_CARDS_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";
import Header from "../shared/Header.jsx";
import Button from "@mui/material/Button";
import Popup from "reactjs-popup";
import UploadImage from "../shared/UploadImage.jsx";
import {formatPrice} from "../../../shared/utils/formatPrice.js";
import {useForm} from "react-hook-form";

const CreateAd = ({price}) => {
    const { register, watch } = useForm({
        defaultValues: {
            days: 0
        },
    });

    return (
        <Popup
            trigger={
                <ButtonCard
                    onClick={(e) => e.stopPropagation()}
                    icon={seller}
                    title={'إنشاء إعلان'}
                    color={DASHBOARD_CARDS_COLORS.warnings}
                    bgColor={DASHBOARD_CARDS_COLORS.bg_warnings}
                />
            }
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
                        <UploadImage title={"صورة الإعلان"}/>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-col items-center gap-5">
                            <span>عدد أيام عرض الإعلان</span>
                            <input
                                {...register('days')}
                                min={0}
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
                            <span>{formatPrice(price)} $</span>
                        </div>
                        <div className="flex flex-col items-center gap-6 mb-4" style={{fontSize: '16px'}}>
                            <span>السعر</span>
                            <span
                                style={{fontSize: '24px', color: TEXT_COLORS.primary}}>{formatPrice(price * watch('days'))} $</span>
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
                            دفع
                        </Button>
                    </div>
                </div>
            )}
        </Popup>
    )
}
export default CreateAd
