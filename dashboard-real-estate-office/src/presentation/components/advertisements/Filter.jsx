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
                        title="نوع الإعلان"
                        options={['إعلان صوري', 'إعلان ترويجي']}
                        maxWidth={'130px'}
                        height={'48px'}
                    />
                </div>
            </div>
        </div>
    )
}
export default Filter
