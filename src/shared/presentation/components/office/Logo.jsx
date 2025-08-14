import Header from "../../../../dashboard-real-estate-office/presentation/components/officeInfo/Header.jsx";
import {BACKGROUND_COLORS, TEXT_COLORS} from "../../../colors.jsx";
import Button from "@mui/material/Button";
import {useRef} from "react";

const Logo = ({office, setOffice, name, readOnly = false}) => {
    const inputRef = useRef(null);

    const handleUploadClick = () => {
        inputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setOffice({...office, image: file});
        }
    };

    return (
        <div className="flex flex-col flex-1 justify-around items-center rounded-[25px] p-4 min-h-[300px] max-h-[390px]"
             style={{backgroundColor: BACKGROUND_COLORS.secondary2}}
        >
            <Header title={`شعار ${name}`} fontSize={'18px'}/>

            <div
                className="w-[200px] h-[200px] rounded-full flex-shrink-0"
                style={{
                    backgroundColor: BACKGROUND_COLORS['picture'],
                    borderColor: TEXT_COLORS['secondary'],
                    borderWidth: '1px',
                }}
            >
                {office?.image && (
                    <img
                        src={typeof office.image === 'string' ? office.image : URL.createObjectURL(office.image)}
                        alt="profile"
                        className="w-full h-full rounded-full object-cover object-center"
                    />
                )}
            </div>

            {readOnly ||
                <Button
                    variant="contained"
                    onClick={handleUploadClick}
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
                    }}
                >
                    رفع
                </Button>
            }
            <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleFileChange}
                style={{display: 'none'}}
            />
        </div>
    )
}
export default Logo
