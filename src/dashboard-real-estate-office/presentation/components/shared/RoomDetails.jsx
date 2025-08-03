import Header2 from "../addProperty/Header2.jsx";
import bed from "../../../assets/properties/bed.svg";
import livingRoom from "../../../assets/properties/livingRoom.svg";
import shower from "../../../assets/properties/shower.svg";
import kitchenIcon from "../../../assets/properties/kitchen.svg";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import {useFormContext} from "react-hook-form";
import usePropertyStore from "../../../application/state/property/usePropertyStore.jsx";
import {useEffect} from "react";

const RoomDetails = ({readOnly = false}) => {
    const {property, setProperty} = usePropertyStore();

    const items = [
        {title: "نوم", icon: bed, type: "number", name: "bedroom"},
        {title: "معيشة", icon: livingRoom, type: "number", name: "living_room"},
        {title: "حمام", icon: shower, type: "number", name: "bathroom"},
        {title: "مطبخ", icon: kitchenIcon, type: "number", name: "kitchen"},
    ];
    const {register, setValue, getValues, watch} = useFormContext();

    useEffect(() => {
        const current = getValues();
        const safeSet = (key, value) => {
            if (current[key] !== value) {
                setValue(key, value);
            }
        };

        safeSet("bedroom", property.room_counts?.bedroom ?? 0);
        safeSet("living_room", property.room_counts?.living_room ?? 0);
        safeSet("kitchen", property.room_counts?.kitchen ?? 0);
        safeSet("bathroom", property.room_counts?.bathroom ?? 0);
    }, []);

    const values = watch();
    useEffect(() => {
        setProperty({
            ...property,
            room_counts: {
                ...property.room_counts,
                bedroom: Number(values.bedroom),
                living_room: Number(values.living_room),
                kitchen: Number(values.kitchen),
                bathroom: Number(values.bathroom),
            },
        });

    }, [values.bedroom, values.living_room, values.bathroom, values.kitchen]);

    return (
        <div className="flex flex-col gap-2 mt-4">
            <Header2 title={"تفاصيل الغرف:"}/>
            <div className="flex flex-row flex-wrap gap-8 justify-center">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-row flex-wrap gap-4 items-center"
                    >
                        <img src={item.icon} className="w-[25px] h-[25px]"/>

                        <span
                            style={{
                                color: TEXT_COLORS.primary,
                                fontFamily: "Cairo",
                                fontWeight: 600,
                                fontSize: "18px",
                                lineHeight: "100%",
                                letterSpacing: "0%",
                                textAlign: "center",
                                verticalAlign: "middle",
                            }}
                            className="min-w-[90px]"
                        >
                            {item.title}
                        </span>

                        <input
                            readOnly={readOnly}
                            type={item.type}
                            {...register(item.name, {
                                required: `${item.name} مطلوب`,
                            })}
                            className="rounded-[15px] border-[1px] min-h-[50px] pl-4 pr-4 max-w-[150px] w-full text-center"
                            style={{
                                backgroundColor: BACKGROUND_COLORS.app,
                                borderColor: TEXT_COLORS.primary,
                                fontFamily: "Cairo",
                                fontWeight: "400",
                                fontSize: "18px",
                                lineHeight: "130%",
                                letterSpacing: "2%",
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default RoomDetails;
