export class Property {
    constructor(data) {
        this.id = data.propertyId;
        this.title = data.postTitle;
        this.postDescription = data.postDescription;
        this.postImage = data.postImage;
        this.postDate = data.postDate;
        this.postStatus = data.postStatus;
        this.area = data.area.toFixed(3);
        this.propertyType = data.property_type;
        this.ownershipType = data.ownership_type;
        this.direction = data.direction;
        this.status = data.status;
        this.coordinates = data.coordinates;
        this.floorNumber = data.floor_number;
        this.notes = data.notes;
        this.highlighted = data.highlighted;
        this.roomCounts = data.room_counts;
        this.hasFurniture = data.has_furniture;
        this.location = data.location;
        this.region = data.region;
        this.city = data.city;
        this.images = data.images;
        this.tag = data.tag;
        this.listingType = data.listing_type;
        if (this.listingType === 'أجار') {
            this.rate = data.rate;
            this.rentDetails = data.rent_details;
        }
        else {
            this.sellDetails = data.sell_details;
        }
    }
}
