import {BACKGROUND_COLORS} from "../../../shared/constants/colors.jsx";
import Header1 from "./Header1.jsx";
import PropertyLocation from "./PropertyLocation.jsx";
import GeneralDetails from "./GeneralDetails.jsx";
import RoomDetails from "../shared/RoomDetails.jsx";
import PaymentDetails from "../myProperties/PaymentDetails.jsx";

const PropertyDetails = () => {
    return (
        <div
            className="relative h-auto rounded-[15px] flex flex-col gap-8"
            style={{backgroundColor: BACKGROUND_COLORS.secondary2}}
        >
            <div className="mt-2 -mb-4">
                <Header1 title={"تفاصيل العقار"} align={'right'}/>
            </div>
            <div className='flex flex-col mx-8 mb-4'>
                <PropertyLocation/>
                <GeneralDetails />
                <RoomDetails />
                <PaymentDetails />
            </div>
        </div>
    )
}
export default PropertyDetails
