import {BACKGROUND_COLORS} from "../../../../shared/colors.jsx";
import SelectInput from "../shared/SelectInput.jsx";
import PropertyRental from "./PropertyRental.jsx";
import {SyrianGovernorates} from "../../../shared/constants/syrianGovernorates.jsx";
import useCityStore from "../../../application/state/rental/useCityStore.jsx";
import useRegionStore from "../../../application/state/rental/useRegionStore.jsx";
import useStatusStore from "../../../application/state/rental/useStatusStore.jsx";
import {RentalStatus} from "../../../shared/constants/RentalsStatus.jsx";
import Button from "@mui/material/Button";
import usePropertyRentalOpenStore from "../../../application/state/rental/usePropertyRentalOpenStore.jsx";
import useRentalDetailsStore from "../../../application/state/rental/useRentalDetailsStore.jsx";
import usePropertyStore from "../../../application/state/property/usePropertyStore.jsx";

const Filter = () => {
    const {city, setCity} = useCityStore();
    const {regions, setRegions, region, setRegion} = useRegionStore();
    const {status, setStatus} = useStatusStore();
    const {setIsOpen, isOpen} = usePropertyRentalOpenStore();
    const {resetRentalDetails} = useRentalDetailsStore();
    const {setProperty} = usePropertyStore();

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
                        options={["إلغاء", ...RentalStatus]}
                        maxWidth={"124px"}
                        height={"48px"}
                        onChange={setStatus}
                    />
                </div>
                <Button
                    onClick={() => {
                        resetRentalDetails()
                        setIsOpen(true)
                        setProperty(null)
                    }}
                    variant="contained"
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
                    تأجير عقار
                </Button>
                {isOpen && <PropertyRental/>}
            </div>
        </div>
    )
}
export default Filter
