import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";

const Header = ({title}) => {
    return (
        <div className="relative w-full h-[95px]">
            <span className="absolute p-6 h-full"
                style={{
                    backgroundColor: BACKGROUND_COLORS.app,
                    color: TEXT_COLORS.firstThree,
                    fontFamily: 'Cairo',
                    fontWeight: '700',
                    fontSize: '32px',
                    letterSpacing: '3%',
                    lineHeight: '100%',
                    textAlign: 'center',
                }}
            >
                {title}
            </span>
        </div>
    )
}
export default Header
