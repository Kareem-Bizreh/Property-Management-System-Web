import {PropertyTags} from "../../shared/constants/propertyPostTag.jsx";
import {PropertyFurnishingTypes} from "../../shared/constants/propertyFurnishingTypes.jsx";
import {TouristicStatus} from "../../shared/constants/TouristicStatus.jsx";
import {TourismPlaceWaterStatus} from "../../shared/constants/TourismPlaceWaterStatus.jsx";
import {TourismPlacePoolStatus} from "../../shared/constants/TourismPlacePoolStatus.jsx";
import {TourismPlaceElectricityStatus} from "../../shared/constants/TourismPlaceElectricityStatus.jsx";
import {SyrianGovernorates} from "../../../shared/shared/constants/syrianGovernorates.jsx";

export class Tourism {
    constructor(data) {
        this.id = data.propertyId;
        this.postTitle = data.title;
        this.postDescription = data.description;
        this.postImage = data.postImage;
        this.postDate = data.date;
        this.postStatus = data.postStatus;
        this.tag = data.tag;
        this.area = parseFloat(data.area).toFixed(2);
        this.coordinates = {
            lat: data.latitude,
            lng: data.longitude
        };
        this.status = data.status;
        const city = SyrianGovernorates.find((gov) => gov.name === data.city);
        this.city = city;
        this.region = city.regions.find((reg) => reg.name === data.region);
        this.location = data.location;
        this.street = data.street;
        this.room_counts = {
            total: data.roomCount,
            bedroom: data.bedroomCount,
            living_room: data.livingRoomCount,
            kitchen: data.kitchenCount,
            bathroom: data.bathroomCount,
        };
        this.price = data.price;
        this.has_furniture = data.hasFurniture;
        this.electricity = data.electricity;
        this.water = data.water;
        this.pool = data.pool;
        this.additional_services = data.additionalServices ?? [];
        this.images = data.images ?? [];
        this.financialRecord = data.financialRecord ?? [];
    }

    static cardData(data) {
        return {
            id: data.id,
            postTitle: data.title,
            postImage: data.postImage,
            location: data.location,
            area: data.area,
            price: data.price,
            postStatus: data.status,
        }
    }

    static createInitial() {
        return {
            postTitle: 'موقع العقار',
            postDescription: '',
            postImage: '',
            postDate: '',
            postStatus: '',
            tag: PropertyTags[0],
            area: 0,
            street: '',
            status: TouristicStatus[0],
            city: {
                id: 1,
                name: 'دمشق',
            },
            region: {
                id: 1,
                name: 'المزة',
            },
            location: 'دمشق, المزة',
            room_counts: {
                total: 0,
                bedroom: 0,
                living_room: 0,
                kitchen: 0,
                bathroom: 0,
            },
            coordinates: {
                lat: null,
                lng: null
            },
            price: 0,
            has_furniture: PropertyFurnishingTypes[0],
            electricity: TourismPlaceElectricityStatus[0],
            water: TourismPlaceWaterStatus[0],
            pool: TourismPlacePoolStatus[0],
            additional_services: [],
            images: [],
            financialRecord: [],
        };
    }

    static toFormData(tourism) {
        const formData = new FormData();

        if (tourism.postImage instanceof File) {
            formData.append("postImage", tourism.postImage);
        }

        formData.append("status", tourism.status);

        formData.append("post[description]", tourism.postDescription ?? '');
        formData.append("post[tag]", tourism.tag ?? '');

        formData.append("public_information[region_id]", tourism.region?.id?.toString() ?? '0');
        formData.append("public_information[room_count]", tourism.room_counts?.total?.toString() ?? '0');
        formData.append("public_information[latitude]", tourism.coordinates?.lat?.toString());
        formData.append("public_information[longitude]", tourism.coordinates?.lng?.toString());
        formData.append("public_information[area]", tourism.area?.toString() ?? '0');
        formData.append("public_information[has_furniture]", tourism.has_furniture ?? '');
        formData.append("public_information[living_room_count]", tourism.room_counts?.living_room?.toString() ?? '0');
        formData.append("public_information[kitchen_count]", tourism.room_counts?.kitchen?.toString() ?? '0');
        formData.append("public_information[bathroom_count]", tourism.room_counts?.bathroom?.toString() ?? '0');
        formData.append("public_information[bedroom_count]", tourism.room_counts?.bedroom?.toString() ?? '0');

        formData.append("tourism_place[price]", tourism.price?.toString() ?? '0');
        formData.append("tourism_place[street]", tourism.street ?? '');
        formData.append("tourism_place[electricity]", tourism.electricity ?? '');
        formData.append("tourism_place[water]", tourism.water ?? '');
        formData.append("tourism_place[pool]", tourism.pool ?? '');

        tourism.additional_services?.forEach((service, index) => {
            if (service) {
                formData.append(`tourism_place[additional_services][${index}]`, service);
            }
        });

        return formData;
    }
}
