import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../../shared/colors.jsx";
import upload from '../../../assets/shared/image-up.svg'
import Button from "@mui/material/Button";
import trash from "../../../assets/shared/trash.svg";

const UploadImage = ({title, image, readOnly}) => {
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
            {(!image || image.length === 0) ? (<div className="relative w-full h-[192px] rounded-[8px]"
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
                                disabled={readOnly}
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
                </div>) :
                (
                    <div className="relative w-[192px] h-[192px] right-1/2 transform translate-x-1/2">
                        <img
                            className="w-full h-full object-cover rounded-[18px]"
                            src={image}
                        />
                        {!readOnly && (<div className="absolute bottom-2 left-2 w-[43px] h-[43px] rounded-[15px] border-[1px] bg-[#FEC7C3]
                                            transition-colors duration-200 cursor-pointer custom-hover"
                                            style={{
                                                '--hover-bg': 'white',
                                                borderColor: BACKGROUND_COLORS.unavailable,
                                                opacity: 0.8
                                            }}
                            // onClick={onDelete}
                        >
                            <img
                                className="absolute object-cover right-1/2 transform translate-x-1/2 top-1/2 -translate-y-1/2"
                                src={trash}
                            />
                        </div>)}
                    </div>
                )
            }
        </div>
    )
}
export default UploadImage
