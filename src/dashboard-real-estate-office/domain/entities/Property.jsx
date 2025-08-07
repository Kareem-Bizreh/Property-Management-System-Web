import {PropertyTags} from "../../shared/constants/propertyPostTag.jsx";
import {PropertyOwnershipTypes} from "../../shared/constants/propertyOwnershipType.jsx";
import {PropertyFurnishingTypes} from "../../shared/constants/propertyFurnishingTypes.jsx";
import {Direction} from "../../shared/constants/Direction.jsx";

export class Property {
    constructor(data) {
        this.id = data.propertyId;
        this.residentialId = data.residentialId;
        this.postTitle = data.postTitle;
        this.postDescription = data.postDescription;
        this.postImage = data.postImage;
        this.postDate = data.postDate;
        this.postStatus = data.postStatus;
        this.area = data.area.toFixed(2);
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
            this.rate = data.rate.toFixed(1);
            this.rent_details = data.rent_details;
        } else {
            this.sell_details = data.sell_details;
        }
    }

    static createInitial() {
        return new Property({
            postTitle: '',
            postDescription: '',
            postImage: '',
            postDate: '',
            postStatus: '',
            area: 0,
            property_type: '',
            ownership_type: PropertyOwnershipTypes[0],
            direction: Direction[0],
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
            city: {
                id: 1,
                name: 'دمشق'
            },
            region: {
                id: 1,
                name: 'المزة'
            },
            images: [],
            tag: PropertyTags[0],
            rate: 0,
            listing_type: 'بيع',
            sell_details: {
                installment_allowed: false,
                installment_duration: 1,
                selling_price: 0
            },
        });
    }

    static toFormData(tourism) {
        const formData = new FormData();

        if (tourism.postImage instanceof File) {
            formData.append("postImage", tourism.postImage);
        }

        // ✅ Post
        if (tourism.postDescription) {
            formData.append("post[description]", tourism.postDescription);
        }
        if (tourism.tag) {
            formData.append("post[tag]", tourism.tag);
        }

        // ✅ Public Information
        if (tourism.region?.id !== undefined) {
            formData.append("public_information[region_id]", tourism.region.id.toString());
        }
        if (tourism.room_counts?.total !== undefined) {
            formData.append("public_information[room_count]", tourism.room_counts.total.toString());
        }
        if (tourism.coordinates?.latitude !== undefined) {
            formData.append("public_information[latitude]", tourism.coordinates.latitude.toString());
        }
        if (tourism.coordinates?.longitude !== undefined) {
            formData.append("public_information[longitude]", tourism.coordinates.longitude.toString());
        }
        if (tourism.area !== undefined) {
            formData.append("public_information[area]", tourism.area.toString());
        }
        if (tourism.has_furniture) {
            formData.append("public_information[has_furniture]", tourism.has_furniture);
        }
        if (tourism.room_counts?.living_room !== undefined) {
            formData.append("public_information[living_room_count]", tourism.room_counts.living_room.toString());
        }
        if (tourism.room_counts?.kitchen !== undefined) {
            formData.append("public_information[kitchen_count]", tourism.room_counts.kitchen.toString());
        }
        if (tourism.room_counts?.bathroom !== undefined) {
            formData.append("public_information[bathroom_count]", tourism.room_counts.bathroom.toString());
        }
        if (tourism.room_counts?.bedroom !== undefined) {
            formData.append("public_information[bedroom_count]", tourism.room_counts.bedroom.toString());
        }

        // ✅ Tourism Place
        if (tourism.price !== undefined) {
            formData.append("tourism_place[price]", tourism.price.toString());
        }
        if (tourism.street) {
            formData.append("tourism_place[street]", tourism.street);
        }
        if (tourism.electricity) {
            formData.append("tourism_place[electricity]", tourism.electricity);
        }
        if (tourism.water) {
            formData.append("tourism_place[water]", tourism.water);
        }
        if (tourism.pool) {
            formData.append("tourism_place[pool]", tourism.pool);
        }

        // ✅ Additional Services
        if (Array.isArray(tourism.additional_services)) {
            tourism.additional_services.forEach((service, index) => {
                formData.append(`tourism_place[additional_services][${index}]`, service);
            });
        }
        return formData;
    }
}
