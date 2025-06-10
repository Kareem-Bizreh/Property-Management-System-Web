import Header from "./Header.jsx";
import CardPropertySaleTourist from "../shared/CardPropertySaleTourist.jsx";
import CardPropertyRent from "../shared/CardPropertyRent.jsx";

const MostRatedProperties = () => {
    const properties = [
        { name: 'شقة', location: 'دمشق, شعلان', price: '$1.500', rate: '4.2', duration: 'شهري' },
        { name: 'شقة', location: 'دمشق, شعلان', price: '$1.500', rate: '4.2', duration: 'شهري' },
        { name: 'شقة', location: 'دمشق, شعلان', price: '$1.500', rate: '4.2', duration: 'شهري' },
        { name: 'شقة', location: 'دمشق, شعلان', price: '$1.500', rate: '4.2', duration: 'شهري' },
        { name: 'شقة', location: 'دمشق, شعلان', price: '$1.500', rate: '4.2', duration: 'شهري' },
        { name: 'شقة', location: 'دمشق, شعلان', price: '$1.500', rate: '4.2', duration: 'شهري' },
        { name: 'شقة', location: 'دمشق, شعلان', price: '$1.500', rate: '4.2', duration: 'شهري' },
        { type: 'sale', name: 'بيت أبو العود', location: 'ريف دمشق, قدسيا', price: '30K $', space: '120' },
    ];

    return (
        <div className="flex flex-col max-w-screen mr-4">
            <Header name={'العقارات الأكثر تقييماً'} />

            <div className="flex overflow-x-auto p-2 gap-3.5">
                {properties.map((property, index) => (
                    <div key={index} className="flex-shrink-0">
                        {Object.prototype.hasOwnProperty.call(property, 'duration') ? (
                            <CardPropertyRent
                                state={'متوفر'}
                                name={property.name}
                                location={property.location}
                                price={property.price}
                                rate={property.rate}
                                duration={'شهري'}
                            />
                        ) : (
                            <CardPropertySaleTourist
                                type={'sale'}
                                state={'متوفر'}
                                name={property.name}
                                location={property.location}
                                price={property.price}
                                space={property.space}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostRatedProperties;