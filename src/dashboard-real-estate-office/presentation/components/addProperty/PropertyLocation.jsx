import Header2 from "./Header2.jsx";
import {TEXT_COLORS} from "../../../../shared/colors.jsx";
import SelectInput from "../../../../shared/presentation/components/SelectInput.jsx";
import TextInput from "../../../../shared/presentation/components/TextInput.jsx";
import map from "../../../../shared/assets/shared/map-marker.svg";
import {useFormContext} from "react-hook-form";
import {SyrianGovernorates} from "../../../../shared/shared/constants/syrianGovernorates.jsx";
import useRegionsStore from "../../../application/state/property/useRegionsStore.jsx";
import {useEffect} from "react";

const PropertyLocation = ({readOnly, property, setProperty, inputTitle, inputType, fieldName}) => {
    const {regions, setRegions} = useRegionsStore();
    const {register, watch, setValue, getValues} = useFormContext();

    useEffect(() => {
        const currentValue = getValues(inputTitle);
        if (currentValue !== property[inputTitle]) {
            setValue(inputTitle, property[inputTitle]);
        }
    }, [property[inputTitle], setValue, getValues]);

    const handleCityChange = (cityName) => {
        const selectedGovernorate = SyrianGovernorates.find((gov) => gov.name === cityName);
        const firstRegion = selectedGovernorate?.regions[0];
        setRegions(selectedGovernorate?.regions || []);
        setProperty({
            ...property,
            city: {name: cityName, id: selectedGovernorate?.id},
            region: firstRegion,
        });
    };


    const handleRegionChange = (regionName) => {
        const selectedGovernorate = SyrianGovernorates.find((gov) => gov.name === property.city.name);
        const region = selectedGovernorate.regions.find((region) => region.name === regionName);
        setProperty({...property, region});
    };

    const input = watch(inputTitle);

    useEffect(() => {
        handleCityChange(property.city?.name);
    }, [])

    useEffect(() => {
        if (input !== property[inputTitle]) {
            setProperty({...property, [inputTitle]: input});
        }
    }, [input]);

    return (
        <div className="flex flex-col">
            <Header2 title={"الموقع:"}/>
            <div className="flex flex-col gap-2 mx-12 my-6">
                <div className="flex flex-row flex-wrap items-center gap-6 w-full">
                    <div className="flex flex-col gap-2 flex-1">
                        <span style={styles}>المحافظة</span>
                        <SelectInput
                            key={property.city?.name}
                            title={property.city?.name}
                            options={SyrianGovernorates.map((gov) => gov.name)}
                            onChange={handleCityChange}
                            height={"60px"}
                            style={{
                                borderWidth: "1px",
                                fontWeight: 600,
                                color: TEXT_COLORS.primary,
                                fontSize: "18px",
                            }}
                            readOnly={readOnly}
                        />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                        <span style={styles}>المنطقة</span>
                        <SelectInput
                            key={property.city?.id}
                            title={property.region?.name}
                            options={regions.map((reg) => reg.name)}
                            onChange={handleRegionChange}
                            height={"60px"}
                            readOnly={readOnly}
                            style={{borderWidth: "1px", fontWeight: 600, fontSize: "18px"}}
                        />
                    </div>
                </div>

                <div className="flex flex-row justify-between flex-wrap w-full gap-6">
                    <div className="flex-1">
                        <TextInput
                            name={inputTitle}
                            title={fieldName}
                            type={inputType}
                            register={register}
                            readOnly={readOnly}
                        />
                    </div>
                    <div className="flex-1 flex flex-row flex-wrap justify-around items-center gap-4">
                        <span style={styles}>تحديد الموقع</span>
                        <div
                            className="relative w-[63px] h-[60px] rounded-[15px] border-[1px] bg-[#DBEDF6]
                                            transition-colors duration-200 cursor-pointer custom-hover"
                            style={{
                                "--hover-bg": "white",
                                borderColor: TEXT_COLORS.primary,
                            }}
                        >
                            <img
                                className="absolute object-cover right-1/2 transform translate-x-1/2 top-1/2 -translate-y-1/2"
                                src={map}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PropertyLocation;

const styles = {
    color: TEXT_COLORS.secondary,
    fontFamily: "Cairo",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "100%",
    letterSpacing: "3%",
    textAlign: "right",
};
