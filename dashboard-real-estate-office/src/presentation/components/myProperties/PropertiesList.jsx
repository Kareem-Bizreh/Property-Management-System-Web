import AddCard from '../myProperties/AddCard.jsx'
import CardPropertyRent from "../shared/CardPropertyRent.jsx";
import CardPropertySaleTourist from "../shared/CardPropertySaleTourist.jsx";


const PropertiesList = () => {
    const properties = [
        { name: 'شقة', location: 'دمشق, شعلان', price: '$1.500', rate: '4.2', duration: 'شهري' },
        { type: 'sale', name: 'بيت أبو العود', location: 'ريف دمشق, قدسيا', price: '30K $', space: '120' },
        { name: 'شقة', location: 'دمشق, شعلان', price: '$1.500', rate: '4.2', duration: 'شهري' },
        { name: 'شقة', location: 'دمشق, شعلان', price: '$1.500', rate: '4.2', duration: 'شهري' },
        { type: 'sale', name: 'بيت أبو العود', location: 'ريف دمشق, قدسيا', price: '30K $', space: '120' },
        { name: 'شقة', location: 'دمشق, شعلان', price: '$1.500', rate: '4.2', duration: 'شهري' },
        { name: 'شقة', location: 'دمشق, شعلان', price: '$1.500', rate: '4.2', duration: 'شهري' },
        { type: 'sale', name: 'بيت أبو العود', location: 'ريف دمشق, قدسيا', price: '30K $', space: '120' },
        { name: 'شقة', location: 'دمشق, شعلان', price: '$1.500', rate: '4.2', duration: 'شهري' },
        { name: 'شقة', location: 'دمشق, شعلان', price: '$1.500', rate: '4.2', duration: 'شهري' },
    ];

    return (
        <div
            className="p-4 flex flex-row flex-wrap gap-4 md:gap-6"
        >
            <AddCard />
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
    )
}
export default PropertiesList
