import Header from "../../../../shared/presentation/components/dashboard/Header.jsx";
import PropertyRentCard from "../../../../shared/presentation/components/properties/PropertyRentCard.jsx";

const MostRatedProperties = ({properties}) => {
    return (
        <div className="flex flex-col max-w-screen">
            <Header name={'العقارات الأكثر تقييماً'}/>

            <div className="flex overflow-x-auto p-2 gap-3.5">
                {properties?.map((property, index) => (
                    <div key={index} className="flex-shrink-0">
                        <PropertyRentCard property={property}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostRatedProperties;