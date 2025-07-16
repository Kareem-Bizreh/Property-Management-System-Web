import {BACKGROUND_COLORS} from "../../../../shared/colors.jsx";
import SearchBar from "../shared/SearchBar.jsx";
import SelectInput from "../shared/SelectInput.jsx";
import PropertyRental from "./PropertyRental.jsx";

const Filter = () => {
    return (
        <div
            className="w-full py-4 px-2 md:px-4"
            style={{backgroundColor: BACKGROUND_COLORS.filter}}
        >
            <div className="flex flex-wrap gap-4 md:gap-6 items-center" style={{minHeight: "48px"}}>
                <div className="flex flex-1 flex-wrap gap-4 md:gap-6">
                    <SearchBar/>
                    <SelectInput
                        title="المنطقة"
                        options={[]}
                        maxWidth={'124px'}
                        height={'48px'}
                    />
                    <SelectInput
                        title="حالة"
                        options={['مؤجر', 'تم إلغاء العقد', 'انتهى الإيجار']}
                        maxWidth={'124px'}
                        height={'48px'}
                    />
                </div>
                <PropertyRental/>
            </div>
        </div>
    )
}
export default Filter
