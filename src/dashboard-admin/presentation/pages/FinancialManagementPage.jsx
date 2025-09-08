import Header from "../../../shared/presentation/components/Header.jsx";
import {useEffect, useState} from "react";
import {Tabs, CustomTabPanel} from "../../../shared/presentation/components/Tabs.jsx";
import TableHead from "../components/shared/TableHead.jsx";
import FinancialRecord from "../components/financialManagement/FinancialRecord.jsx";
import CreditCard from "../../../shared/presentation/components/financial/CreditCard.jsx";
import useDataStore from "../../application/state/useDataStore.jsx";
import useLoadingStore from "../../../shared/application/state/useLoadingStore.jsx";
import {useNotification} from "../../../shared/shared/hooks/useNotification.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import {getAdInvoices} from "../../application/useCases/financeAndAds/getAdInvoicesUseCase.jsx";
import {getStripe} from "../../application/useCases/financeAndAds/getStripeUseCase.jsx";
import useUserStore from "../../../shared/application/state/useUserStore.jsx";
import {FormProvider, useForm} from "react-hook-form";
import {Button} from "@mui/material";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/colors.jsx";
import {editStripe} from "../../application/useCases/financeAndAds/editStipeUseCase.jsx";

const FinancialManagementPage = () => {
    const {user} = useUserStore();
    const tabs = ['السجلات المالية', ...(user.role === 'مدير' ? ['عرض المحفظة'] : [])];
    const [tab, setTab] = useState(0);
    const {isLoading, setIsLoading} = useLoadingStore();
    const {data, setDataForTab} = useDataStore();
    const {notifyError, notifyWarning, notifySuccess} = useNotification();
    const methods = useForm();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            let result;
            switch (tab) {
                case 0:
                    result = await getAdInvoices()
                    break;
                case 1:
                    result = await getStripe();
                    break;
            }

            if (result.success) {
                setDataForTab(tab, result.response.data);
                if (tab === 1) {
                    setDataForTab(1, [result.response.data.stripeCustomerId]);
                }
            } else {
                setDataForTab(tab, []);
                notifyError(result.response);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [tab]);

    const onEdit = async () => {
        const stripeCustomerId = methods.watch("creditCard").replace(/\s+/g, "");
        if (stripeCustomerId.length !== 16) {
            notifyWarning("يجب ان تكون بطاقة الدفع الالكتروني من 16 رقم");
            return;
        }
        setIsLoading(true);
        const {success, response} = await editStripe(stripeCustomerId);
        if (success) {
            notifySuccess("تم حفظ التعديلات بنجاح");
            setDataForTab(1, [stripeCustomerId]);
        } else {
            notifyError(response[0]);
        }
        setIsLoading(false);
    }

    return (
        <div className="flex flex-col">
            <Header title={'إدارة المالية'}/>
            <Tabs tabs={tabs} minWidth={"50px"} border={false} tab={tab} setTab={setTab}
                  tabHeight={'45px'} bgHeight={'65px'} borderRadius={'15px'}/>

            {(isLoading || !data) ? <Spinner/> :
                <div className="p-1 w-full h-full">
                    {/*السجلات المالية*/}
                    <CustomTabPanel value={tab} index={0}>
                        <TableHead titles={titles}/>
                        <div className="flex flex-col items-center gap-2 w-full">
                            {data[0]?.map((item) => (
                                <FinancialRecord record={item}/>
                            ))}
                        </div>
                    </CustomTabPanel>

                    {/*المحفظة*/}
                    <CustomTabPanel value={tab} index={1}>
                        <FormProvider {...methods}>
                            <div className="flex items-center justify-center w-full h-full p-8 space-x-2">
                                <CreditCard number={data[1]?.[0] ?? ""}/>
                                <Button
                                    onClick={onEdit}
                                    variant="contained"
                                    sx={{
                                        color: TEXT_COLORS.white, width: 100, height: 35,
                                        backgroundColor: BACKGROUND_COLORS.card,
                                        borderRadius: '15px',
                                        fontWeight: 700,
                                        fontSize: '16px',
                                        lineHeight: '100%',
                                        letterSpacing: '3%',
                                        textAlign: 'center'
                                    }}
                                >
                                    تعديل
                                </Button>
                            </div>
                        </FormProvider>
                    </CustomTabPanel>
                </div>}
        </div>
    )
}
export default FinancialManagementPage

const titles = [
    {name: 'تاريخ الدفع', width: '110px'},
    {name: 'الوسيط', width: '200px'},
    {name: 'نوع الإعلان', width: '120px'},
    {name: 'عدد الأيام', width: '110px'},
    {name: 'المبلغ', width: '110px'},
    {name: '', width: '140px'},
];