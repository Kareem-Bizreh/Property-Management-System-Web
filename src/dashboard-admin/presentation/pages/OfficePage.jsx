import {useState} from 'react'
import Header from "../../../shared/presentation/components/Header.jsx";
import {CustomTabPanel, Tabs} from "../../../shared/presentation/components/Tabs.jsx";
import {useParams} from "react-router";
import GeneralDetails from "../components/offices/GeneralDetails.jsx";
import Logo from "../../../shared/presentation/components/office/Logo.jsx";
import PropertyRentCard from "../../../shared/presentation/components/properties/PropertyRentCard.jsx";
import PropertySaleTouristCard from "../../../shared/presentation/components/properties/PropertySaleTouristCard.jsx";

const OfficePage = () => {
    const [tab, setTab] = useState(0);
    const {id} = useParams();

    const name = 'المكتب'; // or مزود الخدمة
    const tabs = [`معلومات ${name}`, ...(name === 'المكتب' ? ['العقارات'] : [])];

    const properties =  [
        {
            "residentialId": 1,
            "postTitle": "شقة مفروشة للإيجار",
            "postDescription": "شقة مفروشة بالكامل في وسط المدينة",
            "postImage": "http://localhost:3000/uploads/properties/posts/images/1.jpg",
            "postDate": "2025-07-08",
            "postStatus": "مقبول",
            "propertyId": 12,
            "area": 120,
            "property_type": "سكني",
            "ownership_type": "تمليك",
            "direction": "شمال",
            "status": "متوفر",
            "coordinates": {
                "latitude": 33.514,
                "longitude": 36.276
            },
            "floor_number": 2,
            "notes": "بجانب المسجد",
            "highlighted": true,
            "room_counts": {
                "total": 5,
                "bedroom": 3,
                "living_room": 1,
                "kitchen": 1,
                "bathroom": 2
            },
            "has_furniture": true,
            "location": "دمشق, ميدان",
            "region": {
                "id": 3,
                "name": "ميدان"
            },
            "city": {
                "id": 1,
                "name": "دمشق"
            },
            "images": [
                {
                    "id": 5,
                    "image_url": "http://localhost:3000/uploads/properties/images/image1.jpg"
                }
            ],
            "tag": "مميز",
            "listing_type": "أجار",
            "rate": 4.5,
            "rent_details": {
                "price": 250000,
                "rental_period": "شهري"
            }
        },
        {
            "postTitle": "شقة للبيع بالتقسيط",
            "postDescription": "شقة للبيع في مشروع راقٍ مع إمكانية التقسيط",
            "postImage": "http://localhost:3000/uploads/properties/posts/images/2.jpg",
            "postDate": "2025-07-06",
            "postStatus": "متوفر",
            "propertyId": 18,
            "area": 150,
            "property_type": "سكني",
            "ownership_type": "تمليك",
            "direction": "شرقي",
            "status": "متاح",
            "coordinates": {
                "latitude": 33.52,
                "longitude": 36.3
            },
            "floor_number": 3,
            "notes": "بجانب الحديقة",
            "highlighted": false,
            "room_counts": {
                "total": 6,
                "bedroom": 4,
                "living_room": 1,
                "kitchen": 1,
                "bathroom": 2
            },
            "has_furniture": false,
            "location": "دمشق, مشروع دمر",
            "region": {
                "id": 5,
                "name": "مشروع دمر"
            },
            "city": {
                "id": 1,
                "name": "دمشق"
            },
            "images": [
                {
                    "id": 7,
                    "image_url": "http://localhost:3000/uploads/properties/images/image2.jpg"
                }
            ],
            "tag": "جديد",
            "listing_type": "بيع",
            "sell_details": {
                "selling_price": 150000000,
                "installment_allowed": true,
                "installment_duration": 24
            }
        }
    ];

    return (
        <div className="flex flex-col">
            <Header title={'المكاتب الوسيطة'}/>
            <Tabs tabs={tabs} minWidth={"50px"} border={false} tab={tab} setTab={setTab}
                  tabHeight={'45px'} bgHeight={'65px'} borderRadius={'15px'}/>

            <div className="p-4 w-full h-full">
                {/*معلومات المكتب*/}
                <CustomTabPanel value={tab} index={0}>
                    <div className="flex flex-row flex-wrap gap-5 h-auto">
                        <div className="flex-5">
                            <GeneralDetails readOnly={true} name={name}
                                            office={{city: {name: 'دمشق', id: 1}, region: {name: 'المزة', id: 1}}}/>
                        </div>
                        <div className="flex flex-col gap-4 w-[290px] flex-2">
                            <Logo office={{city: {name: 'دمشق', id: 1}}} name={name} readOnly={true}/>
                        </div>
                    </div>
                </CustomTabPanel>

                {/*العقارات*/}
                <CustomTabPanel value={tab} index={1}>
                    <div className="flex flex-row flex-wrap gap-5 h-auto">
                        {properties.map((property) => (
                            <div key={property.id} className="flex-shrink-0">
                                {(property.listing_type === 'أجار') ? (
                                    <PropertyRentCard property={property}/>
                                ) : (
                                    <PropertySaleTouristCard property={property} type={'sale'}/>
                                )}
                            </div>
                        ))}
                    </div>
                </CustomTabPanel>
            </div>
        </div>
    )
}
export default OfficePage
