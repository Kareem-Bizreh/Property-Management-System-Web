import Header from "../components/shared/Header.jsx";
import TableHead from "../components/booking/TableHead.jsx";
import {useParams} from "react-router";
import img from "../../assets/cards/property_sale.jpg";
import Reservation from "../components/booking/Reservation.jsx";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/colors.jsx";
import FinancialRecord from "../components/shared/FinancialRecord.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";

const BookingPage = () => {
    const {isLoading} = useLoadingStore()
    const {id} = useParams();
    const reservation =
        {
            id: id,
            image: img,
            start_date: "2025-06-11",
            end_date: "2025-06-11",
            address: "بيت أبو العود",
            price: 320000,
            buyer: '0994778327',
            status: "محجوز",
            FinancialRecords: [
                {
                    id: 1,
                    date: "2025-06-11",
                    type: 'عربون',
                    paymentType: "دفع يدوي",
                    price: 320000,
                    status: 'تم الدفع',
                    document: 'https://userpic.codeforces.org/3060832/title/c773068ec0bb8654.jpg'
                },
                {
                    id: 2,
                    date: "2025-06-11",
                    type: 'شراء بيت',
                    paymentType: "دفع الكتروني",
                    price: 320000,
                    status: 'لم يتم الدفع',
                    document: ''
                }
            ]
        };

    return (
        <div className="flex flex-col gap-2 mb-4">
            <Header title={'تفاصيل الحجز'}/>
            <div className="px-6 flex flex-col gap-6">
                <TableHead/>
                <Reservation id={reservation.id} image={reservation.image} start_date={reservation.start_date}
                             end_date={reservation.end_date} price={reservation.price} buyer={reservation.buyer}
                             status={reservation.status} address={reservation.address}/>
            </div>
            <div className="w-full h-[8px] my-2" style={{backgroundColor: BACKGROUND_COLORS.filter}}/>
            <div className='px-6 flex flex-col gap-6'>
                <span className='pr-2'
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
                <div className="flex flex-col gap-4">
                    {reservation?.FinancialRecords.map((item) => (
                        <FinancialRecord record={item} key={item.id}/>
                    ))}
                </div>
            </div>
            {(isLoading ? (<Spinner/>) : null)}
        </div>
    )
}
export default BookingPage
