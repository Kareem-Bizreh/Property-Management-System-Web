import img from "../../../assets/cards/property_sale.jpg";
import Reservation from "./Reservation.jsx";
import {Link} from "react-router";
import TableHead from "./TableHead.jsx";

const Reservations = () => {
    return (
        <div className="w-full h-auto px-4 py-4 flex flex-col gap-8">
            <TableHead/>
            <div className="flex flex-col gap-4">
                {reservations.map((reservation, index) => (
                    <Link to={`${reservation.id}`} key={index}>
                        <Reservation id={reservation.id} image={reservation.image} start_date={reservation.start_date}
                                     end_date={reservation.end_date} price={reservation.price} buyer={reservation.buyer}
                                     status={reservation.status} address={reservation.address}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Reservations

const reservations = [
    {
        id: 1,
        image: img,
        start_date: "15-03-2024",
        end_date: "20-03-2024",
        address: "بيت أبو سعيد",
        price: 250000,
        buyer: 1001,
        status: "تم البيع"
    },
    {
        id: 2,
        image: img,
        start_date: "10-04-2024",
        end_date: "30-04-2024",
        address: "بيت ابو العود",
        price: 180000,
        buyer: 1002,
        status: "محجوز"
    },
    {
        id: 3,
        image: img,
        start_date: "05-05-2024",
        end_date: "15-05-2024",
        address: "بيت أبو ناصر",
        price: 320000,
        buyer: 1003,
        status: "تم الغاء البيع"
    },
    {
        id: 4,
        image: img,
        start_date: "22-06-2024",
        end_date: "30-06-2024",
        address: "بيت ابو سامر",
        price: 195000,
        buyer: 1004,
        status: "محجوز"
    },
    {
        id: 5,
        image: img,
        start_date: "01-07-2024",
        end_date: "10-07-2024",
        address: "بيت أبو محمد",
        price: 410000,
        buyer: 1005,
        status: "تم البيع"
    }
];