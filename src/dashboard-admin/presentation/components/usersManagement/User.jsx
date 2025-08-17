import {useState} from "react";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import {formatDate} from "../../../../shared/shared/utils/formatDate.js";
import Button from "@mui/material/Button";
import useEditAdminOpenStore from "../../../application/state/usersManagement/useEditAdminOpenStore.jsx";
import AdminManagement from "./AdminManagement.jsx";
import ConfirmActionModalWithMUI from "../../../../shared/presentation/components/ConfirmActionModal.jsx";

const User = ({user, onDelete, onEdit, role}) => {
    const {isOpen, setIsOpen} = useEditAdminOpenStore();
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div
            className="flex flex-row flex-wrap justify-between items-center
            h-auto min-h-[90px] gap-6 whitespace-nowrap rounded-[15px] my-4 p-2"
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
            key={role + user.id}
        >
            {role === 'admin' && <span className="w-[90px]">{user.id}</span>}
            <span className="w-[190px]">{user.full_name}</span>
            {role !== 'admin' ?
                <span className="w-[250px]">{user.email}</span> :
                <span className="w-[190px]">{user.user_name}</span>}
            {role !== 'admin' && <span className="w-[120px]" dir={'ltr'}>{user.phone}</span>}
            <span className="w-[150px]">{formatDate(user.joining_date)}</span>
            {role === 'admin' &&
                <div className="w-[170px] flex flex-col items-center justify-center gap-2">
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
                    {isOpen && (<AdminManagement onPress={onEdit} type="تعديل" useOpenStore={{isOpen, setIsOpen}}
                                                 admin={user}/>)}
                    <Button
                        onClick={() => setModalOpen(true)}
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
                </div>}
            <ConfirmActionModalWithMUI
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={() => onDelete(user.id)}
                withReason={false}
                type={'الحذف'}
            />
        </div>
    )
}
export default User
