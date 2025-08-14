import Header from "../../../shared/presentation/components/Header.jsx";
import {Tabs} from "../../../shared/presentation/components/Tabs.jsx";
import {CustomTabPanel} from "../../../shared/presentation/components/Tabs.jsx";
import {useState} from "react";
import TableHead from "../../../shared/presentation/components/TableHead.jsx";
import User from "../components/usersManagement/User.jsx";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/colors.jsx";
import Button from "@mui/material/Button";
import AdminManagement from "../components/usersManagement/AdminManagement.jsx";
import useAddAdminOpenStore from "../../application/state/usersManagement/useAddAdminOpenStore.jsx";

const UsersManagementPage = () => {
    const tabs = ['المستخدمين', 'المشرفين'];
    const [tab, setTab] = useState(0);
    const {isOpen, setIsOpen} = useAddAdminOpenStore();

    const fakeUsers = [
        {
            id: 1,
            fullName: "أحمد محمد",
            userName: "ahmedm",
            phone: "+967123456789",
            joinDate: "2024-01-10",
            role: "admin"
        },
        {
            id: 2,
            fullName: "سلمى خالد",
            userName: "salmak",
            phone: "+967987654321",
            joinDate: "2023-11-22",
            role: "user"
        },
        {
            id: 3,
            fullName: "مروان حسن",
            userName: "marwan_h",
            phone: "+967112233445",
            joinDate: "2025-03-05",
            role: "user"
        },
        {
            id: 4,
            fullName: "ليلى عمرو",
            userName: "leila_amr",
            phone: "+967998877665",
            joinDate: "2024-07-30",
            role: "admin"
        },
        {
            id: 5,
            fullName: "يوسف سليمان",
            userName: "youssef_s",
            phone: "+967556677889",
            joinDate: "2025-08-01",
            role: "user"
        },
    ];


    return (
        <div className="flex flex-col">
            <Header title={'إدارة المستخدمين'}/>
            <Tabs tabs={tabs} minWidth={"50px"} border={false} tab={tab} setTab={setTab}
                  tabHeight={'45px'} bgHeight={'65px'} borderRadius={'15px'}/>

            {/* المستخدمين */}
            <CustomTabPanel value={tab} index={0}>
                <div className="p-2">
                    <TableHead titles={usersHeadTitles}/>
                    {fakeUsers.filter((user) => user.role !== "admin").map(user => (
                        <User user={user}/>
                    ))}
                </div>
            </CustomTabPanel>

            {/* المشرفين */}
            <CustomTabPanel value={tab} index={1}>
                <div className="w-full h-[65px] mb-2 mt-4 flex items-center px-4"
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
                    {isOpen && (<AdminManagement type={'إضافة'} useOpenStore={{isOpen, setIsOpen}}/>)}
                </div>
                <div className="p-2">
                    <TableHead titles={adminsHeadTitles}/>
                    {fakeUsers.filter((user) => user.role === "admin").map(user => (
                        <User user={user}/>
                    ))}
                </div>
            </CustomTabPanel>
        </div>
    )
}
export default UsersManagementPage
const usersHeadTitles = [
    {name: 'الاسم الكامل', width: '190px'},
    {name: 'الاسم المستخدم', width: '190px'},
    {name: 'رقم الهاتف', width: '190px'},
    {name: 'تاريخ الانضمام', width: '110px'},
    {name: 'التحكم', width: '170px'}
];

const adminsHeadTitles = [
    {name: 'ID', width: '90px'},
    {name: 'الاسم الكامل', width: '190px'},
    {name: 'الاسم المستخدم', width: '190px'},
    {name: 'تاريخ الانضمام', width: '110px'},
    {name: 'التحكم', width: '170px'}
];