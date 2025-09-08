import {TEXT_COLORS} from "../../../../shared/colors.jsx";

const Header2 = ({title}) => {
    return (
        <span
            style={{
                color: TEXT_COLORS.primary,
                fontFamily: 'Cairo',
                fontWeight: '600',
                fontSize: '22px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'right',
                verticalAlign: 'middle',
            }}
        >
            {title}
        </span>
    )
}
export default Header2
