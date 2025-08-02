import Header from "./Header.jsx";
import PropertySaleTouristCard from "../shared/PropertySaleTouristCard.jsx";
import {touristProperties} from "../../../shared/constants/properties.jsx";

const MostRatedTourist = () => {

    return (
        <div className="flex flex-col max-w-screen mr-4">
            <Header name={'الأماكن السياحية الأكثر تقييماً'}/>

            <div className="flex overflow-x-auto p-2 gap-3.5">
                {touristProperties.map((property, index) => (
                    <div key={index} className="flex-shrink-0">
                        <PropertySaleTouristCard property={property} type={'tourist'}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostRatedTourist;