import {BACKGROUND_COLORS} from "../../../shared/constants/colors.jsx";
import SelectInput from "../shared/SelectInput.jsx";

const Filter = () => {
    return (
        <div
            className="w-full py-4 px-6"
            style={{backgroundColor: BACKGROUND_COLORS.filter}}
        >
            <div className="flex flex-wrap gap-4 md:gap-6 items-center" style={{minHeight: "48px"}}>
                <div className="flex flex-1 flex-wrap gap-4 md:gap-6">
                    <SelectInput
                        title="المحافظة"
                        options={[]}
                        maxWidth={'124px'}
                        height={'48px'}
                    />
                    <SelectInput
                        title="المنطقة"
                        options={[]}
                        maxWidth={'124px'}
                        height={'48px'}
                    />
                    <SelectInput
                        title="النوع"
                        options={['بيع', 'إيجار']}
                        maxWidth={'124px'}
                        height={'48px'}
                    />
                    <SelectInput
                        title="الأحدث"
                        options={['الأحدث', 'الأقدم']}
                        maxWidth={'124px'}
                        height={'48px'}
                    />
                </div>
            </div>
        </div>
    )
}
export default Filter
