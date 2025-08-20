import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import TextInput from "../../../../shared/presentation/components/TextInput.jsx";
import SelectInput from "../../../../shared/presentation/components/SelectInput.jsx";
import {useForm} from "react-hook-form";
import facebook from "../../../../shared/assets/office-info/facebook.svg"
import whatsapp from "../../../../shared/assets/office-info/whatsapp.svg"
import instagram from "../../../../shared/assets/office-info/instagram.svg"
import {useEffect, useState} from "react";
import {MapPin} from "lucide-react";
import {Button} from "@mui/material";
import {Map} from "../../../../shared/presentation/components/Map.jsx";

const GeneralDetails = ({office, name}) => {
    const {register, setValue} = useForm();
    const [showMap, setShowMap] = useState(false);
    const location = {lat: office?.latitude, lng: office?.longitude};

    useEffect(() => {
        setValue("name", office?.name);
        setValue("phone", office?.phone);
        setValue("opening_time", office?.opening_time?.slice(0, 5));
        setValue("closing_time", office?.closing_time?.slice(0, 5));
        office?.socials?.map((social) => {
            setValue(social.platform, social.link);
        })
        setValue("details", office?.details);
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
             key={office?.id}
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
                    name={"phone"}
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
                        title={office?.city_name}
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
                        title={office?.region_name}
                        style={{borderWidth: '1px'}}
                    />
                </div>

                {/* تحديد الموقع */}
                {name === 'المكتب' && <div className="flex flex-col justify-around items-center flex-1 min-w-[95px]">
                    <span className="my-2">
                        عرض الموقع
                    </span>
                    <Button
                        color={BACKGROUND_COLORS.sidebar}
                        variant="contained"
                        onClick={() => setShowMap(true)}
                        sx={{
                            width: "63px", height: "60px",
                            borderColor: TEXT_COLORS.primary,
                            borderStyle: 'solid',
                            borderWidth: '1px',
                            borderRadius: '15px',
                        }}
                    >
                        <MapPin size={30} color={TEXT_COLORS.primary}/>
                    </Button>
                </div>}
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
                        {...register("opening_time", {required: true})}
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
                        {...register("closing_time", {required: true})}
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
                            name={"facebook"}
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
                            name={"whatsapp"}
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
                            name={"instagram"}
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
                        name={"details"}
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
                            title={office?.career}
                            style={{borderWidth: '1px'}}
                        />
                    </div>
                </div>
            }
            {showMap && <Map onClose={() => setShowMap(false)}
                             center={location} markers={[{location, name: office?.name}]}/>}
        </div>
    )
}
export default GeneralDetails
