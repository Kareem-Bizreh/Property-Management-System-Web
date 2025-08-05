import {PropertyTags} from "../../shared/constants/propertyPostTag.jsx";
import {PropertyFurnishingTypes} from "../../shared/constants/propertyFurnishingTypes.jsx";
import {TouristicStatus} from "../../shared/constants/TouristicStatus.jsx";
import {TourismPlaceWaterStatus} from "../../shared/constants/TourismPlaceWaterStatus.jsx";
import {TourismPlacePoolStatus} from "../../shared/constants/TourismPlacePoolStatus.jsx";
import {TourismPlaceElectricityStatus} from "../../shared/constants/TourismPlaceElectricityStatus.jsx";
import FinancialRecords from "../../presentation/components/tourism/FinancialRecords.jsx";

export class Tourism {
    constructor(data) {
        this.id = data.propertyId;
        this.postTitle = data.postTitle;
        this.postDescription = data.postDescription;
        this.postImage = data.postImage;
        this.postDate = data.postDate;
        this.postStatus = data.postStatus;
        this.tag = data.tag;
        this.area = data.area.toFixed(2);
        this.status = data.status;
        this.city = data.city;
        this.region = data.region;
        this.location = data.location;
        this.street = data.street;
        this.room_counts = data.room_counts;
        this.price = data.price;
        this.has_furniture = data.has_furniture;
        this.electricity = data.electricity;
        this.water = data.water;
        this.pool = data.pool;
        this.additional_services = data.additional_services;
        this.images = data.images;
        this.financialRecord = [];
    }

    static createInitial() {
        return new Tourism({
            postTitle: '',
            postDescription: '',
            postImage: '',
            postDate: '',
            postStatus: 'مقبول',
            tag: PropertyTags[0],
            area: 0,
            street: '',
            status: TouristicStatus[0],
            city: {
                id: 1,
                name: 'دمشق'
            },
            region: {
                id: 1,
                name: 'المزة'
            },
            location: 'دمشق, المزة',
            room_counts: {
                total: 0,
                bedroom: 0,
                living_room: 0,
                kitchen: 0,
                bathroom: 0
            },
            price: 0,
            has_furniture: PropertyFurnishingTypes[0],
            electricity: TourismPlaceElectricityStatus[0],
            water: TourismPlaceWaterStatus[0],
            pool: TourismPlacePoolStatus[0],
            additional_services: [],
            images: [],
            financialRecord: [],
        });
    }

    static toFormData(tourism) {
        return {
            postDescription: tourism.postDescription,
        };
    }
}
