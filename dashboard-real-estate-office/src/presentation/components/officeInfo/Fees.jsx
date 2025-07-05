import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";
import Header from "./Header.jsx";
import {useForm} from "react-hook-form";
import TextInput from "../shared/TextInput.jsx";
import SelectInput from "../shared/SelectInput.jsx";
import {formatPrice} from "../../../shared/utils/formatPrice.js";
import Button from "@mui/material/Button";

const Fees = () => {
    const {register} = useForm();
    const fees = [
        {location: 'دمشق, الميدان', price: 50, id: 1},
        {location: 'دمشق, الميدان', price: 50, id: 1},
        {location: 'دمشق, الميدان', price: 50, id: 1},
        {location: 'دمشق, الميدان', price: 50, id: 1},
        {location: 'دمشق, الميدان', price: 50, id: 1},
        {location: 'دمشق, الميدان', price: 50, id: 1},
        {location: 'دمشق, الميدان', price: 50, id: 1},
        {location: 'دمشق, الميدان', price: 50, id: 1},
        {location: 'دمشق, الميدان', price: 50, id: 1},
        {location: 'دمشق, الميدان', price: 50, id: 1},
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
                        register={register("reservationPeriod")}
                    />
                    <TextInput
                        title="تحديد سعر العربون في المتر المربع"
                        type="number"
                        register={register("depositPrice")}
                        inputClassName="max-w-[180px]"
                    />
                    <TextInput
                        title="تحديد نسبة العربون في المكان السياحي"
                        type="number"
                        register={register("depositRate")}
                        inputClassName="max-w-[180px]"
                    />
                </div>
                <TextInput
                    title="تحديد نسبة رسوم المكتب"
                    type="number"
                    register={register("feesRate")}
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
                    // onClick={onPress}
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
