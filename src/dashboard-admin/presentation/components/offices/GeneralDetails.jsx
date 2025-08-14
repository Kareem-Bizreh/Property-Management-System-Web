import mapIcon from "../../../../shared/assets/shared/map-marker.svg";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import TextInput from "../../../../shared/presentation/components/TextInput.jsx";
import SelectInput from "../../../../shared/presentation/components/SelectInput.jsx";
import {useForm} from "react-hook-form";
import facebook from "../../../../shared/assets/office-info/facebook.svg"
import whatsapp from "../../../../shared/assets/office-info/whatsapp.svg"
import instagram from "../../../../shared/assets/office-info/instagram.svg"
import {useEffect} from "react";

const GeneralDetails = ({office, name}) => {
    const {register, setValue, getValues} = useForm();

    useEffect(() => {
        const currentValues = getValues();

        if (currentValues.name !== office?.name) {
            setValue("name", office?.name);
        }

        if ((currentValues.contactNumber) !== office?.contactNumber) {
            setValue("contactNumber", office?.contactNumber);
        }

        if (currentValues.openingTime !== office?.openingTime) {
            setValue("openingTime", office?.openingTime);
        }

        if (currentValues.closingTime !== office?.closingTime) {
            setValue("closingTime", office?.closingTime);
        }

        if (currentValues.facebookAccount !== office?.facebookAccount) {
            setValue("facebookAccount", office?.facebookAccount);
        }

        if (currentValues.whatsappAccount !== office?.whatsappAccount) {
            setValue("whatsappAccount", office?.whatsappAccount);
        }

        if (currentValues.instagramAccount !== office?.instagramAccount) {
            setValue("instagramAccount", office?.instagramAccount);
        }

        if (currentValues.description !== office?.description) {
            setValue("description", office?.description);
        }
    }, []);

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
                    readOnly={true}
                    title={`اسم ${name}`}
                    type="text"
                    name={"name"}
                    register={register}
                />

                {/* رقم التواصل */}
                <TextInput
                    readOnly={true}
                    title="رقم التواصل"
                    type="text"
                    name={"contactNumber"}
                    register={register}
                />
            </div>

            <div className="flex flex-row flex-wrap min-h-[100px] gap-4">
                {/* المحافظة */}
                <div className="w-[250px] min-w-[120px] flex flex-col justify-around flex-2">
                    <span className="my-2">المحافظة</span>
                    <SelectInput
                        readOnly={true}
                        height={'60px'}
                        maxWidth={'250px'}
                        title={office?.city.name}
                        style={{borderWidth: '1px'}}
                    />
                </div>

                {/* المنطقة */}
                <div className="w-[250px] min-w-[120px] flex flex-col justify-around flex-2">
                    <span className="my-2">المنطقة</span>
                    <SelectInput
                        readOnly={true}
                        height={'60px'}
                        maxWidth={'250px'}
                        title={office?.region.name}
                        style={{borderWidth: '1px'}}
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
                      {`وقت فتح ${name}`}
                    </span>
                    <input
                        readOnly={true}
                        type="time"
                        {...register("openingTime", {required: true})}
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
                        className="my-2 text-right"
                        style={{
                            color: TEXT_COLORS.secondary,
                            fontFamily: "Cairo",
                            fontWeight: 700,
                            fontSize: "16px",
                            lineHeight: "100%",
                        }}
                    >
                        {`وقت إغلاق ${name}`}
                    </span>
                    <input
                        readOnly={true}
                        type="time"
                        {...register("closingTime", {required: true})}
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
            {name === 'المكتب' ?
                <div className="flex flex-col w-full mt-6" style={{color: TEXT_COLORS.black}}>
                    <span style={{color: TEXT_COLORS.secondary}}>
                        مواقع التواصل الإجتماعي
                    </span>

                    {/* Facebook */}
                    <div className="relative w-full">
                        <TextInput
                            readOnly={true}
                            type="text"
                            name={"facebookAccount"}
                            register={register}
                            required={false}
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
                        <TextInput
                            readOnly={true}
                            type="text"
                            name={"whatsappAccount"}
                            register={register}
                            required={false}
                            inputClassName="pr-12"
                        />
                        <img
                            src={whatsapp}
                            alt="whatsapp"
                            className="absolute top-1/2 -translate-y-1/2 right-2 w-[35px] h-[35px] mt-2"
                        />
                    </div>

                    {/* Instagram */}
                    <div className="relative w-full">
                        <TextInput
                            readOnly={true}
                            type="text"
                            name={"instagramAccount"}
                            register={register}
                            required={false}
                            inputClassName="pr-12"
                        />
                        <img
                            src={instagram}
                            alt="instagram"
                            className="absolute top-1/2 -translate-y-1/2 right-2 w-[35px] h-[35px] mt-2"
                        />
                    </div>
                </div> :
                <div className="flex flex-col w-full mt-6" style={{color: TEXT_COLORS.black}}>
                    <TextInput
                        readOnly={true}
                        type="text"
                        name={"description"}
                        register={register}
                        multiline={true}
                        title="وصف الخدمة"
                    />
                    {/* نوع الخدمة */}
                    <div className="w-[250px] min-w-[120px] flex flex-col justify-around flex-2 gap-2"
                         style={{color: TEXT_COLORS.secondary}}
                    >
                        <span className="my-2">نوع الخدمة</span>
                        <SelectInput
                            readOnly={true}
                            height={'60px'}
                            maxWidth={'250px'}
                            title={office?.region.name}
                            style={{borderWidth: '1px'}}
                        />
                    </div>
                </div>
            }
        </div>
    )
}
export default GeneralDetails
