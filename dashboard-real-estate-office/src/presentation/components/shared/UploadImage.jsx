import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";
import upload from '../../../assets/shared/image-up.svg'
import Button from "@mui/material/Button";

const UploadImage = ({title}) => {
    return (
        <div className="relative w-[252px] flex flex-col h-full gap-4">
            <span
                style={{
                    color: TEXT_COLORS.secondary,
                    fontFamily: 'Cairo',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '3%',
                    textAlign: 'center',
                }}
            >
                {title}
            </span>
            <div className="relative w-full h-[192px] rounded-[8px]"
                 style={{
                     backgroundColor: BACKGROUND_COLORS.upload,
                     border: `2px dashed ${BACKGROUND_COLORS.button}`,
                 }}
            >
                <div className="relative w-full h-[115px] top-[30px] flex flex-col justify-between items-center">
                    <img
                        className="w-[44.5px] h-[44.5px]"
                        alt={'upload'}
                        src={upload}
                    />
                    <Button variant="contained"
                            // onClick={onPress}
                            sx={{
                                width: 123,
                                height: 37,
                                backgroundColor: BACKGROUND_COLORS.button,
                                borderWidth: '1px',
                                borderRadius: '6px',
                                fontWeight: 700,
                                fontSize: '16px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                textAlign: 'center',
                                textTransform: 'capitalize'
                            }}>
                        ارفع صورة
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default UploadImage
