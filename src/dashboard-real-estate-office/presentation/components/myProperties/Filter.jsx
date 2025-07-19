import {BACKGROUND_COLORS} from "../../../../shared/colors.jsx";
import SearchBar from "../shared/SearchBar.jsx";
import SelectInput from "../shared/SelectInput.jsx";
import {STATUS_OPTIONS} from "../../../shared/constants/statusOptions.jsx";
import {LISTING_TYPE_OPTIONS} from "../../../shared/constants/listingTypeOptions.jsx";
import {SyrianGovernorates} from "../../../shared/constants/syrianGovernorates.jsx";
import useCityStore from "../../../application/state/residentialOffice/useCityStore.jsx";
import useRegionStore from "../../../application/state/residentialOffice/useRegionStore.jsx";
import useListingTypeStore from "../../../application/state/residentialOffice/useListingTypeStore.jsx";
import useStatusStore from "../../../application/state/residentialOffice/useStatusStore.jsx";

const Filter = ({register}) => {
    const {city, setCity} = useCityStore();
    const {regions, setRegions, region, setRegion} = useRegionStore();
    const {listingType, setListingType} = useListingTypeStore();
    const {status, setStatus} = useStatusStore();

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
            <div
                className="flex flex-wrap gap-4 md:gap-6 items-center"
                style={{minHeight: "48px"}}
            >
                <SearchBar register={register}/>
                <SelectInput
                    key={0}
                    title={listingType || "النوع"}
                    options={["إلغاء", ...LISTING_TYPE_OPTIONS]}
                    maxWidth={"124px"}
                    height={"48px"}
                    onChange={setListingType}
                />
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
                    title={status || "حالة"}
                    options={["إلغاء", ...STATUS_OPTIONS]}
                    maxWidth={"124px"}
                    height={"48px"}
                    onChange={setStatus}
                />
            </div>
        </div>
    );
};

export default Filter;
