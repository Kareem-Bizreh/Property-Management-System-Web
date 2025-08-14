import Header from "../../../../shared/presentation/components/dashboard/Header.jsx";
import PropertySaleTouristCard from "../../../../shared/presentation/components/properties/PropertySaleTouristCard.jsx";
import PropertyRentCard from "../../../../shared/presentation/components/properties/PropertyRentCard.jsx";
// import {saleAndRentProperties} from "../../../shared/constants/properties.jsx";
import useLoadingStore from "../../../../shared/application/state/useLoadingStore.jsx";
import usePropertiesStore from "../../../application/state/property/usePropertiesStore.jsx";
import {useEffect} from "react";
import {getAll} from "../../../application/useCases/residentialOffice/getPropertiesUseCase.jsx";

const MostRatedProperties = () => {
    const {setIsLoading} = useLoadingStore();
    const {properties, setProperties} = usePropertiesStore();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const {success, response} = await getAll();
            if (success) {
                setProperties(response.data);
            } else {
                setProperties([]);
            }
        }

        fetchData();
        setIsLoading(false);
    }, []);

    return (
        <div className="flex flex-col max-w-screen mr-4">
            <Header name={'العقارات الأكثر تقييماً'} />

            <div className="flex overflow-x-auto p-2 gap-3.5">
                {properties.map((property, index) => (
                    <div key={index} className="flex-shrink-0">
                        {(property.listingType === 'أجار') ? (
                            <PropertyRentCard property={property}/>
                        ) : (
                            <PropertySaleTouristCard property={property} type={'sale'}/>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostRatedProperties;