import mapIcon from "../../../../shared/assets/shared/map-marker.svg";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import TextInput from "../../../../shared/presentation/components/TextInput.jsx";
import SelectInput from "../../../../shared/presentation/components/SelectInput.jsx";
import {useFormContext} from "react-hook-form";
import {useEffect} from "react";
import useServiceProviderStore from "../../../application/state/dashboard/useServiceProviderStore.jsx";
import {SyrianGovernorates} from "../../../../shared/shared/constants/syrianGovernorates.jsx";
import Button from "@mui/material/Button";
import {ServiceProviderType} from "../../../../shared/shared/constants/ServiceProviderType.jsx";

const GeneralDetails = ({onEdit}) => {
    const {register, setValue, getValues, watch, handleSubmit} = useFormContext();
    const {serviceProvider, setServiceProvider} = useServiceProviderStore();

    useEffect(() => {
        const currentValues = getValues();

        if (currentValues.name !== serviceProvider?.name) {
            setValue("name", serviceProvider?.name);
        }

        if ((currentValues.contactNumber) !== serviceProvider?.contactNumber) {
            setValue("contactNumber", serviceProvider?.contactNumber);
        }

        if (currentValues.openingTime !== serviceProvider?.openingTime) {
            setValue("openingTime", serviceProvider?.openingTime);
        }

        if (currentValues.closingTime !== serviceProvider?.closingTime) {
            setValue("closingTime", serviceProvider?.closingTime);
        }

        if (currentValues.description !== serviceProvider?.description) {
            setValue("description", serviceProvider?.description);
        }
    }, []);

    useEffect(() => {
        const currentValues = watch();

        setServiceProvider({
            ...serviceProvider,
            name: currentValues.name,
            contactNumber: currentValues.contactNumber,
            openingTime: currentValues.openingTime,
            closingTime: currentValues.closingTime,
            description: currentValues.description,
        });

    }, [watch("name"), watch("contactNumber"), watch("openingTime"), watch("closingTime"), watch("description")]);

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
                        title={serviceProvider?.city.name}
                        style={{borderWidth: '1px'}}
                        options={SyrianGovernorates.map((city) => city.name)}
                        onChange={(cityName) => {
                            const city = SyrianGovernorates.find((gov) => gov.name === cityName);
                            setServiceProvider({
                                    ...serviceProvider,
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
                        title={serviceProvider?.region.name}
                        style={{borderWidth: '1px'}}
                        options={SyrianGovernorates.find((city) => city.id === serviceProvider?.city.id).regions.map((region) => region.name)}
                        onChange={(regionName) => {
                            const city = SyrianGovernorates.find((gov) => gov.id === serviceProvider?.city.id);
                            const region = city?.regions.find((region) => region.name === regionName);
                            setServiceProvider({...serviceProvider, region})
                        }}
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
            {/* نوع الخدمة */}
            <div className="w-[250px] min-w-[120px] flex flex-col justify-around flex-2 gap-2"
                 style={{color: TEXT_COLORS.secondary}}
            >
                <span className="my-2">نوع الخدمة</span>
                <SelectInput
                    height={'60px'}
                    maxWidth={'215px'}
                    title={serviceProvider?.type}
                    options={ServiceProviderType}
                    onChange={(type) => setServiceProvider({...serviceProvider, type})}
                    style={{borderWidth: '1px'}}
                />
            </div>
            {/* وصف الخدمة */}
            <div className="flex flex-col w-full mt-6" style={{color: TEXT_COLORS.black}}>
                <TextInput
                    type="text"
                    name={"description"}
                    register={register}
                    multiline={true}
                    title="وصف الخدمة"
                />
            </div>
            <div className="flex items-center justify-end mx-4 mt-4">
                <Button
                    variant="contained"
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
            </div>
        </div>
    )
}
export default GeneralDetails
