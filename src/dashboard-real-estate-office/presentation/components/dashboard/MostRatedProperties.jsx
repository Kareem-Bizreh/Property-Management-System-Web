import Header from "./Header.jsx";
import CardPropertySaleTourist from "../shared/CardPropertySaleTourist.jsx";
import CardPropertyRent from "../shared/CardPropertyRent.jsx";
import {saleAndRentProperties} from "../../../shared/constants/properties.jsx";

const MostRatedProperties = () => {

    return (
        <div className="flex flex-col max-w-screen mr-4">
            <Header name={'العقارات الأكثر تقييماً'} />

            <div className="flex overflow-x-auto p-2 gap-3.5">
                {saleAndRentProperties.map((property, index) => (
                    <div key={index} className="flex-shrink-0">
                        {Object.prototype.hasOwnProperty.call(property, 'duration') ? (
                            <CardPropertyRent property={property}/>
                        ) : (
                            <CardPropertySaleTourist property={property}/>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostRatedProperties;