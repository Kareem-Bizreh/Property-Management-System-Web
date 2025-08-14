import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import {formatPrice} from "../../../../shared/shared/utils/formatPrice.js";
import {formatDate} from "../../../../shared/shared/utils/formatDate.js";
import useLoadingStore from "../../../../shared/application/state/useLoadingStore.jsx";
import {Spinner} from "../../../../shared/presentation/components/Spinner.jsx";
import img from "../../../../shared/assets/cards/property_sale.jpg";

const Reservation = ({reservation}) => {
    const {isLoading} = useLoadingStore();

    if (isLoading) return <Spinner/>;

    return (
        <div className="min-h-[158px] h-auto rounded-[25px] flex flex-row flex-wrap justify-between items-center gap-6"
             style={{
                 backgroundColor: BACKGROUND_COLORS.filter,
                 color: TEXT_COLORS.primary,
                 fontFamily: 'Cairo',
                 fontWeight: 700,
                 fontSize: '16px',
                 lineHeight: '18px',
                 letterSpacing: '3%',
                 textAlign: 'center'
             }}
        >
            <span className="w-[73px] h-[20px]">{reservation.id}</span>
            <img
                className="w-[133px] h-[125px] object-cover rounded-[25px]"
                alt="صورة العقار"
                src={reservation.image_url || img}
            />
            <span className="w-[110px] h-[20px] whitespace-nowrap">{formatDate(reservation.created_at)}</span>
            <div className="w-[170px] h-full flex flex-col gap-2">
                <span>{reservation.title}</span>
                <span>{reservation.location}</span>
            </div>


            <span className="w-[170px] h-[20px]">{reservation.buyer_phone}</span>
            <span className="w-[110px] h-[20px]">{formatPrice(reservation.selling_price)} $</span>
            <div className="flex flex-col items-center justify-center h-[56px] w-[144px] gap-4">
                <span
                    style={{
                        color: (reservation.status === 'محجوز' ? TEXT_COLORS.reserved :
                            (reservation.status === 'تم البيع' ? TEXT_COLORS.sold : TEXT_COLORS.cancelled))
                    }}>{reservation.status}
                </span>
                {reservation.status === 'محجوز' && <span>{formatDate(reservation.end_booking)}</span>}
            </div>
        </div>
    )
}
export default Reservation