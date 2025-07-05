import {
    BACKGROUND_COLORS,
    TEXT_COLORS,
} from "../../../shared/constants/colors.jsx";
import Header1 from "../addProperty/Header1.jsx";
import PropertyLocation from "../addProperty/PropertyLocation.jsx";
import GeneralDetails from "../addProperty/GeneralDetails.jsx";
import RoomDetails from "../shared/RoomDetails.jsx";
import PaymentDetails from "./PaymentDetails.jsx";
import Button from "@mui/material/Button";
import Header2 from "../addProperty/Header2.jsx";
import SelectInput from "../shared/SelectInput.jsx";
import {useNavigate} from "react-router";

const PropertyDetails = ({property = {}, status, readOnly = false}) => {
    const navigate = useNavigate();

    const buttons = [
        ...(status !== "مرفوض" && status !== "قيد الإنتظار"
            ? [
                {
                    title: "إلغاء",
                    color: BACKGROUND_COLORS.primary,
                    backgroundColor: BACKGROUND_COLORS.app,
                    onClick: () => navigate(-1),
                },
            ]
            : []),
        {
            title:
                status === "مرفوض"
                    ? "إعادة طلب"
                    : status === "قيد الإنتظار"
                        ? "عودة"
                        : status
                            ? "تعديل"
                            : "إضافة",
            color: BACKGROUND_COLORS.app,
            backgroundColor: BACKGROUND_COLORS.primary,
            onClick: () => {
                if (status === "قيد الإنتظار") navigate(-1);
            },
        },
    ];
    return (
        <div
            className="relative h-auto rounded-[15px] flex flex-col gap-8"
            style={{backgroundColor: BACKGROUND_COLORS.secondary2}}
        >
            <div className="mt-2 -mb-4">
                <Header1 title={"تفاصيل العقار"} align={"right"}/>
            </div>
            <div className="flex flex-col mx-8 mb-4">
                {status && (
                    <div className="flex flex-col">
                        <Header2 title={"حالة العقار:"}/>
                        <div
                            className="flex flex-wrap gap-16 items-center w-full"
                            style={{
                                fontFamily: "Cairo",
                                fontWeight: 600,
                                fontSize: "18px",
                                lineHeight: "100%",
                                letterSpacing: "0%",
                                textAlign: "center",
                                verticalAlign: "middle",
                            }}
                        >
                            <span
                                style={{color: TEXT_COLORS.primary}}
                                className="min-w-[120px]"
                            >
                                الحالة
                            </span>
                            {status === "مرفوض" || status === "قيد الإنتظار" ? (
                                <span
                                    className="h-[50px] max-w-[200px] w-full rounded-[16px] py-3"
                                    style={{
                                        backgroundColor:
                                            status === "مرفوض"
                                                ? BACKGROUND_COLORS.unavailable
                                                : BACKGROUND_COLORS.pending,
                                        color: TEXT_COLORS.white,
                                    }}
                                >
                                    {status}
                                </span>
                            ) : (
                                <SelectInput
                                    readOnly={readOnly}
                                    options={[
                                        "محجوز",
                                        "تم التأجير",
                                        "تم البيع",
                                        "غير متوفر",
                                        "متوفر",
                                        "في الصيانة",
                                    ]}
                                    height={"50px"}
                                    maxWidth={"200px"}
                                    title={status}
                                    style={{
                                        borderWidth: "1px",
                                        fontWeight: 600,
                                        color: TEXT_COLORS.primary,
                                        fontSize: "18px",
                                    }}
                                />
                            )}
                        </div>
                    </div>
                )}

                <PropertyLocation
                    city={property.city}
                    region={property.region}
                    floor_number={property.floor_number}
                    location={property.location}
                    readOnly={readOnly}
                />
                <GeneralDetails
                    area={property.area}
                    ownership={property.ownership_type}
                    direction={property.direction}
                    has_furniture={property.has_furniture}
                    room_number={property.room_counts?.total}
                    readOnly={readOnly}
                />
                <RoomDetails room_counts={property.room_counts} readOnly={readOnly}/>
                <PaymentDetails
                    listing_type={property.listing_type}
                    readOnly={readOnly}
                    details={
                        property.listing_type === "بيع"
                            ? property.sell_details
                            : property.rent_details
                    }
                />
                <div className="flex flex-row flex-wrap justify-end gap-4 mt-4">
                    {buttons.map((button) => (
                        <Button
                            variant="contained"
                            onClick={button.onClick}
                            sx={{
                                width: 153,
                                backgroundColor: button.backgroundColor,
                                color: button.color,
                                height: 47,
                                borderRadius: "25px",
                                fontWeight: 700,
                                fontSize: "18px",
                                lineHeight: "100%",
                                letterSpacing: "3%",
                                textAlign: "center",
                            }}
                        >
                            {button.title}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default PropertyDetails;
