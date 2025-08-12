import {BACKGROUND_COLORS} from "../../../../shared/colors.jsx";
import SelectInput from "../../../../shared/presentation/components/SelectInput.jsx";
import useTypeStore from "../../../application/state/advertisement/useTypeStore.jsx";
import {AdType} from "../../../shared/constants/AdType.jsx";

const Filter = () => {
    const {type, setType} = useTypeStore()

    return (
        <div
            className="w-full py-4 px-6"
            style={{backgroundColor: BACKGROUND_COLORS.filter}}
        >
            <div className="flex flex-wrap gap-4 md:gap-6 items-center" style={{minHeight: "48px"}}>
                <div className="flex flex-1 flex-wrap gap-4 md:gap-6">
                    <SelectInput
                        key={2}
                        title={type || "نوع"}
                        options={["إلغاء", ...AdType]}
                        maxWidth={"160px"}
                        height={"48px"}
                        onChange={setType}
                    />
                </div>
            </div>
        </div>
    )
}
export default Filter
