import AddCard from '../shared/AddCard.jsx'
import CardPropertyRent from "../shared/CardPropertyRent.jsx";
import CardPropertySaleTourist from "../shared/CardPropertySaleTourist.jsx";
import {touristProperties} from "../../../shared/constants/properties.jsx";
import EmptyBox from '../../../assets/shared/EmptyBox.svg'

const TouristList = () => {
    return (
        <div
            className="p-4 flex flex-row flex-wrap gap-4 md:gap-6"
        >
            <AddCard title={'إضافة مكان سياحي'} />
            {(touristProperties && touristProperties.length > 0) ? touristProperties.map((property, index) => (
                    <div key={index} className="flex-shrink-0">
                        {Object.prototype.hasOwnProperty.call(property, 'duration') ? (
                            <CardPropertyRent property={property}/>
                        ) : (
                            <CardPropertySaleTourist property={property}/>
                        )}
                    </div>
                )) :
                (<img src={EmptyBox} alt="empty" className="flex-shrink-0 mt-20" />)
            }
        </div>
    )
}
export default TouristList
