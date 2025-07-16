import logo from '/logo.svg';
import {TEXT_COLORS} from "../../colors.jsx";

const LogoCard = ({ width, height, top, fontSize }) => {
    return (
        <div
            className="absolute flex flex-col items-center right-1/2 transform translate-x-1/2"
            style={{
                width: width,
                height: height,
                top: top,
                minHeight: height
            }}
        >
            <img
                src={logo}
                alt="App Logo"
                style={{
                    width: '80%',
                    height: 'auto',
                    maxHeight: '70%'
                }}
            />

            <p
                style={{
                    color: TEXT_COLORS['logo'],
                    fontFamily: 'Candal, sans-serif',
                    fontSize: fontSize,
                    marginTop: '12px',
                    flexShrink: 0
                }}
            >
                Name App
            </p>
        </div>
    )
}
export default LogoCard
