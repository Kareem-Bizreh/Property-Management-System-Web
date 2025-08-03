import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import {formatDate} from "../../../shared/utils/formatDate.js";

const Rental = ({rental: {id, image, start_date, end_date, address, buyer, status}}) => {
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
            <span className="min-w-[73px] h-[20px]">{id}</span>
            <img
                className="w-[133px] h-[125px] object-cover rounded-[25px]"
                alt="صورة العقار"
                src={image}
            />
            <span className="min-w-[110px] h-[20px]">{formatDate(start_date)}</span>
            <span className="min-w-[140px] h-[20px]">{address}</span>
            <span className="min-w-[140px] h-[20px]">{buyer}</span>
            <span className="min-w-[110px] h-[20px]">{formatDate(end_date)}</span>
            <span className="min-w-[140px] h-[20px]"
                  style={{
                      color: status === 'مؤجر' ? TEXT_COLORS.sold : TEXT_COLORS.cancelled
                  }}
            >
                {status}
            </span>
        </div>
    )
}
export default Rental
