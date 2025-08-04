import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/colors.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import useReservationStore from "../../application/state/reservation/useReservationStore.jsx";
import {useEffect} from "react";
import {useParams} from "react-router";
import Header from "../components/shared/Header.jsx";
import TableHead from "../components/reservation/TableHead.jsx";
import Reservation from "../components/reservation/Reservation.jsx";
import FinancialRecord from "../components/shared/FinancialRecord.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";
import {getReservation} from "../../application/useCases/reservations/getReservationUseCase.jsx";
import useReservationDetailsStore from "../../application/state/reservation/useReservationDetailsStore.jsx";
import {uploadInvoiceDocument} from "../../application/useCases/userPropertyInvoices/uploadDocumentUseCase.jsx";

const ReservationPage = () => {
    const {isLoading, setIsLoading} = useLoadingStore();
    const {reservation, setReservation} = useReservationStore();
    const {id} = useParams();

    useEffect(() => {
        const loadReservation = async () => {
            setIsLoading(true);

            try {
                const {success, response} = await getReservation(id);
                if (success) {
                    const data = response.data;
                    setReservation(data);
                } else {
                    setReservation(null);
                    alert(response);
                }
            } catch (error) {
                alert("حدث خطأ أثناء تحميل الحجز");
                setReservation(null);
            } finally {
                setIsLoading(false);
            }
        };

        loadReservation();
    }, [id]);


    if (isLoading || !reservation) return <Spinner/>;

    return (
        <div className="flex flex-col gap-2 mb-4">
            <Header title={'تفاصيل الحجز'}/>
            <div className="px-6 flex flex-col gap-6">
                <TableHead/>
                <Reservation reservation={reservation}/>
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
                    {reservation?.financial_records.map((item) => (
                        <FinancialRecord record={item} key={item.id} upload={uploadInvoiceDocument}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ReservationPage
