import logo from '/logo.svg';
import {TEXT_COLORS} from "../../colors.jsx";

const LogoCard = ({width, height, top, fontSize}) => {
    return (
        <div
            className="absolute flex flex-col items-center right-1/2 transform translate-x-1/2"
            style={{width: width, height: height, top: top, minHeight: height}}
        >
            <img src={logo} alt="App Logo" className="select-none w-[80%] max-h-[70%] h-auto"/>

            <p
                style={{
                    color: TEXT_COLORS['logo'],
                    fontFamily: 'Candal, sans-serif',
                    fontSize: fontSize,
                    marginTop: '12px',
                    flexShrink: 0
                }}
            >
                {import.meta.env.VITE_APP_NAME}
            </p>
        </div>
    )
}
export default LogoCard
