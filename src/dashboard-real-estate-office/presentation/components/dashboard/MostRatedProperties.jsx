import Header from "../../../../shared/presentation/components/dashboard/Header.jsx";
import PropertySaleTouristCard from "../../../../shared/presentation/components/properties/PropertySaleTouristCard.jsx";
import PropertyRentCard from "../../../../shared/presentation/components/properties/PropertyRentCard.jsx";

const MostRatedProperties = ({properties}) => {
    return (
        <div className="flex flex-col max-w-screen">
            <Header name={'العقارات الأكثر تقييماً'} />

            <div className="flex overflow-x-auto p-2 gap-3.5">
                {properties?.map((property, index) => (
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