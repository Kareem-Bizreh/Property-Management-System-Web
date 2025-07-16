import TableHead from "./TableHead.jsx";
import FinancialRecord from "./FinancialRecord.jsx";

const FinancialRecords = () => {
    const financialRecords = [
        {
            id: 1,
            date: "2025-06-11",
            type: 'إعلان صوري',
            number: 1,
            price: 320000,
            status: 'تم الدفع',
            document: 'https://userpic.codeforces.org/3060832/title/c773068ec0bb8654.jpg'
        },
        {
            id: 2,
            date: "2025-06-11",
            type: 'إعلان ترويجي',
            number: 2,
            price: 320000,
            status: 'لم يتم الدفع',
            document: ''
        }
    ]

    return (
        <div className="flex flex-col px-6 py-2">
            <TableHead/>
            <div className="flex flex-col gap-4 mt-4">
                {financialRecords.map(record => (
                    <FinancialRecord key={record.id} record={record}/>
                ))}
            </div>
        </div>
    )
}
export default FinancialRecords
