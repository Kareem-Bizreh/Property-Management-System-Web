import Reservation from "./Reservation.jsx";
import {Link} from "react-router";
import TableHead from "../../../../shared/presentation/components/TableHead.jsx";
import useReservationsStore from "../../../application/state/reservation/useReservationsStore.jsx";

const Reservations = () => {
    const {reservations} = useReservationsStore();
    return (
        <div className="w-full h-auto px-4 py-4 flex flex-col gap-8">
            <TableHead titles={titles}/>
            <div className="flex flex-col gap-4">
                {reservations.map((reservation, index) => (
                    <Link to={`${reservation.id}`} key={index}>
                        <Reservation reservation={reservation}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Reservations

const titles = [
    {name: 'ID', width: '73px'},
    {name: 'صورة', width: '133px'},
    {name: 'تاريخ الحجز', width: '110px'},
    {name: 'العنوان', width: '170px'},
    {name: 'المشتري', width: '170px'},
    {name: 'المبلغ', width: '110px'},
    {name: 'الحالة', width: '144px'}
];