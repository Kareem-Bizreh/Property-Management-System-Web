import Header from "../../../../shared/presentation/components/dashboard/Header.jsx";
import PropertySaleTouristCard from "../../../../shared/presentation/components/properties/PropertySaleTouristCard.jsx";

const MostRatedTourist = ({properties}) => {

    return (
        <div className="flex flex-col max-w-screen">
            <Header name={'الأماكن السياحية الأكثر تقييماً'}/>

            <div className="flex overflow-x-auto p-2 gap-3.5">
                {properties?.map((property, index) => (
                    <div key={index} className="flex-shrink-0">
                        <PropertySaleTouristCard property={property} type={'tourist'}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostRatedTourist;