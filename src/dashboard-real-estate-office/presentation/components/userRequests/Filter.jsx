import {BACKGROUND_COLORS} from "../../../../shared/colors.jsx";
import SelectInput from "../shared/SelectInput.jsx";
import useRegionStore from "../../../application/state/userPost/useRegionStore.jsx";
import useTypeStore from "../../../application/state/userPost/useTypeStore.jsx";
import {UserPostTypes} from "../../../shared/constants/UserPostTypes.jsx";

const Filter = () => {
    const {regions, region, setRegion} = useRegionStore();
    const {type, setType} = useTypeStore();

    return (
        <div
            className="w-full py-4 px-6"
            style={{backgroundColor: BACKGROUND_COLORS.filter}}
        >
            <div className="flex flex-wrap gap-4 md:gap-6 items-center" style={{minHeight: "48px"}}>
                <div className="flex flex-1 flex-wrap gap-4 md:gap-6">
                    <SelectInput
                        key={1}
                        title={region || "المنطقة"}
                        options={["إلغاء", ...regions.map((reg) => reg.name)]}
                        maxWidth={"124px"}
                        height={"48px"}
                        onChange={setRegion}
                    />
                    <SelectInput
                        key={2}
                        title={type || "نوع"}
                        options={["إلغاء", ...UserPostTypes]}
                        maxWidth={"124px"}
                        height={"48px"}
                        onChange={setType}
                    />
                </div>
            </div>
        </div>
    )
}
export default Filter
