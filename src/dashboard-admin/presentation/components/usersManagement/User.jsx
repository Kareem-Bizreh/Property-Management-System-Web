import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import {formatDate} from "../../../../shared/shared/utils/formatDate.js";
import Button from "@mui/material/Button";
import useEditAdminOpenStore from "../../../application/state/usersManagement/useEditAdminOpenStore.jsx";
import AdminManagement from "./AdminManagement.jsx";

const User = ({user: {id, fullName, userName, phone, joinDate, role}, onDelete, onEdit}) => {
    const {isOpen, setIsOpen} = useEditAdminOpenStore();
    return (
        <div
            className="flex flex-row flex-wrap justify-between items-center
            h-auto min-h-[90px] gap-6 whitespace-nowrap rounded-[15px] my-4"
            style={{
                color: TEXT_COLORS.primary,
                backgroundColor: BACKGROUND_COLORS.filter,
                fontFamily: 'Cairo',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '3%',
                textAlign: 'center'
            }}
            key={id}
        >
            {role === 'admin' && <span className="w-[90px]">{id}</span>}
            <span className="w-[190px]">{fullName}</span>
            <span className="w-[190px]">{userName}</span>
            {role !== 'admin' && <span className="w-[190px]" dir={'ltr'}>{phone}</span>}
            <span className="w-[110px]">{formatDate(joinDate)}</span>
            <div className="w-[170px] flex flex-col items-center justify-center gap-2">
                {role === 'admin' && (<>
                    <Button
                        onClick={() => setIsOpen(true)}
                        variant="contained"
                        sx={{
                            color: TEXT_COLORS.white,
                            width: 150,
                            height: 30,
                            backgroundColor: BACKGROUND_COLORS.edit,
                            borderWidth: '1px',
                            borderRadius: '15px',
                            borderColor: BACKGROUND_COLORS.app,
                            fontWeight: 700,
                            fontSize: '14px'
                        }}
                    >
                        تعديل
                    </Button>
                    {isOpen && (<AdminManagement onPress={onEdit} type="تعديل" useOpenStore={{isOpen, setIsOpen}}/>)}
                </>)}
                <Button
                    onClick={() => onDelete(id)}
                    variant="contained"
                    sx={{
                        color: TEXT_COLORS.white,
                        width: 150,
                        height: 30,
                        backgroundColor: BACKGROUND_COLORS.delete,
                        borderWidth: '1px',
                        borderRadius: '15px',
                        borderColor: BACKGROUND_COLORS.app,
                        fontWeight: 700,
                        fontSize: '14px'
                    }}
                >
                    حذف
                </Button>
            </div>
        </div>
    )
}
export default User
