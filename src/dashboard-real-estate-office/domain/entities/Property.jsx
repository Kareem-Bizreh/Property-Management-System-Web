import {PropertyTags} from "../../shared/constants/propertyPostTag.jsx";
import {PropertyOwnershipTypes} from "../../shared/constants/propertyOwnershipType.jsx";
import {PropertyFurnishingTypes} from "../../shared/constants/propertyFurnishingTypes.jsx";

export class Property {
    constructor(data) {
        this.id = data.propertyId;
        this.postTitle = data.postTitle;
        this.postDescription = data.postDescription;
        this.postImage = data.postImage;
        this.postDate = data.postDate;
        this.postStatus = data.postStatus;
        this.area = data.area.toFixed(3);
        this.property_type = data.property_type;
        this.ownership_type = data.ownership_type;
        this.direction = data.direction;
        this.status = data.status;
        this.coordinates = data.coordinates;
        this.floor_number = data.floor_number;
        this.notes = data.notes;
        this.highlighted = data.highlighted;
        this.room_counts = data.room_counts;
        this.has_furniture = data.has_furniture;
        this.location = data.location;
        this.region = data.region;
        this.city = data.city;
        this.images = data.images;
        this.tag = data.tag;
        this.listing_type = data.listing_type;
        if (this.listing_type === 'أجار') {
            this.rate = data.rate;
            this.rent_details = data.rent_details;
        }
        else {
            this.sell_details = data.sell_details;
        }
    }

    static createInitial() {
        return new Property({
            postTitle: '',
            postDescription: '',
            postImage: '',
            postDate: new Date().toISOString().split('T')[0], // e.g. "2025-07-20"
            postStatus: '',
            area: 0,
            property_type: '',
            ownership_type: PropertyOwnershipTypes[0],
            direction: '',
            status: 'متوفر',
            coordinates: {
                latitude: '0.0',
                longitude: '0.0'
            },
            floor_number: 0,
            notes: '',
            highlighted: false,
            room_counts: {
                total: 0,
                bedroom: 0,
                living_room: 0,
                kitchen: 0,
                bathroom: 0
            },
            has_furniture: PropertyFurnishingTypes[0],
            location: 'دمشق, المزة',
            region: {
                id: 1,
                name: 'دمشق'
            },
            city: {
                id: 1,
                name: 'المزة'
            },
            images: [],
            tag: PropertyTags[0],
            rate: 0,
            listing_type: 'بيع',
            sell_details: {
                installment_allowed: false,
                installment_duration: 0,
                selling_price: 0
            },
        });
    }
}
