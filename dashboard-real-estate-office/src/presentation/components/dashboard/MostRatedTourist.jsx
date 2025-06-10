import Header from "./Header.jsx";
import CardPropertySaleTourist from "../shared/CardPropertySaleTourist.jsx";

const MostRatedTourist = () => {
    const properties = [
        {name: 'فيلا رقم 11', location: 'ريف دمشق, قدسيا', price: '250 $', space: '120'},
        {name: 'فيلا رقم 11', location: 'ريف دمشق, قدسيا', price: '250 $', space: '120'},
        {name: 'فيلا رقم 11', location: 'ريف دمشق, قدسيا', price: '250 $', space: '120'},
        {name: 'فيلا رقم 11', location: 'ريف دمشق, قدسيا', price: '250 $', space: '120'},
        {name: 'فيلا رقم 11', location: 'ريف دمشق, قدسيا', price: '250 $', space: '120'},
        {name: 'فيلا رقم 11', location: 'ريف دمشق, قدسيا', price: '250 $', space: '120'},
        {name: 'فيلا رقم 11', location: 'ريف دمشق, قدسيا', price: '250 $', space: '120'},
        {name: 'فيلا رقم 11', location: 'ريف دمشق, قدسيا', price: '250 $', space: '120'},
        {name: 'فيلا رقم 11', location: 'ريف دمشق, قدسيا', price: '250 $', space: '120'},
        {name: 'فيلا رقم 11', location: 'ريف دمشق, قدسيا', price: '250 $', space: '120'},
    ];

    return (
        <div className="flex flex-col max-w-screen mr-4">
            <Header name={'الأماكن السياحية الأكثر تقييماً'}/>

            <div className="flex overflow-x-auto p-2 gap-3.5">
                {properties.map((property, index) => (
                    <div key={index} className="flex-shrink-0">
                        <CardPropertySaleTourist
                            type={'tourist'}
                            state={'متوفر'}
                            name={property.name}
                            location={property.location}
                            price={property.price}
                            space={property.space}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostRatedTourist;