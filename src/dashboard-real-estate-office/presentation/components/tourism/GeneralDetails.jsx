import {useEffect} from "react";
import {useFormContext} from "react-hook-form";
import useTouristStore from "../../../application/state/tourism/useTouristStore.jsx";
import {PropertyFurnishingTypes} from "../../../shared/constants/propertyFurnishingTypes.jsx";
import space from "../../../assets/properties/space.svg";
import ownershipIcon from "../../../assets/properties/ownership.svg";
import side from "../../../assets/properties/side.svg";
import pool from "../../../assets/properties/pool.svg";
import furnishings from "../../../assets/properties/furnishings.svg";
import rooms from "../../../assets/properties/rooms.svg";
import additional_services from "../../../assets/properties/additional_services.svg";
import Header2 from "../addProperty/Header2.jsx";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import SelectInput from "../../../../shared/presentation/components/SelectInput.jsx";
import KeywordSelector from "../../../../shared/presentation/components/KeywordSelector.jsx";
import {TourismPlaceElectricityStatus} from "../../../shared/constants/TourismPlaceElectricityStatus.jsx";
import {TourismPlaceWaterStatus} from "../../../shared/constants/TourismPlaceWaterStatus.jsx";
import {TourismPlacePoolStatus} from "../../../shared/constants/TourismPlacePoolStatus.jsx";
import {TourismPlaceExtras} from "../../../shared/constants/TourismPlaceExtras.jsx";

const GeneralDetails = ({readOnly}) => {
    const {tourist, setTourist} = useTouristStore();

    const {register, watch, setValue, getValues} = useFormContext();
    useEffect(() => {
        const currentValues = getValues();

        if (currentValues.area !== tourist.area) {
            setValue("area", tourist.area);
        }

        if ((currentValues.roomCounts?.total ?? 0) !== (tourist.room_counts?.total ?? 0)) {
            setValue("roomCounts", {
                ...currentValues.roomCounts,
                total: tourist.room_counts?.total ?? 0
            });
        }
    }, []);

    useEffect(() => {
        const currentValues = watch();
        setTourist({
            ...tourist,
            area: currentValues.area,
            room_counts: {
                ...tourist.room_counts,
                total: Number(currentValues.roomCounts?.total ?? 0),
            }
        });
    }, [watch("area"), watch("roomCounts.total")]);

    const items = [
        {
            icon: space,
            name: "area",
            title: "المساحة",
            field: "text",
            type: "number",
            additionalData: "بالـ م²",
        },
        {
            icon: rooms,
            name: "roomCounts.total",
            title: "عدد الغرف",
            field: "text",
            type: "number",
        },
        {
            icon: furnishings,
            title: "الفرش",
            field: "select",
            options: PropertyFurnishingTypes,
            value: tourist.has_furniture,
            onChange: (has_furniture) => setTourist({...tourist, has_furniture}),
        },
        {
            icon: ownershipIcon,
            title: "الكهرباء",
            field: "select",
            options: TourismPlaceElectricityStatus,
            onChange: (electricity) => setTourist({...tourist, electricity}),
            value: tourist.electricity,
        },
        {
            icon: side,
            title: "المياه",
            field: "select",
            options: TourismPlaceWaterStatus,
            onChange: (water) => setTourist({...tourist, water}),
            value: tourist.water,
        },
        {
            icon: pool,
            title: "المسبح",
            field: "select",
            options: TourismPlacePoolStatus,
            onChange: (pool) => setTourist({...tourist, pool}),
            value: tourist.pool,
        },
    ];

    return (
        <div className="flex flex-col gap-2">
            <Header2 title={"تفاصيل عامة:"}/>
            <div className="flex flex-col gap-2 mt-2">
                {items.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-1.5">
                            <div className="flex flex-row flex-wrap gap-16 items-center">
                                <img src={item.icon} className="w-[25px] h-[25px]"/>

                                <span style={styles} className="min-w-[136px]">
                                    {item.title}
                                </span>

                                {item.field === "text" ? (
                                    <input
                                        readOnly={readOnly}
                                        {...register(item.name, {
                                            required: `${item.name} مطلوب`,
                                        })}
                                        type={item.type}
                                        min={0}
                                        className="rounded-[15px] border-[1px] min-h-[50px] pl-4 pr-4 w-full max-w-[210px]"
                                        style={{
                                            backgroundColor: BACKGROUND_COLORS.app,
                                            borderColor: TEXT_COLORS.primary,
                                            fontFamily: "Cairo",
                                            fontWeight: "400",
                                            fontSize: "18px",
                                            lineHeight: "150%",
                                            letterSpacing: "2%",
                                            textAlign: item.type === "number" ? "center" : "right",
                                            verticalAlign: "middle",
                                        }}
                                    />
                                ) : (
                                    <SelectInput
                                        options={item.options}
                                        title={item.value}
                                        onChange={item.onChange}
                                        height={"50px"}
                                        maxWidth={"210px"}
                                        style={{
                                            borderWidth: "1px",
                                            fontWeight: 600,
                                            color: TEXT_COLORS.primary,
                                            fontSize: "18px",
                                        }}
                                        readOnly={readOnly}
                                    />
                                )}

                                <span style={styles}>{item.additionalData}</span>
                            </div>

                            <div className="w-full h-[1px]" style={{backgroundColor: BACKGROUND_COLORS.picture}}/>
                        </div>
                    );
                })}
                <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap gap-16 items-center -mb-5">
                        <img src={additional_services} className="w-[25px] h-[25px]"/>

                        <span style={styles} className="min-w-[136px]">
                            مرفقات إضافية
                        </span>
                    </div>
                    <KeywordSelector
                        onlyOne={false}
                        readOnly={readOnly}
                        select={tourist.additional_services}
                        options={TourismPlaceExtras}
                        onChange={(additional_services) => setTourist({...tourist, additional_services})}
                    />
                    <div className="w-full h-[1px]" style={{backgroundColor: BACKGROUND_COLORS.picture}}/>
                </div>

            </div>
        </div>
    )
}
export default GeneralDetails

const styles = {
    color: TEXT_COLORS.primary,
    fontFamily: "Cairo",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "100%",
    letterSpacing: "0%",
    textAlign: "center",
    verticalAlign: "middle",
};
