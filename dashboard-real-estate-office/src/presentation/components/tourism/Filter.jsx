import {BACKGROUND_COLORS} from "../../../shared/constants/colors.jsx";
import SearchBar from "../shared/SearchBar.jsx";
import SelectInput from "../shared/SelectInput.jsx";

const Filter = () => {
    return (
        <div
            className="w-full py-4 px-2 md:px-4"
            style={{ backgroundColor: BACKGROUND_COLORS.filter }}
        >
            <div
                className="flex flex-wrap gap-4 md:gap-6 items-center"
                style={{ minHeight: "48px" }}
            >
                <SearchBar />
                <SelectInput
                    title="المنطقة"
                    options={[]}
                    maxWidth={'124px'}
                    height={'48px'}
                />
                <SelectInput
                    title="حالة"
                    options={[
                        'محجوز', 'تم التأجير', 'تم البيع',
                        'غير متوفر', 'متوفر', 'في الصيانة',
                        'قيد الإنتظار', 'مرفوض'
                    ]}
                    maxWidth={'124px'}
                    height={'48px'}
                />
            </div>
        </div>
    )
}
export default Filter
