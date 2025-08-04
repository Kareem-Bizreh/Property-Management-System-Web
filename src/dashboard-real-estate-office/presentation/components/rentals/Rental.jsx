import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import {formatDate} from "../../../shared/utils/formatDate.js";

const Rental = ({rental: {id, imageUrl, startDate, endDate, location, title, phone, status}}) => {
    return (
        <div
            className="min-h-[158px] h-auto rounded-[25px] flex flex-row flex-wrap justify-between items-center gap-6 p-4"
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
                src={imageUrl}
            />
            <span className="min-w-[110px] h-[20px]">{formatDate(startDate)}</span>
            <div className="w-[170px] h-full flex flex-col gap-2">
                <span>{title}</span>
                <span>{location}</span>
            </div>
            <span className="min-w-[140px] h-[20px]">{phone}</span>
            <span className="min-w-[110px] h-[20px]">{formatDate(endDate)}</span>
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
