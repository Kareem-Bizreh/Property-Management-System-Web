import Header1 from "../addProperty/Header1.jsx";
import useTouristStore from "../../../application/state/tourism/useTouristStore.jsx";
import FinancialRecord from "./FinancialRecord.jsx";

const FinancialRecords = () => {
    const {tourist} = useTouristStore();

    return (
        <div className="w-full flex flex-col items-center gap-6">
            <Header1 title={"السجل المالي"} align={"right"}/>
            {/*<FinancialRecord record={{*/}
            {/*    id: 1, reason: 'عربون', startDate: '2025-5-5', endDate: '2025-6-5', phone: '0912345678',*/}
            {/*    paymentMethod: 'دفع يدوي', amount: 15000, status: 'تم الدفع', invoiceImage: null*/}
            {/*}}/>*/}
            {tourist.financialRecord?.map((item) => (
                <FinancialRecord record={item} upload={() => {}}/>
            ))}
        </div>
    )
}
export default FinancialRecords
