import {TEXT_COLORS} from "../../../shared/constants/colors.jsx";

const Header1 = ({title, align}) => {
    return (
        <div
            className="w-full px-6 py-3"
            style={{
                color: TEXT_COLORS.primary,
                fontFamily: 'Cairo',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '3%',
                textAlign: align,
            }}
        >
            {title}
        </div>
    )
}
export default Header1
