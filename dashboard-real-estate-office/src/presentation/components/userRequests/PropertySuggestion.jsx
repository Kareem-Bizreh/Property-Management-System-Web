import Button from "@mui/material/Button";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../shared/constants/colors.jsx";
import Header from "../shared/Header.jsx";
import Popup from "reactjs-popup";

const PropertySuggestion = () => {
    return (
        <Popup
            trigger={
                <Button variant="contained"
                        sx={{
                            width: 110,
                            height: 46,
                            backgroundColor: BACKGROUND_COLORS.primary,
                            borderRadius: '25px',
                            fontWeight: 700,
                            fontSize: '18px',
                            lineHeight: '100%',
                            letterSpacing: '3%',
                            textAlign: 'center'
                        }}>
                    إقتراح
                </Button>
            }
            modal
            nested
            closeOnDocumentClick
            contentStyle={{
                width: '550px',
                height: '460px',
                borderRadius: '90px',
                backgroundColor: BACKGROUND_COLORS.app,
                padding: '20px',
            }}
        >
            {(close) => (
                <div className="flex flex-col items-center justify-between h-full"
                     style={{
                         color: TEXT_COLORS.secondary,
                         fontFamily: 'Cairo',
                         fontWeight: 700,
                         fontSize: '18px',
                         lineHeight: '100%',
                         letterSpacing: '3%',
                         // textAlign: 'center',
                     }}
                >
                    <div className="w-[200px] -mt-4 mr-6">
                        <Header title={'إقتراح عقار'}/>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span>إختر العقار</span>
                        <div className="w-[383px] h-[120px] flex items-center justify-center">
                            <Button variant="contained"
                                    sx={{
                                        width: 123,
                                        height: 40,
                                        backgroundColor: BACKGROUND_COLORS.button,
                                        borderRadius: '6px',
                                        fontWeight: 700,
                                        fontSize: '16px',
                                        lineHeight: '100%',
                                        letterSpacing: '3%',
                                        textAlign: 'center'
                                    }}>
                                اختيار
                            </Button>
                            {/*<div className="bg-[#EFF4F6] w-full h-full rounded-[8px]"/>*/}
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-6 mb-2">
                        <Button variant="contained"
                                onClick={close}
                                sx={{
                                    width: 160,
                                    height: 47,
                                    color: BACKGROUND_COLORS.primary,
                                    backgroundColor: BACKGROUND_COLORS.secondary1,
                                    borderRadius: '25px',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    lineHeight: '100%',
                                    letterSpacing: '3%',
                                    textAlign: 'center'
                                }}>
                            إلغاء
                        </Button>
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
                            إقتراح
                        </Button>
                    </div>
                </div>
            )}
        </Popup>
    )
}
export default PropertySuggestion
