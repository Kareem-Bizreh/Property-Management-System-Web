import Header from "../components/shared/Header.jsx";
import PostDetails from "../components/shared/PostDetails.jsx";
import {useParams} from "react-router";
import PropertyDetails from "../components/myProperties/PropertyDetails.jsx";
import PropertyImages from "../components/shared/PropertyImages.jsx";
import useLoadingStore from "../../../shared/application/state/loadingStore.jsx";
import {Spinner} from "../../../shared/presentation/components/Spinner.jsx";

const PropertyPage = () => {
    const {isLoading} = useLoadingStore()
    const {id} = useParams();
    const property = {
        postTitle: "شي اب راتب ",
        postImage:
            "http://localhost:3002/real-estate-office/src/assets/cards/property_sale.jpg",
        postDate: "2025-06-11",
        id: id,
        area: 150.234,
        property_type: "عقار سكني",
        ownership_type: "طابو أخضر",
        direction: "شمال شرقي",
        status: "متوفر",
        location: {
            latitude: "15.2641200",
            longitude: "25.6581230",
        },
        floor_number: 4,
        notes: null,
        rate: 0,
        highlighted: false,
        room_counts: {
            total: 3,
            bedroom: 3,
            living_room: 2,
            kitchen: 2,
            bathroom: 2,
        },
        has_furniture: true,
        region: {
            id: 1,
            name: "ميدان",
        },
        city: {
            id: 1,
            name: "دمشق",
        },
        images: [
            {
                id: 17,
                image_url:
                    "http://localhost:3002/real-estate-office/src/assets/cards/property_sale.jpg",
            },
            {
                id: 18,
                image_url:
                    "http://localhost:3002/real-estate-office/src/assets/cards/property_sale.jpg",
            },
        ],
        tags: [
            {
                id: 1,
                name: "ارض",
            },
            {
                id: 2,
                name: "عمارة ",
            },
        ],
        listing_type: "بيع",
        sell_details: {
            selling_price: 150000,
            installment_allowed: true,
            installment_duration: 5,
        },
    };
    const tags = [
        {
            id: 1,
            name: "بيع",
        },
        {
            id: 2,
            name: "فيلا",
        },
        {
            id: 3,
            name: "ارض",
        },
        {
            id: 4,
            name: "عمارة",
        },
    ];

    const readOnly = property.status === "قيد الإنتظار";
    // const readOnly = true;
    return (
        <div className="flex flex-col gap-4">
            <div className="-mb-6">
                <Header title={"عرض عقار"}/>
            </div>
            <PostDetails
                readOnly={readOnly}
                post={{
                    date: property.postDate,
                    title: property.postTitle,
                    image: property.postImage,
                    tags: property.tags,
                }}
                options={tags}
            />
            <div className="flex flex-row gap-4 mx-6 flex-wrap">
                <div className="flex-5">
                    <PropertyDetails
                        property={property}
                        readOnly={readOnly}
                        status={property.status}
                    />
                </div>
                <div className="flex-2">
                    <PropertyImages images={property.images} readOnly={readOnly}/>
                </div>
            </div>
            {(isLoading ? (<Spinner/>) : null)}
        </div>
    );
};
export default PropertyPage;
