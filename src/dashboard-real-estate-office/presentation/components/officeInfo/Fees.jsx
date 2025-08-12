import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import Header from "./Header.jsx";
import {useFormContext} from "react-hook-form";
import TextInput from "../../../../shared/presentation/components/TextInput.jsx";
import SelectInput from "../../../../shared/presentation/components/SelectInput.jsx";
import {formatPrice} from "../../../../shared/shared/utils/formatPrice.js";
import Button from "@mui/material/Button";
import {useEffect} from "react";
import useOfficeStore from "../../../application/state/office/useOfficeStore.jsx";

const Fees = ({onEdit}) => {
    const {office, setOffice} = useOfficeStore();
    const {register, watch, setValue, getValues} = useFormContext();

    useEffect(() => {
        const currentValues = getValues();

        if ((currentValues.reservationPeriod ?? 0) !== (office?.reservationPeriod ?? 0)) {
            setValue("reservationPeriod", office?.reservationPeriod ?? 0);
        }

        if ((currentValues.depositPrice ?? 0) !== (office?.depositPrice ?? 0)) {
            setValue("depositPrice", office?.depositPrice ?? 0);
        }

        if ((currentValues.depositRate ?? 0) !== (office?.depositRate ?? 0)) {
            setValue("depositRate", office?.depositRate ?? 0);
        }

        if ((currentValues.feesRate ?? 0) !== (office?.feesRate ?? 0)) {
            setValue("feesRate", office?.feesRate ?? 0);
        }

    }, []);

    useEffect(() => {
        const currentValues = watch();

        setOffice({
            ...office,
            reservationPeriod: Number(currentValues.reservationPeriod ?? 0),
            depositPrice: Number(currentValues.depositPrice ?? 0),
            depositRate: Number(currentValues.depositRate ?? 0),
            feesRate: Number(currentValues.feesRate ?? 0),
        });

    }, [watch("reservationPeriod"), watch("depositPrice"), watch("depositRate"), watch("feesRate")]);


    const fees = [
        {location: 'دمشق, الميدان', price: 50, id: 1},
        {location: 'دمشق, الميدان', price: 50, id: 2},
        {location: 'دمشق, الميدان', price: 50, id: 3},
        {location: 'دمشق, الميدان', price: 50, id: 4},
        {location: 'دمشق, الميدان', price: 50, id: 5},
        {location: 'دمشق, الميدان', price: 50, id: 6},
        {location: 'دمشق, الميدان', price: 50, id: 7},
        {location: 'دمشق, الميدان', price: 50, id: 8},
        {location: 'دمشق, الميدان', price: 50, id: 9},
        {location: 'دمشق, الميدان', price: 50, id: 10},
    ]

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
                        name={"reservationPeriod"}
                        register={register}
                    />
                    <TextInput
                        title="تحديد سعر العربون في المتر المربع"
                        type="number"
                        name={"depositPrice"}
                        register={register}
                        inputClassName="max-w-[180px]"
                    />
                    <TextInput
                        title="تحديد نسبة العربون في المكان السياحي"
                        type="number"
                        name={"depositRate"}
                        register={register}
                        inputClassName="max-w-[180px]"
                    />
                </div>
                <TextInput
                    title="تحديد نسبة رسوم المكتب"
                    type="number"
                    name={"feesRate"}
                    register={register}
                    inputClassName="max-w-[180px] text-black"
                />
            </div>
            <div className="w-fit">
                <Header title={'أسعار المناطق'} fontSize={'24px'}/>
            </div>
            <div className="flex flex-row flex-wrap gap-6 p-4 items-start">
                <div className="w-[180px] min-w-[120px] h-full items-start flex flex-col justify-around">
                    <span className="my-2">المنطقة</span>
                    <SelectInput
                        height={'60px'}
                        maxWidth={'180px'}
                        title=""
                        style={{borderWidth: '1px'}}
                        options={["المزة", "القنوات", "باب توما"]}
                        onChange={(v) => console.log("منطقة:", v)}
                    />
                </div>
                <div
                    className="w-full max-w-[620px] min-w-[360px] overflow-auto max-h-[300px]"
                    style={{backgroundColor: BACKGROUND_COLORS.table}}
                >
                    <table
                        className="table-auto w-full text-center"
                        style={{
                            borderCollapse: "separate",
                            borderSpacing: "5px 1px",
                            backgroundColor: BACKGROUND_COLORS.picture,
                        }}
                    >
                        <thead
                            className="h-[50px]"
                            style={{
                                color: TEXT_COLORS.primary,
                                position: "sticky",
                                top: 0,
                                backgroundColor: BACKGROUND_COLORS.table,
                                zIndex: 1,
                            }}
                        >
                        <tr>
                            <th>المنطقة</th>
                            <th>سعر المتر المربع</th>
                        </tr>
                        </thead>
                        <tbody style={{backgroundColor: BACKGROUND_COLORS.app, color: TEXT_COLORS.secondary}}>
                        {fees.map(fee => (
                            <tr className="h-[50px]" key={fee.id}>
                                <td>{fee.location}</td>
                                <td>{formatPrice(fee.price)} $</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
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
