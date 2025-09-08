import Header from "../../../shared/presentation/components/Header.jsx";
import {Tabs} from "../../../shared/presentation/components/Tabs.jsx";
import {CustomTabPanel} from "../../../shared/presentation/components/Tabs.jsx";
import {useEffect, useState} from "react";
import TableHead from "../../../shared/presentation/components/TableHead.jsx";
import User from "../components/usersManagement/User.jsx";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/colors.jsx";
import Button from "@mui/material/Button";
import AdminManagement from "../components/usersManagement/AdminManagement.jsx";
import useAddAdminOpenStore from "../../application/state/usersManagement/useAddAdminOpenStore.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import useDataStore from "../../application/state/useDataStore.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import {getUser} from "../../application/useCases/user/getUserUseCase.jsx";
import {getAdmin} from "../../application/useCases/admin/getAdminUseCase.jsx";
import {deleteAdmin} from "../../application/useCases/admin/deleteAdminUseCase.jsx";
import {editAdmin} from "../../application/useCases/admin/editAdminUseCase.jsx";
import {addAdmin} from "../../application/useCases/admin/addAdminUseCase.jsx";

const UsersManagementPage = () => {
    const tabs = ['المستخدمين', 'المشرفين'];
    const [tab, setTab] = useState(0);
    const {isOpen, setIsOpen} = useAddAdminOpenStore();
    const {isLoading, setIsLoading} = useLoadingStore();
    const {data, setDataForTab} = useDataStore();
    const {notifyError, notifySuccess, notifyWarning} = useNotification();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            let result;
            switch (tab) {
                case 0:
                    result = await getUser();
                    break;
                case 1:
                    result = await getAdmin();
                    break;
            }

            if (result.success) {
                setDataForTab(tab, result.response.data);
            } else {
                setDataForTab(tab, []);
                notifyError(result.response);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [tab]);

    const onDelete = async (id) => {
        setIsLoading(true);
        const {success, response} = await deleteAdmin(id);
        if (success) {
            setDataForTab(tab, data[1].filter((item) => item.id !== id));
            notifySuccess("تم الحذف بنجاح");
        } else {
            notifyError(response);
        }
        setIsLoading(false);
    }

    const onSubmit = async (id, form, type, setIsOpen) => {
        setIsLoading(true);
        let result;
        switch (type) {
            case "edit":
                result = await editAdmin(id, form);
                break;
            case "add":
                result = await addAdmin(form);
                break;
        }
        if (result.success) {
            if (type === "edit") {
                notifySuccess("تم تعديل المشرف بنجاح");
            } else {
                notifySuccess("تم إضافة المشرف بنجاح");
            }
            notifyWarning("يرجى اعادة تحميل الصفحة لرؤية التغييرات");
            setIsOpen(false);
        } else {
            notifyError(result.response);
        }
        setIsLoading(false);
    }

    return (
        <div className="flex flex-col">
            <Header title={'إدارة المستخدمين'}/>
            <Tabs tabs={tabs} minWidth={"50px"} border={false} tab={tab} setTab={setTab}
                  tabHeight={'45px'} bgHeight={'65px'} borderRadius={'15px'}/>

            {(isLoading || !data) ? <Spinner/> :
                <div className="p-2">
                    {/* المستخدمين */}
                    <CustomTabPanel value={tab} index={0}>
                        <TableHead titles={usersHeadTitles}/>
                        {data[0]?.map(user => (<User user={user} role={"user"}/>))}
                    </CustomTabPanel>

                    {/* المشرفين */}
                    <CustomTabPanel value={tab} index={1}>
                        <div className="w-full h-[65px] mb-2 mt-4 flex items-center px-2"
                             style={{backgroundColor: BACKGROUND_COLORS.table}}
                        >
                            <Button
                                onClick={() => setIsOpen(true)}
                                variant="contained"
                                sx={{
                                    color: TEXT_COLORS.white,
                                    width: 180,
                                    height: 45,
                                    backgroundColor: BACKGROUND_COLORS.card,
                                    borderRadius: '15px',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    lineHeight: '100%',
                                    letterSpacing: '3%',
                                    textAlign: 'center'
                                }}
                            >
                                إضافة مشرف
                            </Button>
                            {isOpen && (<AdminManagement type={'إضافة'} useOpenStore={{isOpen, setIsOpen}}
                                                         onPress={(data, setIsOpen) =>
                                                             onSubmit(0, data, "add", setIsOpen)}/>)}
                        </div>
                        <TableHead titles={adminsHeadTitles}/>
                        {data[1]?.map(user => (<User user={user} role={"admin"} onDelete={onDelete}
                                                     onEdit={(data, setIsOpen) =>
                                                         onSubmit(user.id, data, "edit", setIsOpen)}/>))}
                    </CustomTabPanel>
                </div>}
        </div>
    )
}
export default UsersManagementPage
const usersHeadTitles = [
    {name: 'الاسم الكامل', width: '190px'},
    {name: 'البريد الالكتروني', width: '250px'},
    {name: 'رقم الهاتف', width: '120px'},
    {name: 'تاريخ الانضمام', width: '150px'}
];

const adminsHeadTitles = [
    {name: 'ID', width: '90px'},
    {name: 'الاسم الكامل', width: '190px'},
    {name: 'الاسم المستخدم', width: '190px'},
    {name: 'تاريخ الانضمام', width: '150px'},
    {name: 'التحكم', width: '170px'}
];