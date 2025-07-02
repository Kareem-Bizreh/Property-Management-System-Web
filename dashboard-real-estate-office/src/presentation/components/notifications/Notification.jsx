import bell from '../../../assets/notifications/bell-ringing.svg'
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";
import {formatDate} from "../../../shared/utils/formatDate.js";

const Notification = ({notification: {id, date, source, title, description}}) => {
    return (
        <div className="flex flex-row flex-wrap justify-around items-center rounded-[25px] min-h-[85px] gap-6 p-4"
             key={id}
             style={{
                 color: TEXT_COLORS.primary,
                 backgroundColor: BACKGROUND_COLORS.notification,
                 fontFamily: 'Cairo',
                 fontWeight: 700,
                 fontSize: '16px',
                 lineHeight: '100%',
                 letterSpacing: '3%',
                 textAlign: 'center',
             }}
        >
            <img src={bell} alt="notification" className="w-[24px] h-[24px]"/>

            <span className="w-[130px]">{formatDate(date)}</span>

            <span className="w-[150px]">{source}</span>

            <span className="w-[200px]">{title}</span>

            <span className="w-[400px] h-full" style={{lineHeight: '1.5'}}>{description}</span>
        </div>
    )
}
export default Notification
