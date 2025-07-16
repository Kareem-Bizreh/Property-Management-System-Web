import TableHead from "../rentals/TableHead.jsx";
import {Link} from "react-router";
import Rental from "./Rental.jsx";
import img from "../../../assets/cards/property_sale.jpg";

const Rentals = () => {
    return (
        <div className="w-full h-auto px-4 py-4 flex flex-col gap-8">
            <TableHead/>
            <div className="flex flex-col gap-4">
                {rentals.map((rental, index) => (
                    <Link to={`${rental.id}`} key={index}>
                        <Rental id={rental.id} image={rental.image} start_date={rental.start_date}
                                     end_date={rental.end_date} buyer={rental.buyer}
                                     status={rental.status} address={rental.address}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Rentals

const rentals = [
    {
        id: 1,
        image: img,
        start_date: "15-03-2024",
        end_date: "20-03-2024",
        address: "بيت أبو سعيد",
        buyer: '0990000000',
        status: "تم البيع"
    },
    {
        id: 2,
        image: img,
        start_date: "10-04-2024",
        end_date: "30-04-2024",
        address: "بيت ابو العود",
        buyer: '0990000000',
        status: "محجوز"
    },
    {
        id: 3,
        image: img,
        start_date: "05-05-2024",
        end_date: "15-05-2024",
        address: "بيت أبو ناصر",
        buyer: '0990000000',
        status: "تم الغاء البيع"
    },
    {
        id: 4,
        image: img,
        start_date: "22-06-2024",
        end_date: "30-06-2024",
        address: "بيت ابو سامر",
        buyer: '0990000000',
        status: "محجوز"
    },
    {
        id: 5,
        image: img,
        start_date: "01-07-2024",
        end_date: "10-07-2024",
        address: "بيت أبو محمد",
        buyer: '0990000000',
        status: "تم البيع"
    }
];