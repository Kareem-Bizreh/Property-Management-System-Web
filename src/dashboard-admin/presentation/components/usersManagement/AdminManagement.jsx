import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import Popup from "reactjs-popup";
import Header from "../../../../shared/presentation/components/Header.jsx";
import {useForm} from "react-hook-form";
import {Checkbox} from "@mui/material";
import usePermissionsStore from "../../../application/state/usersManagement/usePermissionsStore.jsx";
import SelectInput from "../../../../shared/presentation/components/SelectInput.jsx";
import useCityStore from "../../../application/state/usersManagement/useCityStore.jsx";
import {SyrianGovernorates} from "../../../../shared/shared/constants/syrianGovernorates.jsx";
import Button from "@mui/material/Button";

const AdminManagement = ({onPress, type, useOpenStore: {isOpen, setIsOpen}}) => {
    const {register, handleSubmit} = useForm();
    const {
        agentsManagement,
        financeAndAdsManagement,
        postsManagement,
        complaintsAndSupport,
        systemSupervisor,
        setPermission
    } = usePermissionsStore();
    const {city, setCity} = useCityStore();

    function Field({title, name}) {
        return (
            <div className="flex flex-col flex-1 items-start gap-4 px-2" key={name}>
                <span>{title}</span>
                <input
                    type="text"
                    {...register(name, {required: true})}
                    className='rounded-[15px] border-[1px] min-h-[45px] px-2 w-full'
                    style={{
                        color: TEXT_COLORS.black,
                        backgroundColor: BACKGROUND_COLORS.app,
                        borderColor: TEXT_COLORS.select,
                        fontWeight: 400,
                    }}
                />
            </div>
        )
    }

    function Permission({name, value, title}) {
        return (
            <div className="w-full flex flex-row flex-wrap gap-4 px-2 items-center" key={title}>
                <Checkbox
                    checked={value}
                    onChange={(e) => setPermission(title, e.target.checked)}
                    sx={{'&.Mui-checked': {color: BACKGROUND_COLORS.button}}}
                />
                <span>{name}</span>
            </div>
        )
    }

    const permissions = [
        {name: "إدارة الوسطاء", value: agentsManagement, title: 'agentsManagement'},
        {name: "إدارة المالية والإعلانات", value: financeAndAdsManagement, title: 'financeAndAdsManagement'},
        {name: "إدارة المنشورات", value: postsManagement, title: 'postsManagement'},
        {name: "إدارة الشكاوي والدعم", value: complaintsAndSupport, title: 'complaintsAndSupport'},
        {name: "مراقب النظام", value: systemSupervisor, title: 'systemSupervisor'},
    ];

    return (
        <Popup
            open={isOpen}
            onClose={() => setIsOpen(false)}
            modal
            nested
            closeOnDocumentClick
            contentStyle={{
                width: '580px',
                height: 'auto',
                borderRadius: '90px',
                backgroundColor: BACKGROUND_COLORS.app,
                padding: '20px',
            }}
        >
            {(close) => (
                <div className="flex flex-col items-center gap-4 flex-wrap"
                     style={{
                         color: TEXT_COLORS.secondary,
                         fontFamily: 'Cairo',
                         fontWeight: 700,
                         fontSize: '18px',
                         lineHeight: '100%',
                         letterSpacing: '3%',
                     }}
                >
                    <div className="w-[250px] -my-4 mr-6 whitespace-nowrap">
                        <Header title={`${type} مشرف`}/>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex flex-row flex-wrap items-center justify-between">
                            <Field name={"firstName"} title={'الاسم الأول'}/>
                            <Field name={"lastName"} title={'الاسم الأخير'}/>
                        </div>
                        {type === "تعديل" && (
                            <div className="flex flex-row flex-wrap items-center justify-between">
                                <Field name={"userName"} title={'اسم المستخدم'}/>
                                <Field name={"password"} title={'كلمة السر'}/>
                            </div>
                        )}
                        <Field name={"email"} title={'البريد الإلكتروني'}/>
                    </div>
                    <div className="flex flex-row items-center justify-center w-full px-4 gap-8">
                        <span className="mx-4">المحافظة</span>
                        <SelectInput
                            title={city || "الكل"} onChange={setCity}
                            maxWidth={"164px"} height={"48px"}
                            style={{
                                borderWidth: "1px",
                                fontWeight: 600,
                                color: TEXT_COLORS.primary,
                                fontSize: "18px",
                            }}
                            options={["إلغاء", ...SyrianGovernorates.map((gov) => gov.name)]}
                        />
                    </div>
                    <span>الصلاحيات</span>
                    <div className="grid grid-cols-2 grid-rows-3 gap-4 w-full items-center">
                        {permissions.map(({name, value, title}) => (
                            <Permission name={name} value={value} title={title}/>
                        ))}
                    </div>
                    <div className="flex flex-row items-center gap-6">
                        <Button variant="contained"
                                onClick={close}
                                sx={{
                                    width: 160,
                                    height: 47,
                                    color: BACKGROUND_COLORS.primary,
                                    backgroundColor: BACKGROUND_COLORS.secondary1,
                                    borderRadius: '25px',
                                    ...sharedSx
                                }}>
                            إلغاء
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleSubmit(onPress)}
                            sx={{
                                width: 160,
                                height: 47,
                                color: BACKGROUND_COLORS.app,
                                backgroundColor: BACKGROUND_COLORS.primary,
                                borderRadius: '25px',
                                ...sharedSx
                            }}>
                            {type}
                        </Button>
                    </div>
                </div>
            )}
        </Popup>
    )
}
export default AdminManagement

const sharedSx = {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '3%',
    textAlign: 'center'
};
