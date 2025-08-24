import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import Header from "./Header.jsx";
import {useFormContext} from "react-hook-form";
import TextInput from "../../../../shared/presentation/components/TextInput.jsx";
import Button from "@mui/material/Button";
import {useEffect} from "react";
import useOfficeStore from "../../../application/state/office/useOfficeStore.jsx";

const Fees = ({onEdit}) => {
    const {office, setOffice} = useOfficeStore();
    const {register, watch, setValue, getValues} = useFormContext();

    useEffect(() => {
        const currentValues = getValues();

        if ((currentValues.booking_period ?? 0) !== (office?.booking_period ?? 0)) {
            setValue("booking_period", Number(office?.booking_period ?? 0));
        }

        if ((currentValues.deposit_per_m2 ?? 0) !== (office?.deposit_per_m2 ?? 0)) {
            setValue("deposit_per_m2", Number(office?.deposit_per_m2 ?? 0));
        }

        if ((currentValues.tourism_deposit ?? 0) !== (office?.tourism_deposit ?? 0)) {
            setValue("tourism_deposit", Number(office?.tourism_deposit ?? 0));
        }

        if ((currentValues.commission ?? 0) !== (office?.commission ?? 0)) {
            setValue("commission", Number(office?.commission ?? 0));
        }

    }, []);

    useEffect(() => {
        const currentValues = watch();

        setOffice({
            ...office,
            booking_period: Number(currentValues.booking_period ?? 0),
            deposit_per_m2: Number(currentValues.deposit_per_m2 ?? 0),
            tourism_deposit: Number(currentValues.tourism_deposit ?? 0),
            commission: Number(currentValues.commission ?? 0),
        });

    }, [watch("booking_period"), watch("deposit_per_m2"), watch("tourism_deposit"), watch("commission")]);

    return (
        <div className="flex flex-col gap-4 rounded-[25px] px-8 py-6 h-auto min-w-fit"
             style={{
                 backgroundColor: BACKGROUND_COLORS.secondary2,
                 color: TEXT_COLORS.secondary,
                 fontFamily: "Cairo",
                 fontWeight: 700,
                 fontSize: "16px",
                 lineHeight: "100%",
             }}
        >
            <div className="w-fit">
                <Header title={'الرسوم'} fontSize={'24px'}/>
            </div>
            <div className="flex flex-col p-4 mb-4">
                <div className="flex flex-row flex-wrap justify-between" style={{color: TEXT_COLORS.black}}>
                    <TextInput
                        title="تحديد مدة الحجز باليوم"
                        type="number"
                        inputClassName="max-w-[180px]"
                        name={"booking_period"}
                        register={register}
                    />
                    <TextInput
                        title="تحديد سعر العربون في المتر المربع"
                        type="number"
                        name={"deposit_per_m2"}
                        register={register}
                        inputClassName="max-w-[180px]"
                    />
                    <TextInput
                        title="تحديد نسبة العربون في المكان السياحي"
                        type="number"
                        name={"tourism_deposit"}
                        register={register}
                        inputClassName="max-w-[180px]"
                    />
                </div>
                <TextInput
                    title="تحديد نسبة رسوم المكتب"
                    type="number"
                    name={"commission"}
                    register={register}
                    inputClassName="max-w-[180px] text-black"
                />
            </div>
            <div className="flex items-center justify-end">
                <Button variant="contained"
                        onClick={onEdit}
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
export default Fees
