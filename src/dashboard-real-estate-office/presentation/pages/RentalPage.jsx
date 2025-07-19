import {useParams} from "react-router";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/colors.jsx";
import img from "../../assets/cards/property_sale.jpg";
import Header from "../components/shared/Header.jsx";
import TableHead from "../components/rentals/TableHead.jsx";
import FinancialRecord from "../components/shared/FinancialRecord.jsx";
import Rental from "../components/rentals/Rental.jsx";
import ContractExtension from "../components/rentals/ContractExtension.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";

const RentalPage = () => {
    const {isLoading} = useLoadingStore()
    const {id} = useParams();
    const rental =
        {
            id: id,
            image: img,
            start_date: "2025-06-11",
            end_date: "2025-06-11",
            address: "بيت أبو العود",
            buyer: '0994778327',
            status: "محجوز",
            FinancialRecords: [
                {
                    id: 1,
                    date: "2025-06-11",
                    type: 'إيجار',
                    paymentType: "دفع يدوي",
                    price: 320000,
                    status: 'تم الدفع',
                    document: 'https://userpic.codeforces.org/3060832/title/c773068ec0bb8654.jpg'
                },
                {
                    id: 2,
                    date: "2025-06-11",
                    type: 'إيجار',
                    paymentType: "دفع الكتروني",
                    price: 320000,
                    status: 'لم يتم الدفع',
                    document: ''
                }
            ]
        };

    return (
        <div className="flex flex-col gap-2 mb-4">
            <Header title={'تفاصيل الإيجار'}/>
            <div className="px-6 flex flex-col gap-6">
                <TableHead/>
                <Rental id={rental.id} image={rental.image} start_date={rental.start_date}
                        end_date={rental.end_date} buyer={rental.buyer}
                        status={rental.status} address={rental.address}/>
            </div>
            <div className="w-full h-[8px] my-2" style={{backgroundColor: BACKGROUND_COLORS.filter}}/>
            <div className='px-6 flex flex-col gap-6'>
                <div className="flex flex-row flex-wrap px-2">
                    <span className='flex-1'
                          style={{
                              color: TEXT_COLORS.primary,
                              fontFamily: 'Cairo',
                              fontWeight: 700,
                              fontSize: '24px',
                              lineHeight: '100%',
                              letterSpacing: '3%',
                              textAlign: 'right',
                          }}
                    >
                        السجل المالي
                    </span>
                    <ContractExtension/>
                </div>
                <div className="flex flex-col gap-4">
                    {rental?.FinancialRecords.map((item) => (
                        <FinancialRecord record={item} key={item.id}/>
                    ))}
                </div>
            </div>
            {(isLoading ? (<Spinner/>) : null)}
        </div>
    )
}
export default RentalPage
