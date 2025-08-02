import AddCard from '../shared/AddCard.jsx'
import PropertyRentCard from "../shared/PropertyRentCard.jsx";
import PropertySaleTouristCard from "../shared/PropertySaleTouristCard.jsx";
// import {saleAndRentProperties} from "../../../shared/constants/properties.jsx";
import EmptyBox from '../../../assets/shared/EmptyBox.svg'
import usePropertiesStore from "../../../application/state/Property/usePropertiesStore.jsx";

const PropertiesList = () => {
    const {properties} = usePropertiesStore();
    return (
        <div
            className="p-4 flex flex-row flex-wrap gap-4 md:gap-6"
        >
            <AddCard title={'إضافة عقار'}/>
            {(properties && properties.length > 0) ? properties.map((property) => (
                    <div key={property.id} className="flex-shrink-0">
                        {(property.listing_type === 'أجار') ? (
                            <PropertyRentCard property={property}/>
                        ) : (
                            <PropertySaleTouristCard property={property} type={'sale'}/>
                        )}
                    </div>
                )) :
                (<img src={EmptyBox} alt="empty" className="flex-shrink-0 mt-20"/>)
            }
        </div>
    )
}
export default PropertiesList
