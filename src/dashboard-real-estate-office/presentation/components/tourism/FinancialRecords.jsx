import Header1 from "../addProperty/Header1.jsx";
import FinancialRecord from "./FinancialRecord.jsx";
import useReservationsStore from "../../../application/state/tourism/useReservationsStore.jsx";

const FinancialRecords = () => {
    const {reservations} = useReservationsStore();

    return (
        <div className="w-full flex flex-col items-center gap-6">
            <Header1 title={"السجل المالي"} align={"right"}/>
            {reservations?.map(({records}) =>
                records?.map((record) => (
                    <FinancialRecord record={record}/>
                ))
            )}
        </div>
    )
}
export default FinancialRecords
