import {BACKGROUND_COLORS} from "../../../../shared/colors.jsx";
import SearchBar from "../../../../shared/presentation/components/SearchBar.jsx";
import SelectInput from "../../../../shared/presentation/components/SelectInput.jsx";
import useCityStore from "../../../application/state/service-provider/useCityStore.jsx";
import useRegionStore from "../../../application/state/service-provider/useRegionStore.jsx";
import useTypeStore from "../../../application/state/service-provider/useTypeStore.jsx";
import {SyrianGovernorates} from "../../../../shared/shared/constants/syrianGovernorates.jsx";
import {ServiceProviderType} from "../../../shared/constants/ServiceProviderType.jsx";

const Filter = ({register}) => {
    const {city, setCity} = useCityStore();
    const {regions, setRegions, region, setRegion} = useRegionStore();
    const {type, setType} = useTypeStore();

    const handleCityChange = (cityName) => {
        const selectedGovernorate = SyrianGovernorates.find((gov) => gov.name === cityName);
        setCity(cityName);
        setRegions(selectedGovernorate?.regions || []);
        setRegion(null);
    };

    return (
        <div
            className="w-full py-4 px-2 md:px-4"
            style={{backgroundColor: BACKGROUND_COLORS.filter}}
        >
            <div className="flex flex-wrap gap-4 md:gap-6 items-center" style={{minHeight: "48px"}}>
                <div className="flex flex-1 flex-wrap gap-4 md:gap-6">
                    {/*<SearchBar register={register}/>*/}
                    <SelectInput
                        key={1}
                        title={city || "المحافظة"}
                        options={["إلغاء", ...SyrianGovernorates.map((gov) => gov.name)]}
                        maxWidth={"124px"}
                        height={"48px"}
                        onChange={handleCityChange}
                    />
                    <SelectInput
                        key={city}
                        title={region || "المنطقة"}
                        options={["إلغاء", ...regions.map((reg) => reg.name)]}
                        maxWidth={"124px"}
                        height={"48px"}
                        onChange={setRegion}
                    />
                    <SelectInput
                        key={2}
                        title={type || "الخدمة"}
                        options={["إلغاء", ...ServiceProviderType]}
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
