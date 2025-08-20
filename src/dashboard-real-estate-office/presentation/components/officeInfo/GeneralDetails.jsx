import {MapPin} from "lucide-react";
import {Map} from "../../../../shared/presentation/components/Map.jsx"
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import TextInput from "../../../../shared/presentation/components/TextInput.jsx";
import SelectInput from "../../../../shared/presentation/components/SelectInput.jsx";
import {useFormContext} from "react-hook-form";
import Button from "@mui/material/Button";
import facebook from "../../../../shared/assets/office-info/facebook.svg"
import whatsapp from "../../../../shared/assets/office-info/whatsapp.svg"
import instagram from "../../../../shared/assets/office-info/instagram.svg"
import useOfficeStore from "../../../application/state/office/useOfficeStore.jsx";
import {SyrianGovernorates} from "../../../../shared/shared/constants/syrianGovernorates.jsx";
import {useEffect, useState} from "react";

const GeneralDetails = ({onEdit}) => {
    const {register, watch, setValue, getValues, handleSubmit} = useFormContext();
    const {office, setOffice} = useOfficeStore();
    const [showMap, setShowMap] = useState(false);

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
    }, []);

    useEffect(() => {
        const currentValues = watch();

        setOffice({
            ...office,
            name: currentValues.name,
            contactNumber: currentValues.contactNumber,
            openingTime: currentValues.openingTime,
            closingTime: currentValues.closingTime,
            facebookAccount: currentValues.facebookAccount,
            whatsappAccount: currentValues.whatsappAccount,
            instagramAccount: currentValues.instagramAccount,
        });

    }, [watch("name"), watch("contactNumber"), watch("openingTime"), watch("closingTime"),
        watch("facebookAccount"), watch("whatsappAccount"), watch("instagramAccount")]);

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
                    name={"name"}
                    register={register}
                />

                {/* رقم التواصل */}
                <TextInput
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
                        height={'60px'}
                        maxWidth={'250px'}
                        title={office?.city.name}
                        style={{borderWidth: '1px'}}
                        options={SyrianGovernorates.map((city) => city.name)}
                        onChange={(cityName) => {
                            const city = SyrianGovernorates.find((gov) => gov.name === cityName);
                            setOffice({
                                    ...office,
                                    city,
                                    region: city.regions[0]
                                }
                            )
                        }}
                    />
                </div>

                {/* المنطقة */}
                <div className="w-[250px] min-w-[120px] flex flex-col justify-around flex-2">
                    <span className="my-2">المنطقة</span>
                    <SelectInput
                        height={'60px'}
                        maxWidth={'250px'}
                        title={office?.region.name}
                        style={{borderWidth: '1px'}}
                        options={SyrianGovernorates.find((city) => city.id === office?.city.id).regions.map((region) => region.name)}
                        onChange={(regionName) => {
                            const city = SyrianGovernorates.find((gov) => gov.id === office?.city.id);
                            const region = city?.regions.find((region) => region.name === regionName);
                            setOffice({...office, region})
                        }}
                    />
                </div>

                {/* تحديد الموقع */}
                <div className="flex flex-col justify-around items-center flex-1 min-w-[95px]">
                    <span>{`${office.coordinates ? 'عرض' : 'تحديد'} الموقع`}</span>
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
                    {showMap &&
                        <Map
                            onClose={() => setShowMap(false)}
                            onSelect={(coordinates) => setOffice({...office, coordinates})}
                            {...(office.coordinates ? {
                                center: office.coordinates,
                                markers: [{location: office.coordinates, name: office.postTitle}],
                            } : {zoom: 10})}
                        />}
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
                        وقت إغلاق المكتب
                    </span>
                    <input
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
            <div className="flex flex-col w-full mt-6" style={{color: TEXT_COLORS.black}}>
                <span style={{color: TEXT_COLORS.secondary}}>
                    مواقع التواصل الإجتماعي
                </span>

                {/* Facebook */}
                <div className="relative w-full">
                    <TextInput
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
            </div>
            {onEdit && <div className="flex items-center justify-end mx-4 mt-4">
                <Button variant="contained"
                        onClick={handleSubmit(onEdit)}
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
            </div>}
        </div>
    )
}
export default GeneralDetails
