import Header from "./Header.jsx";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import Button from "@mui/material/Button";

const Logo = () => {
    const imgSrc = '';

    return (
        <div className="flex flex-col flex-1 justify-around items-center rounded-[25px] px-4 min-h-[300px]"
             style={{backgroundColor: BACKGROUND_COLORS.secondary2}}
        >
            <Header title={'شعار المكتب'} fontSize={'18px'}/>

            <div
                className="w-[200px] h-[200px] rounded-full flex-shrink-0"
                style={{
                    backgroundColor: BACKGROUND_COLORS['picture'],
                    borderColor: TEXT_COLORS['secondary'],
                    borderWidth: '1px',
                }}
            >
                {imgSrc && (
                    <img
                        src={imgSrc}
                        alt="profile"
                        className="w-full h-full rounded-full object-cover"
                    />
                )}
            </div>

            <Button variant="contained"
                // onClick={onPress}
                    sx={{
                        width: 160,
                        height: 47,
                        color: BACKGROUND_COLORS.app,
                        backgroundColor: BACKGROUND_COLORS.primary,
                        borderRadius: '25px',
                        fontWeight: 700,
                        fontSize: '16px',
                        lineHeight: '100%',
                        letterSpacing: '3%',
                        textAlign: 'center'
                    }}>
                رفع
            </Button>
        </div>
    )
}
export default Logo
