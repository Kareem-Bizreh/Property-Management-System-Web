import TableHead from "../rentals/TableHead.jsx";
import {Link} from "react-router";
import Rental from "./Rental.jsx";
import useRentalsStore from "../../../application/state/rental/useRentalsStore.jsx";

const Rentals = () => {
    const {rentals} = useRentalsStore();
    return (
        <div className="w-full h-auto px-4 py-4 flex flex-col gap-8">
            <TableHead/>
            <div className="flex flex-col gap-4">
                {rentals.map((rental) => (
                    <Link to={`${rental.id}`} key={rental.id}>
                        <Rental rental={rental}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Rentals