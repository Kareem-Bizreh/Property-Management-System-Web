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

    static toFormData(property) {
        const formData = new FormData();

        formData.append('postDescription', property.postDescription ?? '');
        formData.append('postTitle', property.postTitle ?? '');

        if (property.postImage instanceof File) {
            formData.append('postImage', property.postImage);
        }

        formData.append('tag', property.tag ?? '');
        formData.append('regionId', property.region?.id ?? '');
        formData.append('floor_number', property.floor_number ?? '');
        formData.append('latitude', property.coordinates?.latitude ?? '');
        formData.append('longitude', property.coordinates?.longitude ?? '');
        formData.append('area', property.area ?? '');
        formData.append('ownership_type', property.ownership_type ?? '');
        formData.append('direction', property.direction ?? '');
        formData.append('has_furniture', property.has_furniture);
        formData.append('status', property.status ?? 'متوفر');

        const room = property.room_counts ?? {};
        formData.append('room_details[room_count]', room.total ?? '');
        formData.append('room_details[bedroom_count]', room.bedroom ?? '');
        formData.append('room_details[living_room_count]', room.living_room ?? '');
        formData.append('room_details[kitchen_count]', room.kitchen ?? '');
        formData.append('room_details[bathroom_count]', room.bathroom ?? '');

        formData.append('listing_type', property.listing_type ?? '');


        if (property.listing_type === 'أجار') {
            // formData.append('rent_details', property.rent_details ?? {});
            formData.append('rent_details[rentalPrice]', property.rent_details?.rentalPrice ?? 0);
            formData.append('rent_details[rental_period]', property.rent_details?.rental_period ?? 0);
        } else {
            // formData.append('sell_details', property.sell_details ?? {});
            formData.append('sell_details[installment_allowed]', property.sell_details?.installment_allowed ?? false);
            formData.append('sell_details[installment_duration]', property.sell_details?.installment_duration ?? 1);
            formData.append('sell_details[selling_price]', property.sell_details?.selling_price ?? 0);
        }
        return formData;
    }
}
