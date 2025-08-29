import TableHead from "./TableHead.jsx";
import FinancialRecord from "./FinancialRecord.jsx";
import useAdvertisementsStore from "../../../application/state/advertisement/useAdvertisementsStore.jsx";

const FinancialRecords = () => {
    const {advertisements} = useAdvertisementsStore()

    return (
        <div className="flex flex-col px-6 py-2">
            <TableHead/>
            <div className="flex flex-col gap-4 mt-4">
                {advertisements?.map(record => (
                    <FinancialRecord key={record.id} record={record}/>
                ))}
            </div>
        </div>
    )
}
export default FinancialRecords
