import {TEXT_COLORS} from "../../../shared/constants/colors.jsx";

const Header = ({title, fontSize}) => {
    return (
        <span
            style={{
                color: TEXT_COLORS.firstThree,
                fontFamily: 'Cairo',
                fontWeight: '700',
                fontSize,
                letterSpacing: '3%',
                lineHeight: '100%',
                textAlign: 'center',
            }}
        >
            {title}
        </span>
    )
}
export default Header
