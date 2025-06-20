import {BACKGROUND_COLORS} from "../../../shared/constants/colors.jsx";
import SearchBar from "../shared/SearchBar.jsx";
import SelectInput from "../shared/SelectInput.jsx";
import Button from "@mui/material/Button";

const Filter = () => {
    return (
        <div
            className="w-full py-4 px-2 md:px-4"
            style={{ backgroundColor: BACKGROUND_COLORS.filter }}
        >
            <div className="flex flex-wrap gap-4 md:gap-6 items-center" style={{ minHeight: "48px" }}>
                <div className="flex flex-1 flex-wrap gap-4 md:gap-6">
                    <SearchBar />
                    <SelectInput
                        title="المنطقة"
                        options={[]}
                        maxWidth={'124px'}
                        height={'48px'}
                    />
                    <SelectInput
                        title="حالة"
                        options={['محجوز', 'تم إلغاء البيع', 'تم البيع']}
                        maxWidth={'124px'}
                        height={'48px'}
                    />
                </div>
                <Button variant="contained"
                        sx={{
                            width: 163,
                            height: 46,
                            backgroundColor: BACKGROUND_COLORS.card,
                            borderRadius: '15px',
                            fontWeight: 700,
                            fontSize: '16px',
                            lineHeight: '100%',
                            letterSpacing: '3%',
                            textAlign: 'center'
                        }}>
                    حجز عقار
                </Button>
            </div>
        </div>
    )
}
export default Filter
