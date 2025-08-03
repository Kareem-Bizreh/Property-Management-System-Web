import {BACKGROUND_COLORS} from "../../../../shared/colors.jsx";
import SelectInput from "../shared/SelectInput.jsx";
import useCityStore from "../../../application/state/reservation/useCityStore.jsx";
import useRegionStore from "../../../application/state/reservation/useRegionStore.jsx";
import useStatusStore from "../../../application/state/reservation/useStatusStore.jsx";
import {SyrianGovernorates} from "../../../shared/constants/syrianGovernorates.jsx";
import {PurchaseStatus} from "../../../shared/constants/PurchaseStatus.jsx";
import usePropertyReservationOpenStore
    from "../../../application/state/reservation/usePropertyReservationOpenStore.jsx";
import Button from "@mui/material/Button";
import PropertyReservation from "./PropertyReservation.jsx";
import useReservationDetailsStore from "../../../application/state/reservation/useReservationDetailsStore.jsx";
import usePropertyStore from "../../../application/state/property/usePropertyStore.jsx";

const Filter = () => {
    const {city, setCity} = useCityStore();
    const {regions, setRegions, region, setRegion} = useRegionStore();
    const {status, setStatus} = useStatusStore();
    const {setIsOpen} = usePropertyReservationOpenStore();
    const {resetReservationDetails} = useReservationDetailsStore();
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
            <div className="flex flex-wrap gap-4 md:gap-6 items-center min-h-[48px]">
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
                        options={["إلغاء", ...PurchaseStatus]}
                        maxWidth={"124px"}
                        height={"48px"}
                        onChange={setStatus}
                    />
                </div>
                <Button
                    variant="contained"
                    onClick={() => {
                        setIsOpen(true)
                        resetReservationDetails()
                        setProperty(null)
                    }}
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
                <PropertyReservation/>
            </div>
        </div>
    )
}
export default Filter
