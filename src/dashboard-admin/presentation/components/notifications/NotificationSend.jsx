import Popup from "reactjs-popup";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import useNotificationSendOpenStore from "../../../application/state/notifications/useNotificationSendOpenStore.jsx";
import {useForm} from "react-hook-form";
import usePermissionsStore from "../../../application/state/notifications/usePermissionsStore.jsx";
import TextInput from "../../../../shared/presentation/components/TextInput.jsx";
import Header from "../../../../shared/presentation/components/Header.jsx";
import {Checkbox} from "@mui/material";
import Button from "@mui/material/Button";

const NotificationSend = () => {
    const {isOpen, setIsOpen} = useNotificationSendOpenStore();
    const {users, admins, offices, setPermission} = usePermissionsStore()
    const {register, handleSubmit} = useForm();

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

    const onSubmit = async () => {}

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
                color: TEXT_COLORS.secondary,
                padding: '30px',
            }}
        >
            {(close) => (
                <div className="flex flex-col items-center flex-wrap gap-4"
                     style={{
                         fontFamily: 'Cairo',
                         fontWeight: 700,
                         fontSize: '18px',
                         lineHeight: '100%',
                         letterSpacing: '3%',
                     }}
                >
                    <div className="w-[250px] -my-4 mr-6 whitespace-nowrap">
                        <Header title="إرسال إشعار"/>
                    </div>
                    <div className="flex flex-col w-full" style={{color: TEXT_COLORS.black}}>
                        <TextInput
                            title="العنوان"
                            type="text"
                            name={"title"}
                            register={register}
                        />
                        <TextInput
                            title="الوصف"
                            type="text"
                            name={"body"}
                            register={register}
                        />
                    </div>
                    <span>الصلاحيات</span>
                    <div className="flex flex-col items-start w-full">
                        <Permission name={'المستخدمين'} title={"users"} value={users}/>
                        <Permission name={'المشرفين'} title={"admins"} value={admins}/>
                        <Permission name={'الوسطاء'} title={"offices"} value={offices}/>
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
                                }}
                        >
                            إلغاء
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleSubmit(onSubmit)}
                            sx={{
                                width: 160,
                                height: 47,
                                color: BACKGROUND_COLORS.app,
                                backgroundColor: BACKGROUND_COLORS.primary,
                                borderRadius: '25px',
                                ...sharedSx
                            }}
                        >
                            إرسال
                        </Button>
                    </div>
                </div>
            )}
        </Popup>
    )
}
export default NotificationSend
const sharedSx = {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '3%',
    textAlign: 'center'
};
