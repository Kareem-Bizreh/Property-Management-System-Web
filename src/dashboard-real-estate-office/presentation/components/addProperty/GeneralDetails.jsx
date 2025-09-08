import Header2 from "./Header2.jsx";
import space from "../../../assets/properties/space.svg";
import ownershipIcon from "../../../assets/properties/ownership.svg";
import side from "../../../assets/properties/side.svg";
import furnishings from "../../../assets/properties/furnishings.svg";
import rooms from "../../../assets/properties/rooms.svg";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import SelectInput from "../../../../shared/presentation/components/SelectInput.jsx";
import {useFormContext} from "react-hook-form";
import {PropertyOwnershipTypes} from "../../../shared/constants/propertyOwnershipType.jsx";
import usePropertyStore from "../../../application/state/property/usePropertyStore.jsx";
import {useEffect} from "react";
import {PropertyFurnishingTypes} from "../../../shared/constants/propertyFurnishingTypes.jsx";
import {Direction} from "../../../shared/constants/Direction.jsx";

const GeneralDetails = ({readOnly}) => {
    const {property, setProperty} = usePropertyStore();

    const {register, watch, setValue, getValues} = useFormContext();
    useEffect(() => {
        const currentValues = getValues();

        if (currentValues.area !== property.area) {
            setValue("area", property.area);
        }

        if ((currentValues.roomCounts?.total ?? 0) !== (property.room_counts?.total ?? 0)) {
            setValue("roomCounts", {
                ...currentValues.roomCounts,
                total: property.room_counts?.total ?? 0
            });
        }
    }, []);

    useEffect(() => {
        const currentValues = watch();
        setProperty({
            ...property,
            area: currentValues.area,
            room_counts: {
                ...property.room_counts,
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
            icon: ownershipIcon,
            title: "نوع الملكية",
            field: "select",
            options: PropertyOwnershipTypes,
            onChange: (ownership_type) => setProperty({...property, ownership_type}),
            value: property.ownership_type,
        },
        {
            icon: side,
            name: "direction",
            title: "الجهة",
            field: "select",
            options: Direction,
            onChange: (direction) => setProperty({...property, direction}),
            value: property.direction,
        },
        {
            icon: furnishings,
            title: "الفرش",
            field: "select",
            options: PropertyFurnishingTypes,
            value: property.has_furniture,
            onChange: (has_furniture) => setProperty({...property, has_furniture}),
        },
        {
            icon: rooms,
            name: "roomCounts.total",
            title: "عدد الغرف",
            field: "text",
            type: "number",
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

                            <div
                                className="w-full h-[1px]"
                                style={{backgroundColor: BACKGROUND_COLORS.picture}}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GeneralDetails;

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
