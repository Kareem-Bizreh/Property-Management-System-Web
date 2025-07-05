import mapIcon from "../../../assets/shared/map-marker.svg";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";
import TextInput from "../shared/TextInput.jsx";
import SelectInput from "../shared/SelectInput.jsx";
import {useForm} from "react-hook-form";
import Button from "@mui/material/Button";
import facebook from "../../../assets/office-info/facebook.svg"
import whatsapp from "../../../assets/office-info/whatsapp.svg"
import instagram from "../../../assets/office-info/instagram.svg"

const GeneralDetails = () => {
    const {register} = useForm();

    return (
        <div className="flex flex-col justify-between py-4 px-6 rounded-[25px] min-h-full h-auto"
             style={{
                 backgroundColor: BACKGROUND_COLORS.secondary2,
                 color: TEXT_COLORS.secondary,
                 fontFamily: "Cairo",
                 fontWeight: 700,
                 fontSize: "16px",
                 lineHeight: "100%",
             }}
        >
            {/* اسم المكتب */}
            <div className="w-[50%]" style={{color: TEXT_COLORS.black}}>
                <TextInput
                    title="اسم المكتب"
                    type="text"
                    register={register("officeName")}
                />

                {/* رقم التواصل */}
                <TextInput
                    title="رقم التواصل"
                    type="text"
                    register={register("contactNumber")}
                />
            </div>

            <div className="flex flex-row flex-wrap min-h-[100px] gap-4">
                {/* المحافظة */}
                <div className="w-[250px] min-w-[120px] flex flex-col justify-around flex-2">
                    <span className="my-2">المحافظة</span>
                    <SelectInput
                        height={'60px'}
                        maxWidth={'250px'}
                        title=""
                        style={{borderWidth: '1px'}}
                        options={["دمشق", "ريف دمشق", "حلب"]}
                        onChange={(v) => console.log("محافظة:", v)}
                    />
                </div>

                {/* المنطقة */}
                <div className="w-[250px] min-w-[120px] flex flex-col justify-around flex-2">
                    <span className="my-2">المنطقة</span>
                    <SelectInput
                        height={'60px'}
                        maxWidth={'250px'}
                        title=""
                        style={{borderWidth: '1px'}}
                        options={["المزة", "القنوات", "باب توما"]}
                        onChange={(v) => console.log("منطقة:", v)}
                    />
                </div>

                {/* تحديد الموقع */}
                <div className="flex flex-col justify-around items-center flex-1 min-w-[95px]">
                    <span className="my-2">
                        تحديد الموقع
                    </span>
                    <div
                        className="relative w-[63px] h-[60px] rounded-[15px] border-[1px] bg-[#DBEDF6]
                                            transition-colors duration-200 cursor-pointer custom-hover"
                        style={{
                            "--hover-bg": "white",
                            borderColor: TEXT_COLORS.primary,
                        }}
                    >
                        <img
                            className="absolute object-cover right-1/2 transform translate-x-1/2 top-1/2 -translate-y-1/2"
                            src={mapIcon}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-row flex-wrap min-h-[100px] gap-8" style={{color: TEXT_COLORS.black}}>
                {/* وقت فتح المكتب */}
                <div className="flex flex-col justify-around max-w-[230px] min-w-[135px] flex-1">
                    <span
                        className="my-2 text-right"
                        style={{
                            color: TEXT_COLORS.secondary,
                            fontFamily: "Cairo",
                            fontWeight: 700,
                            fontSize: "16px",
                            lineHeight: "100%",
                        }}
                    >
                      وقت فتح المكتب
                    </span>
                    <input
                        type="time"
                        {...register("openingTime")}
                        className="rounded-[15px] border-[1px] h-[50px] px-4 w-full"
                        style={{
                            backgroundColor: BACKGROUND_COLORS.app,
                            borderColor: TEXT_COLORS.primary,
                            fontFamily: "Cairo",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "130%",
                            textAlign: "center",
                        }}
                    />
                </div>

                {/* وقت إغلاق المكتب */}
                <div className="flex flex-col justify-around max-w-[230px] min-w-[135px] flex-1">
                    <span
                        className="mb-2 text-right"
                        style={{
                            color: TEXT_COLORS.secondary,
                            fontFamily: "Cairo",
                            fontWeight: 700,
                            fontSize: "16px",
                            lineHeight: "100%",
                        }}
                    >
                        وقت إغلاق المكتب
                    </span>
                    <input
                        type="time"
                        {...register("closingTime")}
                        className="rounded-[15px] border-[1px] h-[50px] px-4 w-full max-w-[260px]"
                        style={{
                            backgroundColor: BACKGROUND_COLORS.app,
                            borderColor: TEXT_COLORS.primary,
                            fontFamily: "Cairo",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "130%",
                            textAlign: "center",
                        }}
                    />
                </div>
            </div>
            {/* مواقع التواصل الإجتماعي */}
            <div className="flex flex-col w-full mt-6" style={{color: TEXT_COLORS.black}}>
                <span style={{color: TEXT_COLORS.secondary}}>
                    مواقع التواصل الإجتماعي
                </span>

                {/* Facebook */}
                <div className="relative w-full">
                    <TextInput
                        type="text"
                        register={register("facebook")}
                        inputClassName="pr-12"
                    />
                    <img
                        src={facebook}
                        alt="facebook"
                        className="absolute top-1/2 -translate-y-1/2 right-2 w-[35px] h-[35px] mt-2"
                    />
                </div>

                {/* WhatsApp */}
                <div className="relative w-full">
                    <div style={{color: TEXT_COLORS.black}}>
                        <TextInput
                            type="text"
                            register={register("whatsapp")}
                            inputClassName="pr-12"
                        />
                    </div>
                    <img
                        src={whatsapp}
                        alt="whatsapp"
                        className="absolute top-1/2 -translate-y-1/2 right-2 w-[35px] h-[35px] mt-2"
                    />
                </div>

                {/* Instagram */}
                <div className="relative w-full">
                    <div style={{color: TEXT_COLORS.black}}>
                        <TextInput
                            type="text"
                            register={register("instagram")}
                            inputClassName="pr-12"
                        />
                    </div>
                    <img
                        src={instagram}
                        alt="instagram"
                        className="absolute top-1/2 -translate-y-1/2 right-2 w-[35px] h-[35px] mt-2"
                    />
                </div>
            </div>
            <div className="flex items-center justify-end mx-4 mt-4">
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
                    تعديل
                </Button>
            </div>
        </div>
    )
}
export default GeneralDetails
